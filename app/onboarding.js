export function createOnboarding({$, getState, save, go, esc, reduce, universityLogoPath}) {
  const PROGRAMS = [
    "Industrial Physics", "Industrial Maths", "Industrial Chemistry", "Computer Science", "Biology",
    "Microbiology", "Management Information Systems (MIS)", "Computer Engineering", "Electrical Engineering",
    "Mechanical Engineering", "Civil Engineering", "Petroleum Engineering", "Mechatronics Engineering",
    "Architecture", "Building Technology", "Estate Management", "Accounting", "Banking and Finance",
    "Business Administration", "Economics", "Industrial Relations and Human Resources Management", "Law",
    "International Relations", "Psychology", "Political Science", "English Language", "Medicine and Surgery",
    "Nursing Science", "Medical Laboratory Science", "Anatomy", "Physiology"
  ];
  const OB_STEPS = [
    {key:"university", title:"Choose your", accent:"university", sub:"Covenant University is available now. More universities are coming soon.", type:"university"},
    {key:"name", title:"What should we", accent:"call you?", sub:"Just your first name is fine. Friends see it when you go head to head.", type:"text"},
    {key:"level", title:"Which", accent:"level are you in?", sub:"This sets which courses come into orbit first.", type:"choice", options:["100 level","200 level","300 level","400 level"]},
    {key:"program", title:"What program are you", accent:"offering?", sub:"Choose your Covenant University program. It’ll appear as a tag on your page.", type:"program"},
    {key:"exam", title:"When’s your next", accent:"exam?", sub:"Orbit paces your sessions around it.", type:"choice", options:["This week","This month","Later this semester","Not sure yet"]}
  ];
  const emptyDraft = () => ({step:0, university:"", name:"", level:"", program:"", exam:""});
  let ob = emptyDraft();

  function saveOnboardingDraft(){
    const state = getState();
    state.onboard = {
      ...(state.onboard || {}),
      university:ob.university,
      name:ob.name,
      level:ob.level,
      program:ob.program,
      exam:ob.exam
    };
    save();
  }

  function renderOnboard(){
    const panel = $("obPanel");
    if(ob.step >= OB_STEPS.length){
      panel.innerHTML = `<div class="launch step-in"><div class="planet ringed"></div><h2 class="title">Building your orbit</h2><p class="sub">Lining up your courses, ${esc(ob.name || "there")}.</p></div>`;
      saveOnboardingDraft();
      setTimeout(() => go("v-system", {replaceHistory:true}), reduce ? 300 : 1500);
      return;
    }

    const step = OB_STEPS[ob.step];
    const dots = OB_STEPS.map((_, index) => `<i class="${index <= ob.step ? "on" : ""}"></i>`).join("");
    const body = step.type === "text"
      ? `<input class="field" id="obInput" type="text" autocomplete="given-name" maxlength="24" placeholder="Your name" value="${esc(ob[step.key])}">`
      : step.type === "university"
        ? `<div class="university-choices">
            <button class="university-choice" type="button" data-v="covenant" aria-pressed="${ob.university === "covenant"}">
              <img src="${universityLogoPath("covenant")}" alt=""><span>Covenant University</span><small>Available now</small>
            </button>
            <button class="university-choice" type="button" disabled aria-label="UNILAG, unavailable">
              <img src="${universityLogoPath("unilag")}" alt=""><span>UNILAG</span><small>Unavailable</small>
            </button>
            <button class="university-choice" type="button" disabled aria-label="Landmark University, unavailable">
              <img src="${universityLogoPath("landmark")}" alt=""><span>Landmark University</span><small>Unavailable</small>
            </button>
          </div>`
        : step.type === "program"
          ? `<label class="program-select-label" for="obProgram">Your program</label><div class="program-select-wrap"><select class="field program-select" id="obProgram" required><option value="" disabled ${ob.program ? "" : "selected"}>Select your program</option>${PROGRAMS.map(program => `<option value="${esc(program)}" ${ob.program === program ? "selected" : ""}>${esc(program)}</option>`).join("")}</select></div>`
          : `<div class="choices">${step.options.map(option => `<button class="choice" aria-pressed="${ob[step.key] === option}" data-v="${esc(option)}">${esc(option)}</button>`).join("")}</div>`;

    panel.innerHTML = `<div class="ob-dots">${dots}</div><div class="step-in"><h2 class="title">${step.title} <em>${step.accent}</em></h2><p class="sub">${step.sub}</p>${body}
      <div class="ob-actions">${ob.step ? '<button class="ghost" id="obBack">Back</button>' : "<span></span>"}<button class="btn btn-primary" id="obNext" ${ob[step.key] ? "" : "disabled"}>${ob.step === OB_STEPS.length - 1 ? "Finish" : "Continue"}</button></div></div>`;
    const next = $("obNext");
    if(step.type === "text"){
      const input = $("obInput");
      setTimeout(() => input.focus(), 50);
      input.addEventListener("input", () => { ob.name = input.value.trim(); next.disabled = !ob.name; saveOnboardingDraft(); });
      input.addEventListener("keydown", event => { if(event.key === "Enter" && ob.name){ ob.step++; renderOnboard(); } });
    }else if(step.type === "university"){
      panel.querySelectorAll(".university-choice:not(:disabled)").forEach(button => button.addEventListener("click", () => {
        ob.university = button.dataset.v;
        panel.querySelectorAll(".university-choice").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
        next.disabled = false;
        saveOnboardingDraft();
      }));
    }else if(step.type === "program"){
      $("obProgram").addEventListener("change", event => {
        ob.program = event.target.value;
        next.disabled = !ob.program;
        saveOnboardingDraft();
      });
    }else{
      panel.querySelectorAll(".choice").forEach(button => button.addEventListener("click", () => {
        ob[step.key] = button.dataset.v;
        panel.querySelectorAll(".choice").forEach(item => item.setAttribute("aria-pressed", item === button));
        next.disabled = false;
        saveOnboardingDraft();
      }));
    }
    next.addEventListener("click", () => { saveOnboardingDraft(); ob.step++; renderOnboard(); });
    const back = $("obBack");
    if(back) back.addEventListener("click", () => { saveOnboardingDraft(); ob.step--; renderOnboard(); });
  }

  function hasCompletedOnboarding(){
    const details = getState().onboard;
    return Boolean(details && details.university === "covenant" && details.name && details.level && details.program && details.exam);
  }

  function profileProgramTag(){
    const program = getState().onboard && getState().onboard.program;
    return program ? `<span class="program-tag">${esc(program)}</span>` : "";
  }

  function initialize(saved, name){
    ob = {
      step:0,
      university:saved.university === "covenant" ? "covenant" : "",
      name:String(saved.name || name).slice(0, 24),
      level:saved.level || "",
      program:PROGRAMS.includes(saved.program) ? saved.program : "",
      exam:saved.exam || ""
    };
    ob.step = !ob.university ? 0 : !ob.name ? 1 : !ob.level ? 2 : !ob.program ? 3 : !ob.exam ? 4 : 0;
  }

  function reset(){ ob = emptyDraft(); }

  return {renderOnboard, hasCompletedOnboarding, profileProgramTag, initialize, reset};
}
