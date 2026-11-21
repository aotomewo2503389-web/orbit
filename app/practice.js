export function createPracticeModule(api) {
  const { $, esc, reduce, COURSES, DIFFS, DIFF_N, bankFor, banks, realBank, weakTopics, cs, topicStats, prefsFor, save, go, currentView, renderHud, pushDuelProgress, recordChallengeOutcome, syncCodeChallenge, setActiveCourse, appBack } = api;
  let session = null;
  let timerInt = null;

  function rng(seed){ let a = seed >>> 0; return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffleWith(arr, r){ const a = arr.slice(); for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function diffOf(q){ return q.d || 2; }

  function buildSet(code, cfg){
    const bank = bankFor(code), random = cfg.seed != null ? rng(cfg.seed) : Math.random;
    let pool = bank;
    if(cfg.source === "past") pool = realBank[code] ? banks[code].filter(q => q.pastQuestion !== false) : [];
    if(cfg.source === "topic" && cfg.topic) pool = pool.filter(q => q.topic === cfg.topic);
    if(cfg.focus === "weak"){
      const weak = weakTopics(code), focused = pool.filter(q => weak.includes(q.topic));
      if(focused.length) pool = focused;
    }
    let ordered;
    if(cfg.seed != null){
      ordered = shuffleWith(pool.slice().sort((a, b) => String(a.id).localeCompare(String(b.id))), random);
    }else{
      const attempts = cs(code).attempts, stats = Object.fromEntries(topicStats(code).map(topic => [topic.topic, topic]));
      ordered = pool.map(q => {
        const attempt = attempts[q.id], topic = stats[q.topic];
        let weight = 1;
        if(!attempt) weight += 1.5;
        else{
          if(attempt.lastWrong) weight += 2.5;
          weight += (attempt.wrong / attempt.seen) * 2;
        }
        if(topic && topic.acc !== null) weight += (1 - topic.acc) * 3;
        return {q, key:Math.random() ** (1 / weight)};
      }).sort((a, b) => b.key - a.key).map(item => item.q);
    }
    let note = "";
    if(cfg.diff !== "mixed"){
      const wantedDifficulty = DIFF_N[cfg.diff], matching = ordered.filter(q => diffOf(q) === wantedDifficulty);
      if(matching.length < cfg.count) note = `Only ${matching.length} ${DIFFS[cfg.diff].toLowerCase()} question${matching.length === 1 ? "" : "s"} available, so the rest are mixed in.`;
      ordered = matching.concat(ordered.filter(q => diffOf(q) !== wantedDifficulty));
    }
    const count = Math.min(cfg.count, ordered.length);
    if(count < cfg.count && !note) note = `This course has ${count} questions so far, so the session is ${count} long.`;
    return {items:ordered.slice(0, count).map(q => ({q, opts:shuffleWith(q.options, random)})), note};
  }

  function startSolo(code, overrides = {}){
    const preferences = Object.assign(prefsFor(code), overrides), {items, note} = buildSet(code, preferences);
    setActiveCourse(code);
    session = {mode:"solo", code, items, note, i:0, correct:0, tags:{}, answers:[], timer:preferences.timer, timerEndsAt:null, explainEnd:preferences.explain === "end", title:preferences.label || "Practice session"};
    api.setSession(session);
    beginSession();
  }
  function beginSession(){
    if(session.timer) session.timerEndsAt = Date.now() + session.timer * 1000;
    go("v-practice"); renderQuestion(); renderHud();
    if(session.timer) startTimer();
  }
  function sessionTimeText(seconds){
    const minutes = Math.floor(seconds / 60), remainder = seconds % 60;
    return minutes ? `${minutes}:${String(remainder).padStart(2, "0")}` : `${remainder}s`;
  }
  function renderQuestion(){
    const item = session.items[session.i], count = session.items.length, saved = session.answers[session.i];
    const course = COURSES.find(entry => entry.code === session.code);
    $("practiceCourse").textContent = `${session.code} · ${course && course.name ? course.name : "Course practice"}`;
    $("practiceTitle").textContent = session.title;
    $("progBar").style.width = (session.i / count * 100) + "%";
    $("pqCount").textContent = `${session.i + 1} of ${count}`;
    const card = $("qcard");
    card.innerHTML = `${session.i === 0 && session.note ? `<p class="notice" style="margin:0 0 16px">${esc(session.note)}</p>` : ""}
      <div class="qmeta"><span class="qtopic">${esc(session.code)} · ${esc(item.q.topic)}</span>${session.timer ? `<span class="timer" id="timer" aria-label="Session time remaining"><svg width="26" height="26" viewBox="0 0 26 26"><circle class="bg" cx="13" cy="13" r="10"/><circle class="fg" id="timerFg" cx="13" cy="13" r="10" stroke-dasharray="62.83" stroke-dashoffset="0"/></svg><span class="timer-label">Time remaining</span><span id="timerTxt">${sessionTimeText(Math.max(0, Math.ceil((session.timerEndsAt - Date.now()) / 1000)))}</span></span>` : ""}</div>
      <p class="qprompt">${esc(item.q.prompt)}</p>
      <div class="opts" id="opts">${item.opts.map((option, index) => `<button class="opt${saved && option.ok ? " right" : ""}${saved && saved.pick === option ? " chosen" : ""}${saved && saved.pick === option && !saved.ok ? " wrong" : ""}" data-i="${index}"><kbd>${"ABCDE"[index]}</kbd><span>${esc(option.t)}</span></button>`).join("")}</div><div id="fb">${saved && !session.explainEnd ? answerFeedback(saved) : ""}</div>`;
    card.classList.remove("step-in"); void card.offsetWidth; card.classList.add("step-in");
    card.querySelectorAll(".opt").forEach(button => button.addEventListener("click", () => answer(+button.dataset.i)));
    const previous = $("prevBtn"); if(previous) previous.hidden = session.i === 0;
    const next = $("nextBtn");
    if(next){
      next.hidden = !saved;
      next.textContent = session.i === count - 1 ? "See results" : "Next question";
    }
  }
  function answerFeedback(response){
    return response.ok
      ? `<div class="feedback ok glass"><h4>Correct</h4><p class="working" style="border:0;padding:0;margin:0"><b>The working:</b> ${esc(response.q.explain)}</p></div>`
      : `<div class="feedback no glass"><h4>${response.pick ? "Not quite" : "Time’s up"}</h4>${response.tag ? `<p><span class="mtag">${esc(response.tag)}</span></p>` : ""}<p>${esc(response.why || "")}</p><p class="working"><b>The working:</b> ${esc(response.q.explain)}</p></div>`;
  }
  function startTimer(){
    stopTimer();
    const total = session.timer;
    timerInt = setInterval(() => {
      if(currentView() !== "v-practice"){ stopTimer(); return; }
      const left = Math.max(0, session.timerEndsAt - Date.now());
      const foreground = $("timerFg"), text = $("timerTxt"), timer = $("timer");
      if(foreground && text && timer){
        foreground.style.strokeDashoffset = 62.83 * (1 - left / (total * 1000));
        text.textContent = sessionTimeText(Math.ceil(left / 1000));
        timer.classList.toggle("low", left < 60 * 1000);
      }
      if(left <= 0){
        stopTimer();
        if(!session.answers[session.i]) answer(null);
        finishSession();
      }
    }, 100);
  }
  function stopTimer(){ clearInterval(timerInt); timerInt = null; }
  function answer(index){
    const box = $("opts"); if(!box) return;
    const item = session.items[session.i], question = item.q, pick = index == null ? null : item.opts[index];
    const correct = !!(pick && pick.ok), tag = pick ? pick.tag : "Ran out of time";
    const why = pick ? pick.why : "The timer ran out before you picked an answer.";
    const previous = session.answers[session.i], course = cs(session.code);
    const attempt = course.attempts[question.id] || {seen:0, wrong:0};
    if(!previous) attempt.seen++;
    if(previous && previous.ok !== correct) attempt.wrong = Math.max(0, attempt.wrong + (correct ? -1 : 1));
    if(previous && !previous.ok && previous.tag && (correct || previous.tag !== tag)) course.tags[previous.tag] = Math.max(0, (course.tags[previous.tag] || 0) - 1);
    if(!correct && tag && (!previous || previous.ok || previous.tag !== tag)) course.tags[tag] = (course.tags[tag] || 0) + 1;
    attempt.last = Date.now(); attempt.lastWrong = !correct;
    if(!correct && !previous) attempt.wrong++;
    course.attempts[question.id] = attempt; save();
    session.answers[session.i] = {q:question, pick, ok:correct, tag, why};
    session.correct = session.answers.reduce((score, response) => score + (response && response.ok ? 1 : 0), 0);
    session.tags = session.answers.reduce((tags, response) => {
      if(response && !response.ok && response.tag) tags[response.tag] = (tags[response.tag] || 0) + 1;
      return tags;
    }, {});
    pushDuelProgress();
    renderHud();
    renderQuestion();
    $("nextBtn").focus({preventScroll:true});
    if(!session.explainEnd) setTimeout(() => $("fb").scrollIntoView({behavior:reduce ? "auto" : "smooth", block:"nearest"}), 120);
  }
  function nextQuestion(){
    if(currentView() !== "v-practice") return;
    session.i++;
    if(session.i >= session.items.length){ finishSession(); return; }
    renderQuestion(); window.scrollTo({top:0, behavior:reduce ? "auto" : "smooth"});
  }
  function previousQuestion(){
    if(currentView() !== "v-practice" || session.i === 0) return;
    session.i--;
    renderQuestion(); window.scrollTo({top:0, behavior:reduce ? "auto" : "smooth"});
  }
  function finishSession(){
    if(!session || session.done) return;
    stopTimer(); cs(session.code).sessions++; save();
    session.done = true; recordChallengeOutcome(); pushDuelProgress();
    go("v-summary"); api.renderSummary();
    if(session.mode === "code-create" || session.mode === "code-accept") syncCodeChallenge(session);
  }
  function bindEvents(){
    const next = $("nextBtn"), previous = $("prevBtn"), leave = $("practiceLeave");
    if(next) next.addEventListener("click", nextQuestion);
    if(previous) previous.addEventListener("click", previousQuestion);
    if(leave) leave.addEventListener("click", appBack);
    document.addEventListener("keydown", event => {
      if(currentView() !== "v-practice" || event.metaKey || event.ctrlKey) return;
      if(event.target && event.target.tagName === "INPUT") return;
      const key = event.key.toUpperCase();
      let index = "ABCDE".indexOf(key);
      if(index < 0) index = ["1","2","3","4","5"].indexOf(key);
      const box = $("opts");
      if(index >= 0 && box && !box.classList.contains("locked") && box.children[index]) answer(index);
    });
  }

  return {
    get session(){ return session; },
    set session(value){ session = value; api.setSession(value); },
    buildSet,
    startSolo,
    beginSession,
    stopTimer,
    finishSession,
    bindEvents
  };
}
