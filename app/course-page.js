export async function renderDedicatedCoursePage(code, api) {
  const course = api.COURSES.find(item => item.code === code);
  if(!course) return;
  const prefs = api.prefsFor(code);
  const bank = api.bankFor(code);
  const topics = [...new Set(bank.map(q => q.topic).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const stats = api.topicStats(code);
  const answered = stats.reduce((total, topic) => total + topic.seen, 0);
  const accuracy = api.courseAcc(code);
  const weak = api.weakTopics(code);
  if(prefs.source === "past" && !api.realBank[code]) prefs.source = "all";
  if(prefs.source === "topic" && !topics.includes(prefs.topic)) prefs.topic = "";
  if(prefs.focus === "weak" && !weak.length) prefs.focus = "all";

  const sourceOptions = [
    ["all", api.NOTE_BANK_COURSES.has(code) ? "All questions" : "All"],
    ...(api.realBank[code] ? [["past","Past questions"]] : []),
    ...(topics.length ? [["topic","A topic"]] : [])
  ];
  const topicRows = topics.length ? topics.map(topic => {
    const topicStat = stats.find(item => item.topic === topic);
    const percent = topicStat && topicStat.acc !== null ? Math.round(topicStat.acc * 100) : null;
    return `<article class="course-topic-row">
      <div class="course-topic-copy"><strong>${api.esc(topic)}</strong><span>${topicStat ? `${topicStat.seen} answered` : "Ready to practise"}</span></div>
      <div class="course-topic-meter meter"><i style="width:${percent === null ? 0 : percent}%;background:var(--ink)"></i></div>
      <span class="course-topic-score">${percent === null ? "—" : `${percent}%`}</span>
      <button class="course-topic-action" type="button" data-topic="${api.esc(topic)}" aria-label="Practise ${api.esc(topic)}">Practise <span aria-hidden="true">↗</span></button>
    </article>`;
  }).join("") : `<p class="course-empty-copy">Topic progress will appear here as course questions are added and you practise them.</p>`;

  const questionRows = bank.length ? bank.slice(0, 6).map((question, index) => `
    <article class="course-question-row">
      <span class="course-question-number">${String(index + 1).padStart(2, "0")}</span>
      <div><span class="course-question-topic">${api.esc(question.topic || "Course question")}</span><p>${api.esc(question.prompt)}</p></div>
    </article>`).join("") : `<div class="course-empty glass"><span class="course-empty-mark" aria-hidden="true">${api.courseMark(course)}</span><div><strong>Your course space is ready.</strong><p>No course-specific questions are published yet. You can still explore a starter practice set while the question bank is prepared.</p></div></div>`;

  api.$("coursePage").innerHTML = `
    <header class="course-hero glass">
      <div class="course-hero-copy">
        <div class="course-university"><img src="/universities/covenant-university.jpeg" alt=""><span>Covenant University</span></div>
        <p class="eyebrow">${api.esc(course.code)} · COURSE SPACE</p>
        <h1 class="course-title">${api.esc(course.name || "Course practice")}</h1>
        <p class="course-lede">A focused space for your ${api.esc(course.code)} revision. Choose a quick warm-up or shape a session around the way you want to study.</p>
        <button class="btn btn-primary course-warmup" type="button" data-course-start="warmup">Start 10-minute warm-up <span aria-hidden="true">↗</span></button>
      </div>
      <div class="course-hero-mark">${api.courseMark(course, "course-mark--large")}<span>${api.esc(course.code)}</span><small>${course.credits === undefined ? "Course practice" : `${course.credits} credits`}</small></div>
    </header>
    <div class="course-stats" aria-label="${api.esc(course.code)} progress">
      <article class="course-stat glass"><span>Current mastery</span><strong>${accuracy === null ? "—" : `${Math.round(accuracy * 100)}%`}</strong><small>${answered ? `${answered} answers recorded` : "Your progress starts here"}</small></article>
      <article class="course-stat glass"><span>Questions solved</span><strong>${answered}</strong><small>Across your practice sessions</small></article>
      <article class="course-stat glass"><span>Practice sessions</span><strong>${api.cs(code).sessions}</strong><small>${bank.length ? `${bank.length} course questions available` : "Starter practice set available"}</small></article>
    </div>
    <section class="course-section">
      <div class="course-section-heading"><div><p class="eyebrow">CURATED PRACTICE</p><h2>Choose your next set</h2></div><span class="course-section-note">${bank.length ? `${bank.length} questions in your bank` : "A calm place to begin"}</span></div>
      <div class="course-practice-grid">
        <button class="course-practice-card course-practice-card--feature" type="button" data-course-start="warmup"><span class="course-card-icon" aria-hidden="true">◷</span><span class="course-card-kicker">10 MINUTES · 5 QUESTIONS</span><strong>Warm up your focus.</strong><small>A short timed set to get into the rhythm.</small><span class="course-card-arrow" aria-hidden="true">↗</span></button>
        <button class="course-practice-card" type="button" data-jump-settings><span class="course-card-icon" aria-hidden="true">✳</span><span class="course-card-kicker">MADE FOR YOU</span><strong>Build a practice set.</strong><small>Choose topics, pace and difficulty for this session.</small><span class="course-card-arrow" aria-hidden="true">↗</span></button>
      </div>
    </section>
    <div class="course-content-grid">
      <section class="course-panel glass" id="courseSettings">
        <div class="course-section-heading course-panel-heading"><div><p class="eyebrow">YOUR SESSION</p><h2>Set the pace.</h2></div></div>
        <div class="course-pref"><label>Questions from</label>${api.seg("source", sourceOptions, prefs.source)}</div>
        <label class="topic-select-wrap course-topic-select" id="courseTopicWrap" ${prefs.source === "topic" ? "" : "hidden"}><span>Choose a topic</span><select class="topic-select" id="courseTopic"><option value="">Select a topic</option>${topics.map(topic => `<option value="${api.esc(topic)}" ${prefs.topic === topic ? "selected" : ""}>${api.esc(topic)}</option>`).join("")}</select></label>
        <div class="course-pref"><label>Questions</label>${api.seg("count", [[5,"5"],[10,"10"],[15,"15"],[20,"20"],[60,"60"]], prefs.count)}</div>
        <div class="course-pref"><label>Session timer</label>${api.seg("timer", [[0,"Off"],[600,"10m"],[1200,"20m"],[1800,"30m"],[3600,"60m"]], prefs.timer)}</div>
        <div class="course-pref"><label>Difficulty</label>${api.seg("diff", Object.entries(api.DIFFS), prefs.diff)}</div>
        <div class="course-pref"><label>Focus</label>${api.seg("focus", [["all","All topics"],["weak","Weak spots"]], prefs.focus, weak.length ? [] : ["weak"])}</div>
        <div class="course-pref"><label>Explanations</label>${api.seg("explain", [["each","After each"],["end","At the end"]], prefs.explain)}</div>
        ${bank.length ? "" : `<p class="course-starter-note">This course has no published question bank yet; the starter set is used for practice.</p>`}
        <div class="course-session-actions"><button class="btn btn-primary" id="courseStart" type="button" ${prefs.source === "topic" && !prefs.topic ? "disabled" : ""}>Start practice</button><button class="btn btn-soft" id="courseDuel" type="button">Duel a friend</button></div>
        <button class="course-weak-link" id="courseWeakSpots" type="button" ${weak.length ? "" : "disabled"}>Review weak spots for ${api.esc(course.code)}</button>
      </section>
      <div class="course-side-column">
        <section class="course-panel glass">
          <div class="course-section-heading course-panel-heading"><div><p class="eyebrow">YOUR PROGRESS</p><h2>Topic map</h2></div></div>
          <div class="course-topic-list">${topicRows}</div>
        </section>
        <section class="course-panel glass course-question-bank">
          <div class="course-section-heading course-panel-heading"><div><p class="eyebrow">QUESTION BANK</p><h2>High-yield questions</h2></div><span class="course-section-note">${bank.length ? `${bank.length} total` : "Coming soon"}</span></div>
          <div class="course-question-list">${questionRows}</div>
        </section>
      </div>
    </div>`;

  const root = api.$("coursePage");
  root.querySelectorAll(".seg").forEach(control => control.addEventListener("click", event => {
    const button = event.target.closest("button");
    if(!button || !control.contains(button) || button.disabled) return;
    const key = control.dataset.key;
    let value = button.dataset.v;
    if(key === "count" || key === "timer") value = +value;
    api.cs(code).prefs = Object.assign(api.prefsFor(code), {[key]:value});
    api.save();
    control.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    api.layoutThumbs(root);
    if(key === "source"){
      api.$("courseTopicWrap").hidden = value !== "topic";
      api.$("courseStart").disabled = value === "topic" && !api.$("courseTopic").value;
    }
  }));
  root.querySelectorAll(".seg").forEach(api.layoutThumbs);
  api.$("courseTopic").addEventListener("change", event => {
    api.cs(code).prefs = Object.assign(api.prefsFor(code), {topic:event.target.value});
    api.save();
    api.$("courseStart").disabled = !event.target.value;
  });
  api.$("courseStart").onclick = () => api.startSolo(code);
  api.$("courseDuel").onclick = api.openDuel;
  api.$("courseWeakSpots").onclick = () => api.startSolo(code, {focus:"weak", label:"Weak-spot practice"});
  root.querySelectorAll('[data-course-start="warmup"]').forEach(button => button.addEventListener("click", () => {
    api.startSolo(code, {source:"all", topic:"", count:5, timer:600, focus:"all", label:"10-minute warm-up"});
  }));
  root.querySelectorAll("[data-jump-settings]").forEach(button => button.addEventListener("click", () => {
    api.$("courseSettings").scrollIntoView({behavior: api.reduce ? "auto" : "smooth", block:"start"});
  }));
  root.querySelectorAll("[data-topic]").forEach(button => button.addEventListener("click", () => {
    api.startSolo(code, {source:"topic", topic:button.dataset.topic, count:5, focus:"all", label:`${button.dataset.topic} practice`});
  }));
}
