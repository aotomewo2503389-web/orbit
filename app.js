/* ===================== Sample bank (stands in until past questions are added) ===================== */
const SAMPLE = [
 {id:"q01",d:2,topic:"Electrostatics",prompt:"Two point charges, +2 μC and +3 μC, sit 0.30 m apart in air. What is the force between them? (k = 9.0 × 10⁹ N m² C⁻²)",
  options:[{t:"0.60 N, repulsive",ok:true},{t:"0.60 N, attractive",tag:"Force direction",why:"Like charges repel. Both charges are positive, so the force pushes them apart."},{t:"0.18 N, repulsive",tag:"Forgot to square r",why:"You divided by r = 0.30 m instead of r² = 0.09 m². Coulomb’s law falls off with the square of distance."},{t:"6.0 × 10¹¹ N, repulsive",tag:"Dropped a unit prefix",why:"1 μC is 10⁻⁶ C. Leaving the prefix out inflates the answer by 10¹²."}],
  explain:"F = kq₁q₂/r² = (9.0 × 10⁹)(2 × 10⁻⁶)(3 × 10⁻⁶)/(0.30)² = 0.054/0.09 = 0.60 N. Both charges are positive, so they repel."},
 {id:"q02",d:1,topic:"Electrostatics",prompt:"What is the magnitude of the electric field 2.0 m from a point charge of 8.0 nC? (k = 9.0 × 10⁹ N m² C⁻²)",
  options:[{t:"18 N/C",ok:true},{t:"36 N/C",tag:"Forgot to square r",why:"You divided by r = 2 m once. The field goes as 1/r², so divide by 4 m²."},{t:"72 N/C",tag:"Left out the distance",why:"72 is just kq. The field still has to be divided by r²."},{t:"1.8 × 10¹⁰ N/C",tag:"Dropped a unit prefix",why:"1 nC is 10⁻⁹ C. Without it the answer is a billion times too big."}],
  explain:"E = kq/r² = (9.0 × 10⁹)(8.0 × 10⁻⁹)/(2.0)² = 72/4 = 18 N/C."},
 {id:"q03",d:2,topic:"Electrostatics",prompt:"A closed surface encloses a charge +q and a charge −q. What is the net electric flux through the surface?",
  options:[{t:"Zero",ok:true},{t:"2q/ε₀",tag:"Ignored charge sign",why:"Gauss’s law uses the net enclosed charge. +q and −q add to zero, not 2q."},{t:"q/ε₀",tag:"Counted one charge only",why:"Both charges are inside the surface, so both count toward the enclosed charge."},{t:"It depends on the shape of the surface",tag:"Thinks flux depends on shape",why:"For a closed surface, flux depends only on the enclosed charge, never on the surface’s shape or size."}],
  explain:"Φ = Q_enc/ε₀, and Q_enc = (+q) + (−q) = 0, so the net flux is zero. Field lines leave near +q and re-enter near −q."},
 {id:"q04",d:1,topic:"Capacitance",prompt:"A 2.0 μF and a 3.0 μF capacitor are connected in series. What is the equivalent capacitance?",
  options:[{t:"1.2 μF",ok:true},{t:"5.0 μF",tag:"Series and parallel swapped",why:"Adding capacitances directly is the parallel rule. In series, the reciprocals add."},{t:"0.83 μF",tag:"Forgot to invert",why:"1/2 + 1/3 = 0.83 is 1/C. Flip it to get C = 1.2 μF."},{t:"6.0 μF",tag:"Product without the sum",why:"For two in series, C = C₁C₂/(C₁ + C₂). You used the top half only."}],
  explain:"1/C = 1/2 + 1/3 = 5/6, so C = 6/5 = 1.2 μF. Series capacitance is always smaller than the smallest capacitor."},
 {id:"q05",d:2,topic:"Capacitance",prompt:"A 10 μF capacitor is charged to 20 V. How much energy does it store?",
  options:[{t:"2.0 mJ",ok:true},{t:"4.0 mJ",tag:"Forgot the ½",why:"Stored energy is ½CV². Without the ½ you get double."},{t:"0.10 mJ",tag:"Forgot to square",why:"You used ½CV. Energy depends on V², so 20 V becomes 400 V²."},{t:"2000 J",tag:"Dropped a unit prefix",why:"10 μF is 10 × 10⁻⁶ F. Treating it as 10 F makes the answer a million times too big."}],
  explain:"U = ½CV² = ½(10 × 10⁻⁶)(20)² = ½(10⁻⁵)(400) = 2.0 × 10⁻³ J = 2.0 mJ."},
 {id:"q06",d:1,topic:"Circuits",prompt:"A 12 Ω resistor is connected across a 6.0 V supply. What power does it dissipate?",
  options:[{t:"3.0 W",ok:true},{t:"72 W",tag:"Multiplied V by R",why:"V × R isn’t a power formula. Use P = V²/R or P = IV."},{t:"0.50 W",tag:"Gave current, not power",why:"6/12 = 0.5 is the current in amperes. Multiply by V to get power."},{t:"0.25 W",tag:"Stopped halfway",why:"0.25 is I². Multiply by R = 12 Ω: P = I²R = 3.0 W."}],
  explain:"P = V²/R = 36/12 = 3.0 W. Check: I = V/R = 0.5 A, and P = IV = 0.5 × 6 = 3.0 W."},
 {id:"q07",d:1,topic:"Magnetism",prompt:"An electron moves parallel to a uniform magnetic field. What force does the field exert on it?",
  options:[{t:"No force",ok:true},{t:"Maximum force, qvB",tag:"Ignored the angle",why:"F = qvB sin θ. Moving parallel means θ = 0, and sin 0 = 0."},{t:"A force along the field direction",tag:"Treated B like an E-field",why:"Magnetic force is always perpendicular to both v and B, never along B."},{t:"A force that speeds it up",tag:"Thinks B does work",why:"Magnetic force is perpendicular to velocity, so it never changes speed, only direction."}],
  explain:"F = qvB sin θ with θ = 0°, so F = 0. The electron carries on in a straight line at constant speed."},
 {id:"q08",d:3,topic:"Magnetism",prompt:"A long straight wire carries 10 A. What is the magnetic field 5.0 cm from it? (μ₀ = 4π × 10⁻⁷ T m A⁻¹)",
  options:[{t:"4.0 × 10⁻⁵ T",ok:true},{t:"2.5 × 10⁻⁴ T",tag:"Dropped the 2π",why:"The field of a long wire is μ₀I/(2πr). Leaving out 2π makes it about six times too big."},{t:"2.0 × 10⁻⁵ T",tag:"Doubled the distance",why:"r is the distance from the wire, 0.05 m. Using 0.10 m halves the field."},{t:"2.0 × 10⁻⁶ T",tag:"Left out the distance",why:"μ₀I/2π = 2 × 10⁻⁶ T m. You still need to divide by r = 0.05 m."}],
  explain:"B = μ₀I/(2πr) = (4π × 10⁻⁷)(10)/(2π × 0.05) = (2 × 10⁻⁶)/0.05 = 4.0 × 10⁻⁵ T."},
 {id:"q09",d:2,topic:"Induction",prompt:"The flux through each turn of a 200-turn coil falls from 0.030 Wb to 0.010 Wb in 0.10 s. What is the average induced emf?",
  options:[{t:"40 V",ok:true},{t:"0.20 V",tag:"Forgot the number of turns",why:"That’s the emf per turn. Faraday’s law multiplies by N = 200."},{t:"4.0 V",tag:"Didn’t divide by time",why:"200 × 0.020 = 4.0 Wb is the change in flux linkage. Divide by 0.10 s for the rate."},{t:"60 V",tag:"Used one flux value, not the change",why:"The emf depends on the change in flux, 0.030 − 0.010 = 0.020 Wb, not the starting value."}],
  explain:"ε = NΔΦ/Δt = 200 × (0.030 − 0.010)/0.10 = 200 × 0.20 = 40 V."},
 {id:"q10",d:2,topic:"Induction",prompt:"The north pole of a bar magnet is pushed towards one end of a coil. What does that end of the coil become while the magnet is moving?",
  options:[{t:"A north pole",ok:true},{t:"A south pole",tag:"Lenz direction flipped",why:"A south pole would pull the magnet in, creating energy for free. The induced current opposes the change instead."},{t:"Nothing, because there’s no battery",tag:"Thinks induction needs a source",why:"The changing flux itself drives the current. No battery is needed."},{t:"A north pole only if the magnet moves fast",tag:"Speed decides direction",why:"Speed changes the size of the emf, not its direction."}],
  explain:"Lenz’s law: the induced current opposes the change causing it. To push back on an approaching north pole, the near end becomes a north pole."},
 {id:"q11",d:1,topic:"Transformers",prompt:"An ideal transformer has 1200 primary turns and 60 secondary turns. The primary is connected to 240 V a.c. What is the secondary voltage?",
  options:[{t:"12 V",ok:true},{t:"4800 V",tag:"Inverted turns ratio",why:"Fewer secondary turns means a step-down. You used Np/Ns instead of Ns/Np."},{t:"240 V",tag:"Thinks it stays the same",why:"A transformer changes voltage in proportion to the turns ratio."},{t:"20 V",tag:"Gave the ratio, not the answer",why:"20 is Np/Ns. Divide 240 V by it to get the secondary voltage."}],
  explain:"Vs/Vp = Ns/Np, so Vs = 240 × 60/1200 = 12 V."},
 {id:"q12",d:3,topic:"Transformers",prompt:"In the same ideal transformer (1200 primary turns, 60 secondary turns), the secondary delivers 2.0 A. What current flows in the primary?",
  options:[{t:"0.10 A",ok:true},{t:"40 A",tag:"Inverted turns ratio",why:"Current steps the opposite way to voltage. A step-down transformer has the smaller current on the primary side."},{t:"2.0 A",tag:"Thinks it stays the same",why:"Power in equals power out. If voltage drops 20 times, the primary current is 20 times smaller than the secondary current."}],
  explain:"For an ideal transformer, VpIp = VsIs, so Ip = VsIs/Vp = (12 × 2.0)/240 = 0.10 A. Equivalently, Ip = Is × Ns/Np = 2.0 × 60/1200."},
 {id:"q13",d:2,topic:"Transformers",prompt:"A steady d.c. supply is connected to a transformer’s primary. After the moment of switch-on, what is the secondary output?",
  options:[{t:"Zero",ok:true},{t:"Stepped-down d.c.",tag:"Thinks transformers work on d.c.",why:"Steady d.c. gives a constant flux. No change in flux means no induced emf."},{t:"Stepped-down a.c.",tag:"Thinks transformers make a.c.",why:"A transformer can’t turn steady current into alternating current. It only passes on changes in flux."}],
  explain:"Transformers rely on a changing flux. Steady d.c. sets up a constant flux after switch-on, so dΦ/dt = 0 and the secondary emf is zero."},
 {id:"q14",d:2,topic:"Inductors",prompt:"A 0.20 H inductor carries a steady 3.0 A. How much energy is stored in its magnetic field?",
  options:[{t:"0.90 J",ok:true},{t:"1.8 J",tag:"Forgot the ½",why:"Stored energy is ½LI². Without the ½ you get double."},{t:"0.30 J",tag:"Forgot to square",why:"You used ½LI. Energy depends on I², so 3 A becomes 9 A²."},{t:"0.60 J",tag:"Used LI",why:"LI is the flux linkage, not the energy. Energy is ½LI²."}],
  explain:"U = ½LI² = ½ × 0.20 × 3.0² = 0.10 × 9 = 0.90 J."},
 {id:"q15",d:2,topic:"Inductors",prompt:"The current in a 0.50 H inductor rises at 4.0 A/s. What emf is induced across it?",
  options:[{t:"2.0 V",ok:true},{t:"8.0 V",tag:"Divided instead of multiplied",why:"4.0/0.50 = 8. Self-induced emf is L × dI/dt, not dI/dt ÷ L."},{t:"0.125 V",tag:"Divided instead of multiplied",why:"0.50/4.0 = 0.125. Multiply L by the rate of change of current."},{t:"Zero, because the current isn’t reversing",tag:"Confused change with reversal",why:"Any change in current induces an emf, not just a reversal."}],
  explain:"|ε| = L dI/dt = 0.50 × 4.0 = 2.0 V, directed to oppose the rising current."},
 {id:"q16",d:3,topic:"Inductors",prompt:"An RL circuit has L = 2.0 H and R = 4.0 Ω. What is its time constant?",
  options:[{t:"0.50 s",ok:true},{t:"8.0 s",tag:"Multiplied L and R",why:"LR isn’t a time. The RL time constant is τ = L/R."},{t:"2.0 s",tag:"Inverted L/R",why:"4/2 = 2 is R/L, which has units of s⁻¹. Flip it."}],
  explain:"τ = L/R = 2.0/4.0 = 0.50 s. After one time constant the current reaches about 63% of its final value."}
];
const COURSES = [
  {code:"PHY211",name:"Elementary Modern Physics",credits:2,category:"C",h:262,icon:"physics"},
  {code:"PHY232",name:"Electric Circuit and Electronics",credits:2,category:"C",h:32,icon:"physics"},
  {code:"MTH213",name:"Elementary Differential Equations",credits:2,category:"C",h:168,icon:"maths"},
  {code:"PHY215",name:"Thermal Physics",credits:2,category:"C",h:345,icon:"physics"},
  {code:"PHY212",h:212,icon:"physics"},
  {code:"PHY218",name:"Experimental Physics I",credits:1,category:"C",h:12,icon:"physics"},
  {code:"GST211",name:"Philosophy, Logic and Human Existence",credits:2,category:"U",h:140,icon:"general"},
  {code:"DLD111",name:"Introduction to Leadership Development",credits:0,category:"V",h:290,icon:"general"},
  {code:"TMC211",name:"Success Parameters",credits:1,category:"V",h:48,icon:"general"},
  {code:"CIT211",name:"Oracle - Java Foundations",credits:0,category:"V",h:196,icon:"computing"},
  {code:"CSC233",name:"Programming with C++",credits:3,category:"C",h:220,icon:"computing"},
  {code:"ENT211",name:"Entrepreneurial Development and Innovation",credits:2,category:"U",h:28,icon:"engineering"},
  {code:"MTH111",name:"Elementary Mathematics I",credits:2,category:"C",h:185,icon:"maths"},
  {code:"PHY111",name:"General Physics I",credits:2,category:"C",h:226,icon:"physics"},
  {code:"PHY113",name:"General Physics III",credits:2,category:"C",h:244,icon:"physics"},
  {code:"PHY213",name:"Thin Film Technology and Solar Energy Laboratory",credits:2,category:"C",h:34,icon:"chemistry"},
  {code:"TMC212",h:52,icon:"general"}
];
const COURSES_BY_PROGRAM_LEVEL = {
  "Industrial Physics": {
    "100 level": ["PHY111","PHY113","MTH111"],
    "200 level": ["CIT211","CSC233","DLD111","ENT211","GST211","MTH213","PHY211","PHY213","PHY215","PHY218","PHY232","TMC211","TMC212"]
  }
};
const UNIVERSITY_LOGOS = {
  covenant:"covenant-university.jpeg",
  unilag:"unilag.jpeg",
  landmark:"landmark-university.jpeg"
};
function universityLogoPath(university){
  const base = location.protocol === "file:" ? "public/universities/" : "/universities/";
  return base + UNIVERSITY_LOGOS[university];
}
const LANDING_COURSES = [
  {name:"Maths",h:262,icon:"maths"},{name:"Physics",h:32,icon:"physics"},{name:"Computer Science",h:168,icon:"computing"},
  {name:"Computer Engineering",h:345,icon:"engineering"},{name:"Biology",h:212,icon:"biology"}
];
const COURSE_ICONS = {
  maths: '<svg viewBox="0 0 32 32"><text x="2" y="13">+</text><text x="18" y="13">−</text><text x="2" y="28">×</text><text x="18" y="28">÷</text></svg>',
  chemistry: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4h8M14 4v9l-6.4 10.2A3 3 0 0 0 10.1 28h11.8a3 3 0 0 0 2.5-4.8L18 13V4"/><path d="M11 21h10"/><circle cx="15" cy="18" r=".8" fill="currentColor" stroke="none"/><circle cx="19" cy="16" r=".7" fill="currentColor" stroke="none"/></svg>',
  physics: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="16" cy="16" rx="12" ry="5"/><ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none"/></svg>',
  computing: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="16" height="16" rx="3"/><path d="M12 12h8v8h-8zM12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5"/></svg>',
  engineering: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 25 23 8l3 3L9 28H6zM19 7l3-3 6 6-3 3M5 21l6 6M8 18l3 3"/></svg>',
  biology: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M26 5C15 5 7 9 7 18a9 9 0 0 0 9 9c9 0 10-11 10-22Z"/><path d="M5 28c4-8 9-12 17-17M11 20l-1-6m7 1 5 1"/></svg>',
  general: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 9c-3-2-7-2-11-1v17c4-1 8-1 11 1 3-2 7-2 11-1V8c-4-1-8-1-11 1Z"/><path d="M16 9v17"/></svg>'
};
function courseIconKind(course){
  if(course.icon) return course.icon;
  if(/^(CHM|CHE|BCH)/i.test(course.code || course.name || "")) return "chemistry";
  if(/^MTH|math/i.test(course.code || course.name || "")) return "maths";
  if(/^PHY|physics/i.test(course.code || course.name || "")) return "physics";
  return "general";
}
function courseMark(course, size = ""){
  const icon = COURSE_ICONS[courseIconKind(course)] || COURSE_ICONS.general;
  return `<span class="course-mark ${size}" style="--h:${course.h}" aria-hidden="true">${icon}</span>`;
}
const DIFFS = {mixed:"Mixed", easy:"Easy", standard:"Standard", hard:"Hard"};
const DIFF_N = {easy:1, standard:2, hard:3};
const DEFAULT_PREFS = {count:10, timer:0, diff:"mixed", focus:"all", source:"all", topic:"", explain:"each"};

/* ===================== State ===================== */
const LS_KEY = "orbit-cu-v2";
let state = {onboard:null, courses:{}};
const banks = {}; const realBank = {};
let saveTimer = null, saveChain = Promise.resolve();
let authed = false, uid = null, authUser = null, entering = null, pendingAuthError = "";
let roomNS = null;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function cs(code){ state.courses[code] = state.courses[code] || {attempts:{}, tags:{}, sessions:0, prefs:{}}; return state.courses[code]; }
function prefsFor(code){ return Object.assign({}, DEFAULT_PREFS, cs(code).prefs); }
function bankFor(code){ return banks[code] && banks[code].length ? banks[code] : SAMPLE; }
function myName(){ return (state.onboard && state.onboard.name) || "You"; }

/* ===================== Supabase: auth + data ===================== */
const SUPABASE_URL = "https://mwipfbehdmeeainlumgx.supabase.co";
const SUPABASE_KEY = "sb_publishable_EWfrcpXNVJoOoozI2bIP1A_A6dJfjMK"; // publishable key: safe in the browser, row-level security protects the data
(function(){
  try{
    const q = new URLSearchParams(location.search), h = new URLSearchParams(location.hash.replace(/^#/, ""));
    pendingAuthError = q.get("error_description") || h.get("error_description") || "";
  }catch(e){}
})();
let sb = null;
try{
  if(window.supabase) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true, flowType:"pkce"}});
}catch(e){ console.warn("Orbit: Supabase didn’t start", e); }

const lsKey = () => LS_KEY + ":" + uid;   // local cache is per account, so shared devices don’t mix progress
function loadLocal(){
  try{
    const raw = localStorage.getItem(lsKey());
    if(raw){ const p = JSON.parse(raw); if(p && typeof p === "object") state = Object.assign({onboard:null, courses:{}}, p); }
  }catch(e){}
}
function save(){
  if(!uid) return;
  try{ localStorage.setItem(lsKey(), JSON.stringify(state)); }catch(e){}
  clearTimeout(saveTimer); saveTimer = setTimeout(pushRemote, 600);
}
function pushRemote(){
  saveTimer = null;
  if(!sb || !uid) return saveChain;
  const owner = uid, body = JSON.parse(JSON.stringify(state));
  saveChain = saveChain.then(async () => {
    if(owner !== uid) return;
    const {error} = await sb.from("progress").upsert({user_id:owner, data:body, updated_at:new Date().toISOString()}, {onConflict:"user_id"});
    if(error) console.warn("Orbit: couldn’t save progress", error);
  }).catch(() => {});
  return saveChain;
}
function flushSave(){ if(saveTimer){ clearTimeout(saveTimer); return pushRemote(); } return saveChain; }
document.addEventListener("visibilitychange", () => { if(document.visibilityState === "hidden" && saveTimer) flushSave(); });

async function loadProgress(){
  const owner = uid;
  const {data, error} = await sb.from("progress").select("data").eq("user_id", owner).maybeSingle();
  if(error) throw error;
  if(owner !== uid) return;
  state = {onboard:null, courses:{}};
  loadLocal();
  if(data && data.data && typeof data.data === "object"){
    state = Object.assign({onboard:null, courses:{}}, data.data);
    try{ localStorage.setItem(lsKey(), JSON.stringify(state)); }catch(e){}
  } else if(state.onboard || Object.keys(state.courses || {}).length){ save(); }
  if(!state.courses || typeof state.courses !== "object") state.courses = {};
}
async function loadBanks(){
  Object.keys(banks).forEach(k => delete banks[k]); Object.keys(realBank).forEach(k => delete realBank[k]);
  const size = 1000; let from = 0;
  const loadedIds = new Set();
  const addQuestion = q => {
    if(!q || !q.id || !q.prompt || !Array.isArray(q.options) || q.options.length < 2 || !q.options.some(o => o && o.ok)) return;
    q.topic = q.topic || "General"; q.explain = q.explain || "";
    const code = String(q.course || "").toUpperCase();
    if(!code || loadedIds.has(String(q.id))) return;
    loadedIds.add(String(q.id));
    (banks[code] = banks[code] || []).push(q);
    realBank[code] = true;
  };
  try{
    for(;;){
      const {data, error} = await sb.from("questions").select("id,course,topic,prompt,d,options,explain").order("id").range(from, from + size - 1);
      if(error) throw error;
      (data || []).forEach(addQuestion);
      if(!data || data.length < size) break;
      from += size;
    }
  }catch(e){ console.warn("Orbit: couldn’t load questions, using the sample set", e); }
  try{
    const response = await fetch("questions/mth213.json");
    if(!response.ok) throw new Error(`Question bank request failed (${response.status})`);
    const localQuestions = await response.json();
    if(!Array.isArray(localQuestions)) throw new Error("MTH213 question bank must be a JSON array");
    localQuestions.forEach(addQuestion);
  }catch(e){ console.warn("Orbit: couldn’t load the bundled MTH213 question bank", e); }
}
async function connectRoom(){   // live duels still use the Claude room when the page runs inside Claude; otherwise challenge codes
  if(!window.claude || typeof window.claude.use !== "function") return;
  try{ roomNS = await window.claude.use("room"); if(current === "v-duel") renderDuel(); }catch(e){}
}

/* ===================== Router ===================== */
let current = "v-boot", activeCourse = null;
let landingStartUnlocked = false;
const heroStartObserver = new IntersectionObserver(entries => {
  if(entries.some(entry => entry.isIntersecting)){
    landingStartUnlocked = true;
    if(current === "v-landing") $("navStart").hidden = false;
    heroStartObserver.disconnect();
  }
}, {threshold:.15});
heroStartObserver.observe($("heroStart"));
const parentOf = {"v-signin":"v-landing","v-onboard":"v-landing","v-system":"v-landing","v-practice":"v-system","v-summary":"v-system","v-dash":"v-system","v-duel":"v-system"};
const PUBLIC_VIEWS = ["v-landing", "v-signin", "v-boot"];
function go(id, opts = {}){
  // Signed-in users can never be sent to the landing or sign-in pages; signed-out users can never reach the app.
  if(authed && (id === "v-landing" || id === "v-signin")) id = hasCompletedOnboarding() ? "v-system" : "v-onboard";
  if(authed && !hasCompletedOnboarding() && id !== "v-onboard" && id !== "v-boot") id = "v-onboard";
  if(!authed && !PUBLIC_VIEWS.includes(id)) id = "v-signin";
  const swap = () => {
    document.querySelectorAll(".view").forEach(v => v.hidden = v.id !== id);
    current = id;
    document.body.classList.toggle("in-app", id !== "v-landing");
    $("navStart").hidden = id !== "v-landing" || !landingStartUnlocked;
    $("navTheme").hidden = !authed;
    $("navOut").hidden = !authed;
    $("navBack").hidden = authed && (id === "v-system" || id === "v-onboard" || id === "v-boot");
    if(id === "v-signin") renderSignin();
    window.scrollTo(0, 0);
    if(id === "v-onboard") renderOnboard();
    if(id === "v-system") renderGrid();
    if(id === "v-dash") renderDash();
    if(id === "v-duel") renderDuel();
  };
  if(id !== "v-practice") stopTimer();
  if(!opts.instant && document.startViewTransition && !reduce) document.startViewTransition(swap); else swap();
}
function startFlow(){ go(authed ? (hasCompletedOnboarding() ? "v-system" : "v-onboard") : "v-signin"); }
document.querySelectorAll("[data-start]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); startFlow(); }));
$("navStart").addEventListener("click", startFlow);
$("navBack").addEventListener("click", () => {
  if(current === "v-practice" || current === "v-duel" || current === "v-summary") leaveDuel();
  go(parentOf[current] || "v-landing");
});
$("logoHome").addEventListener("click", e => { e.preventDefault(); leaveDuel(); go("v-landing"); });
function setTheme(theme, persist = true){
  const selected = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selected;
  const toggle = $("navTheme"), dark = selected === "dark";
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  toggle.title = `Switch to ${dark ? "light" : "dark"} mode`;
  if(persist){
    try{ localStorage.setItem("orbit-theme", selected); }
    catch(error){ console.warn("Orbit couldn’t save the theme preference", error); }
  }
}
document.querySelectorAll("[data-theme-set]").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  setTheme(a.dataset.themeSet);
}));
$("navTheme").addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
let pendingInstallPrompt = null;
const installButton = $("navInstall");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  pendingInstallPrompt = event;
  installButton.hidden = false;
});
window.addEventListener("appinstalled", () => {
  pendingInstallPrompt = null;
  installButton.hidden = true;
});
installButton.addEventListener("click", async () => {
  if(!pendingInstallPrompt) return;
  const prompt = pendingInstallPrompt;
  pendingInstallPrompt = null;
  installButton.disabled = true;
  try{
    await prompt.prompt();
    await prompt.userChoice;
    installButton.hidden = true;
  }catch(error){
    console.error("Orbit couldn’t open the install prompt.", error);
  }finally{
    installButton.disabled = false;
  }
});
if("serviceWorker" in navigator && window.isSecureContext){
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.error("Orbit couldn’t register offline support.", error);
  });
}
try{
  const savedTheme = localStorage.getItem("orbit-theme");
  setTheme(savedTheme === "dark" ? "dark" : "light", false);
}catch(error){
  setTheme("light", false);
  console.warn("Orbit couldn’t read the saved theme preference", error);
}

document.addEventListener("pointermove", e => {
  const g = e.target.closest && e.target.closest(".glass"); if(!g) return;
  const r = g.getBoundingClientRect();
  g.style.setProperty("--mx", (e.clientX - r.left) + "px"); g.style.setProperty("--my", (e.clientY - r.top) + "px");
}, {passive:true});

(function(){
  const rail = $("rail"); let down = false, sx = 0, sl = 0;
  rail.addEventListener("pointerdown", e => { if(e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = rail.scrollLeft; rail.classList.add("dragging"); });
  window.addEventListener("pointermove", e => { if(down) rail.scrollLeft = sl - (e.clientX - sx); });
  window.addEventListener("pointerup", () => { if(!down) return; down = false; rail.classList.remove("dragging"); });
})();

$("lineup").innerHTML = [
  ...LANDING_COURSES.map(c => `<article class="course-tile glass">${courseMark(c)}<strong>${c.name}</strong></article>`),
  '<article class="course-tile course-more glass" aria-label="And more courses"><span class="more-dots" aria-hidden="true"><i></i><i></i><i></i></span><strong>And more</strong></article>'
].join("");
const landingRevealObserver = reduce ? null : new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting){ e.target.classList.add("in"); landingRevealObserver.unobserve(e.target); }
}), {threshold:.12, rootMargin:"0px 0px -48px 0px"});
function observeLanding(el){
  if(!landingRevealObserver) return;
  el.classList.add("reveal");
  landingRevealObserver.observe(el);
}
document.querySelectorAll(".section-head h2, .statement h2, .statement p, .closing h2 span, .story, .university-tile, .course-tile").forEach(observeLanding);
document.querySelectorAll("[data-start]").forEach(button => button.addEventListener("click", event => {
  if(typeof navigator.vibrate === "function") navigator.vibrate(12);
  if(reduce) return;
  const bounds = button.getBoundingClientRect();
  const originX = event.clientX || bounds.left + bounds.width / 2;
  const originY = event.clientY || bounds.top + bounds.height / 2;
  for(let i = 0; i < 14; i++){
    const particle = document.createElement("i");
    const angle = (Math.PI * 2 * i) / 14;
    const distance = 24 + Math.random() * 34;
    particle.className = "button-confetti";
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--h", `${(i * 29) % 360}`);
    document.body.append(particle);
    particle.addEventListener("animationend", () => particle.remove(), {once:true});
  }
}));

/* ===================== Onboarding ===================== */
const PROGRAMS = [
  "Industrial Physics",
  "Industrial Maths",
  "Industrial Chemistry",
  "Computer Science",
  "Biology",
  "Microbiology",
  "Management Information Systems (MIS)",
  "Computer Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Petroleum Engineering",
  "Mechatronics Engineering",
  "Architecture",
  "Building Technology",
  "Estate Management",
  "Accounting",
  "Banking and Finance",
  "Business Administration",
  "Economics",
  "Industrial Relations and Human Resources Management",
  "Law",
  "International Relations",
  "Psychology",
  "Political Science",
  "English Language",
  "Medicine and Surgery",
  "Nursing Science",
  "Medical Laboratory Science",
  "Anatomy",
  "Physiology"
];
let ob = {step:0, university:"", name:"", level:"", program:"", exam:""};
const OB_STEPS = [
  {key:"university", title:"Choose your university", sub:"Covenant University is available now. More universities are coming soon.", type:"university"},
  {key:"name", title:"What should we call you?", sub:"Just your first name is fine. Friends see it when you go head to head.", type:"text"},
  {key:"level", title:"Which level are you in?", sub:"This sets which courses come into orbit first.", type:"choice", options:["100 level","200 level","300 level","400 level"]},
  {key:"program", title:"What program are you offering?", sub:"Choose your Covenant University program. It’ll appear as a tag on your page.", type:"program"},
  {key:"exam", title:"When’s your next exam?", sub:"Orbit paces your sessions around it.", type:"choice", options:["This week","This month","Later this semester","Not sure yet"]}
];
function saveOnboardingDraft(){
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
  const p = $("obPanel");
  if(ob.step >= OB_STEPS.length){
    p.innerHTML = `<div class="launch step-in"><div class="planet ringed"></div><h2 class="title">Building your orbit</h2><p class="sub">Lining up your courses, ${esc(ob.name || "there")}.</p></div>`;
    saveOnboardingDraft();
    setTimeout(() => go("v-system"), reduce ? 300 : 1500);
    return;
  }
  const s = OB_STEPS[ob.step];
  const dots = OB_STEPS.map((_, i) => `<i class="${i <= ob.step ? "on" : ""}"></i>`).join("");
  const body = s.type === "text"
    ? `<input class="field" id="obInput" type="text" autocomplete="given-name" maxlength="24" placeholder="Your name" value="${esc(ob[s.key])}">`
    : s.type === "university"
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
      : s.type === "program"
        ? `<label class="program-select-label" for="obProgram">Your program</label><select class="field program-select" id="obProgram" required><option value="" disabled ${ob.program ? "" : "selected"}>Select your program</option>${PROGRAMS.map(program => `<option value="${esc(program)}" ${ob.program === program ? "selected" : ""}>${esc(program)}</option>`).join("")}</select>`
      : `<div class="choices">${s.options.map(o => `<button class="choice" aria-pressed="${ob[s.key] === o}" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
  p.innerHTML = `<div class="ob-dots">${dots}</div><div class="step-in"><h2 class="title">${s.title}</h2><p class="sub">${s.sub}</p>${body}
    <div class="ob-actions">${ob.step ? '<button class="ghost" id="obBack">Back</button>' : "<span></span>"}<button class="btn btn-primary" id="obNext" ${ob[s.key] ? "" : "disabled"}>${ob.step === OB_STEPS.length - 1 ? "Finish" : "Continue"}</button></div></div>`;
  const next = $("obNext");
  if(s.type === "text"){
    const inp = $("obInput"); setTimeout(() => inp.focus(), 50);
    inp.addEventListener("input", () => { ob.name = inp.value.trim(); next.disabled = !ob.name; saveOnboardingDraft(); });
    inp.addEventListener("keydown", e => { if(e.key === "Enter" && ob.name){ ob.step++; renderOnboard(); } });
  } else if(s.type === "university"){
    p.querySelectorAll(".university-choice:not(:disabled)").forEach(b => b.addEventListener("click", () => {
      ob.university = b.dataset.v;
      p.querySelectorAll(".university-choice").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      next.disabled = false;
      saveOnboardingDraft();
    }));
  } else if(s.type === "program"){
    $("obProgram").addEventListener("change", event => {
      ob.program = event.target.value;
      next.disabled = !ob.program;
      saveOnboardingDraft();
    });
  } else {
    p.querySelectorAll(".choice").forEach(b => b.addEventListener("click", () => {
      ob[s.key] = b.dataset.v; p.querySelectorAll(".choice").forEach(x => x.setAttribute("aria-pressed", x === b)); next.disabled = false; saveOnboardingDraft();
    }));
  }
  next.addEventListener("click", () => { saveOnboardingDraft(); ob.step++; renderOnboard(); });
  const bk = $("obBack"); if(bk) bk.addEventListener("click", () => { saveOnboardingDraft(); ob.step--; renderOnboard(); });
}
function hasCompletedOnboarding(){
  const details = state.onboard;
  return Boolean(details && details.university === "covenant" && details.name && details.level && details.program && details.exam);
}
function profileProgramTag(){
  const program = state.onboard && state.onboard.program;
  return program ? `<span class="program-tag">${esc(program)}</span>` : "";
}

/* ===================== Course grid + decorative orbit band ===================== */
(function buildBand(){
  const svg = $("band"); const cx = 380, cy = 90; const rings = [[160,46],[262,64],[362,84]];
  let out = rings.map(([rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`).join("");
  out += `<defs><radialGradient id="sunG" cx="40%" cy="36%"><stop offset="0" stop-color="#FFF4D6"/><stop offset=".45" stop-color="#FFC857"/><stop offset="1" stop-color="#F2833A"/></radialGradient></defs>`;
  out += `<circle cx="${cx}" cy="${cy}" r="26" fill="url(#sunG)" style="filter:drop-shadow(0 0 18px rgba(255,170,60,.6))"/>`;
  COURSES.forEach((c, i) => {
    const ring = i % 3, [rx, ry] = rings[ring], slot = Math.floor(i / 3);
    const dur = [26, 40, 58][ring], r = [7, 8.5, 10][ring];
    const path = `M ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy}`;
    const start = (slot / 3 + ring * .11) % 1;
    const x = cx + rx * Math.cos(start * 2 * Math.PI), y = cy + ry * Math.sin(start * 2 * Math.PI);
    out += `<circle r="${r}" fill="hsl(${c.h} 72% 58%)" ${reduce ? `cx="${x}" cy="${y}"` : ""}>` +
      (reduce ? "" : `<animateMotion dur="${dur}s" repeatCount="indefinite" begin="-${(start * dur).toFixed(2)}s" path="${path}"/>`) + `</circle>`;
  });
  svg.innerHTML = out;
})();
function topicStats(code){
  const bank = bankFor(code), att = cs(code).attempts, topics = {};
  bank.forEach(q => { const t = topics[q.topic] = topics[q.topic] || {topic:q.topic, seen:0, wrong:0}; const a = att[q.id]; if(a){ t.seen += a.seen; t.wrong += a.wrong; } });
  return Object.values(topics).map(t => Object.assign(t, {acc: t.seen ? (t.seen - t.wrong) / t.seen : null}));
}
function weakTopics(code){ return topicStats(code).filter(t => t.seen && t.acc < .85).sort((a, b) => a.acc - b.acc).slice(0, 2).map(t => t.topic); }
function courseAcc(code){ const st = topicStats(code); const s = st.reduce((x, t) => x + t.seen, 0), w = st.reduce((x, t) => x + t.wrong, 0); return s ? (s - w) / s : null; }
function comingSoonCard(program, level){
  const label = [level, program].filter(Boolean).join(" · ");
  return `<article class="catalog-coming glass">
    <span class="catalog-coming-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M25 5c-7 2-13 8-15 16l10 10c8-2 14-8 16-15l-11-11Z"/><path d="m10 21-5 3 8 8m14-5 3 8 3-5M17 34c-2 5-6 7-10 8 1-4 3-8 8-10"/><circle cx="27" cy="16" r="3"/></svg></span>
    <span class="catalog-coming-label">Coming soon</span>
    <h3>${esc(label || "More courses")}</h3>
    <p>We’re preparing this course collection for Orbit. Check back soon for your courses.</p>
  </article>`;
}
function renderGrid(){
  $("sysHello").textContent = state.onboard && state.onboard.name ? `Welcome back, ${state.onboard.name}` : "Your courses";
  $("sysProgramTag").innerHTML = profileProgramTag();
  const program = state.onboard && state.onboard.program;
  const level = state.onboard && state.onboard.level;
  const availableCodes = COURSES_BY_PROGRAM_LEVEL[program] && COURSES_BY_PROGRAM_LEVEL[program][level];
  if(!availableCodes){
    $("grid").innerHTML = comingSoonCard(program, level);
    return;
  }
  const query = $("courseSearch").value.trim().toLocaleLowerCase();
  const filteredCourses = COURSES.filter(c => availableCodes.includes(c.code) && `${c.code} ${c.name || ""} ${c.category || ""}`.toLocaleLowerCase().includes(query));
  $("grid").innerHTML = filteredCourses.length ? filteredCourses.map((c, i) => {
    const acc = courseAcc(c.code);
    const st = realBank[c.code] ? `${banks[c.code].length} past questions` : "Sample set for now";
    const details = [c.credits === undefined ? "" : `${c.credits} credits`, c.category || ""].filter(Boolean).join(" · ");
    return `<button class="ccard glass" data-code="${c.code}" style="animation-delay:${reduce ? 0 : i * 40}ms">${courseMark(c, "course-mark--large")}<strong>${c.code}</strong>${c.name ? `<span class="course-name">${esc(c.name)}</span>` : ""}${details ? `<span class="course-details">${details}</span>` : ""}<span class="st">${acc === null ? st : Math.round(acc * 100) + "% accuracy"}</span>${acc === null ? "" : `<div class="meter"><i style="width:${Math.round(acc * 100)}%;background:hsl(${c.h} 70% 55%)"></i></div>`}</button>`;
  }).join("") : `<p class="grid-empty">No Industrial Physics ${esc(level)} courses match “${esc($("courseSearch").value.trim())}”.</p>`;
  $("grid").querySelectorAll(".ccard").forEach(b => b.addEventListener("click", () => openSheet(b.dataset.code)));
}
function filterCourses(event){
  event.preventDefault();
  renderGrid();
}
$("courseSearchForm").addEventListener("submit", filterCourses);
$("courseSearch").addEventListener("input", renderGrid);

/* ===================== Preferences sheet ===================== */
function seg(key, options, value, disabled = []){
  return `<div class="seg" data-key="${key}"><span class="thumb"></span>${options.map(([v, l]) => `<button data-v="${v}" aria-pressed="${String(v) === String(value)}" ${disabled.includes(v) ? "disabled" : ""}>${l}</button>`).join("")}</div>`;
}
function layoutThumbs(root){
  root.querySelectorAll(".seg").forEach(s => {
    const on = s.querySelector('button[aria-pressed="true"]'), th = s.querySelector(".thumb");
    if(!on){ th.style.width = "0"; return; }
    th.style.width = on.offsetWidth + "px"; th.style.transform = `translateX(${on.offsetLeft}px)`;
  });
}
function openSheet(code){
  activeCourse = code; const c = COURSES.find(x => x.code === code); const p = prefsFor(code);
  const weak = weakTopics(code); if(p.focus === "weak" && !weak.length) p.focus = "all";
  const topics = [...new Set(bankFor(code).map(q => q.topic).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  if(p.source === "topic" && !topics.includes(p.topic)) p.topic = "";
  if(p.source === "past" && !realBank[code]) p.source = "all";
  const sheet = $("sheet");
  sheet.innerHTML = `<div class="grab"></div>
    <div class="sheet-head">${courseMark(c, "course-mark--sheet")}<div><strong>${code}</strong><span>${realBank[code] ? banks[code].length + " past questions" : "Sample questions"}</span></div>
      <button class="close" id="sheetClose" aria-label="Close"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    ${realBank[code] ? "" : `<p class="notice">No ${code} past questions have been added yet, so you’ll practise the sample set until they are.</p>`}
    <div class="pref"><label>Questions from</label>${seg("source", [["all","All"],["past","Past questions"],["topic","A topic"]], p.source, realBank[code] ? [] : ["past"])}</div>
    <label class="topic-select-wrap" id="topicSelectWrap" ${p.source === "topic" ? "" : "hidden"}><span>Choose a topic</span><select class="topic-select" id="topicSelect"><option value="">Select a topic</option>${topics.map(topic => `<option value="${esc(topic)}" ${p.topic === topic ? "selected" : ""}>${esc(topic)}</option>`).join("")}</select></label>
    <div class="pref"><label>Questions</label>${seg("count", [[5,"5"],[10,"10"],[15,"15"],[20,"20"]], p.count)}</div>
    <div class="pref"><label>Timer per question</label>${seg("timer", [[0,"Off"],[30,"30s"],[60,"60s"],[90,"90s"]], p.timer)}</div>
    <div class="pref"><label>Difficulty</label>${seg("diff", Object.entries(DIFFS), p.diff)}</div>
    <div class="pref"><label>Focus</label>${seg("focus", [["all","All topics"],["weak", "Weak spots"]], p.focus, weak.length ? [] : ["weak"])}</div>
    <div class="pref"><label>Explanations</label>${seg("explain", [["each","After each"],["end","At the end"]], p.explain)}</div>
    <div class="sheet-actions"><button class="btn btn-primary" id="sheetStart" ${p.source === "topic" && !p.topic ? "disabled" : ""}>Start practice</button><button class="btn btn-soft" id="sheetDuel">Duel a friend</button></div>
    <button class="sheet-link" id="sheetDash">See weak spots for ${code}</button>`;
  sheet.querySelectorAll(".seg").forEach(s => s.addEventListener("click", e => {
    const b = e.target.closest("button"); if(!b || b.disabled) return;
    const key = s.dataset.key; let v = b.dataset.v; if(key === "count" || key === "timer") v = +v;
    cs(code).prefs = Object.assign(prefsFor(code), {[key]: v}); save();
    s.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); layoutThumbs(s.parentElement);
    if(key === "source"){
      $("topicSelectWrap").hidden = v !== "topic";
      $("sheetStart").disabled = v === "topic" && !$("topicSelect").value;
    }
  }));
  $("topicSelect").addEventListener("change", event => {
    cs(code).prefs = Object.assign(prefsFor(code), {topic:event.target.value}); save();
    $("sheetStart").disabled = !event.target.value;
  });
  $("sheetClose").onclick = closeSheet;
  $("sheetStart").onclick = () => { closeSheet(); startSolo(code); };
  $("sheetDuel").onclick = () => { closeSheet(); duel = null; duelTab = "live"; go("v-duel"); };
  $("sheetDash").onclick = () => { closeSheet(); go("v-dash"); };
  $("scrim").classList.add("on"); sheet.classList.add("on");
  requestAnimationFrame(() => { layoutThumbs(sheet); setTimeout(() => layoutThumbs(sheet), 80); $("sheetStart").focus({preventScroll:true}); });
}
function closeSheet(){ $("scrim").classList.remove("on"); $("sheet").classList.remove("on"); }
$("scrim").addEventListener("click", closeSheet);
document.addEventListener("keydown", e => { if(e.key === "Escape" && $("sheet").classList.contains("on")) closeSheet(); });
window.addEventListener("resize", () => { if($("sheet").classList.contains("on")) layoutThumbs($("sheet")); });

/* ===================== Question selection ===================== */
function rng(seed){ let a = seed >>> 0; return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffleWith(arr, r){ const a = arr.slice(); for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function diffOf(q){ return q.d || 2; }
function buildSet(code, cfg){
  const bank = bankFor(code); const r = cfg.seed != null ? rng(cfg.seed) : Math.random;
  let pool = bank;
  if(cfg.source === "past") pool = realBank[code] ? banks[code] : [];
  if(cfg.source === "topic" && cfg.topic) pool = pool.filter(q => q.topic === cfg.topic);
  if(cfg.focus === "weak"){ const w = weakTopics(code); const f = pool.filter(q => w.includes(q.topic)); if(f.length) pool = f; }
  let ordered;
  if(cfg.seed != null){
    ordered = shuffleWith(pool.slice().sort((a, b) => String(a.id).localeCompare(String(b.id))), r);
  } else {
    const att = cs(code).attempts; const stats = Object.fromEntries(topicStats(code).map(t => [t.topic, t]));
    ordered = pool.map(q => { const a = att[q.id], t = stats[q.topic]; let w = 1;
      if(!a) w += 1.5; else { if(a.lastWrong) w += 2.5; w += (a.wrong / a.seen) * 2; }
      if(t && t.acc !== null) w += (1 - t.acc) * 3;
      return {q, k: Math.random() ** (1 / w)}; }).sort((x, y) => y.k - x.k).map(x => x.q);
  }
  let note = "";
  if(cfg.diff !== "mixed"){
    const want = DIFF_N[cfg.diff]; const match = ordered.filter(q => diffOf(q) === want);
    if(match.length < cfg.count) note = `Only ${match.length} ${DIFFS[cfg.diff].toLowerCase()} question${match.length === 1 ? "" : "s"} available, so the rest are mixed in.`;
    ordered = match.concat(ordered.filter(q => diffOf(q) !== want));
  }
  const n = Math.min(cfg.count, ordered.length);
  if(n < cfg.count && !note) note = `This course has ${n} questions so far, so the session is ${n} long.`;
  return {items: ordered.slice(0, n).map(q => ({q, opts: shuffleWith(q.options, r)})), note};
}

/* ===================== Practice ===================== */
let session = null, timerInt = null;
function startSolo(code){
  const p = prefsFor(code);
  const {items, note} = buildSet(code, p);
  session = {mode:"solo", code, items, note, i:0, correct:0, tags:{}, answers:[], timer:p.timer, explainEnd:p.explain === "end"};
  beginSession();
}
function beginSession(){ go("v-practice"); renderQuestion(); renderHud(); }
function renderQuestion(){
  const it = session.items[session.i], n = session.items.length;
  $("progBar").style.width = (session.i / n * 100) + "%";
  $("pqCount").textContent = `${session.i + 1} of ${n}`;
  const card = $("qcard");
  card.innerHTML = `${session.i === 0 && session.note ? `<p class="notice" style="margin:0 0 16px">${esc(session.note)}</p>` : ""}
    <div class="qmeta"><span class="qtopic">${esc(session.code)} · ${esc(it.q.topic)}</span>${session.timer ? `<span class="timer" id="timer"><svg width="26" height="26" viewBox="0 0 26 26"><circle class="bg" cx="13" cy="13" r="10"/><circle class="fg" id="timerFg" cx="13" cy="13" r="10" stroke-dasharray="62.83" stroke-dashoffset="0"/></svg><span id="timerTxt">${session.timer}s</span></span>` : ""}</div>
    <p class="qprompt">${esc(it.q.prompt)}</p>
    <div class="opts" id="opts">${it.opts.map((o, i) => `<button class="opt" data-i="${i}"><kbd>${"ABCDE"[i]}</kbd><span>${esc(o.t)}</span></button>`).join("")}</div><div id="fb"></div>`;
  card.classList.remove("step-in"); void card.offsetWidth; card.classList.add("step-in");
  card.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answer(+b.dataset.i)));
  $("nextBtn").hidden = true;
  if(session.timer) startTimer(session.timer);
}
function startTimer(sec){
  stopTimer(); const end = Date.now() + sec * 1000;
  timerInt = setInterval(() => {
    const left = Math.max(0, end - Date.now()); const fg = $("timerFg"), tx = $("timerTxt"), tm = $("timer");
    if(!fg){ stopTimer(); return; }
    fg.style.strokeDashoffset = 62.83 * (1 - left / (sec * 1000));
    tx.textContent = Math.ceil(left / 1000) + "s"; tm.classList.toggle("low", left < 10000);
    if(left <= 0){ stopTimer(); answer(null); }
  }, 100);
}
function stopTimer(){ clearInterval(timerInt); timerInt = null; }
function answer(idx){
  const box = $("opts"); if(!box || box.classList.contains("locked")) return;
  stopTimer(); box.classList.add("locked");
  const it = session.items[session.i], q = it.q, pick = idx == null ? null : it.opts[idx];
  const ok = !!(pick && pick.ok);
  const tag = pick ? pick.tag : "Ran out of time";
  const why = pick ? pick.why : "The timer ran out before you picked an answer.";
  const c = cs(session.code); const a = c.attempts[q.id] || {seen:0, wrong:0};
  a.seen++; a.last = Date.now();
  if(ok){ session.correct++; a.lastWrong = false; }
  else { a.wrong++; a.lastWrong = true; if(tag){ c.tags[tag] = (c.tags[tag] || 0) + 1; session.tags[tag] = (session.tags[tag] || 0) + 1; } }
  c.attempts[q.id] = a; save();
  session.answers.push({q, pick, ok, tag, why});
  pushDuelProgress();
  renderHud();
  const btns = box.querySelectorAll(".opt"); const last = session.i === session.items.length - 1;
  if(session.explainEnd){
    if(idx != null) btns[idx].classList.add("chosen");
    setTimeout(nextQuestion, reduce ? 150 : 520);
    return;
  }
  it.opts.forEach((o, i) => { if(o.ok) btns[i].classList.add("right"); });
  if(!ok && idx != null) btns[idx].classList.add("wrong");
  $("fb").innerHTML = ok
    ? `<div class="feedback ok glass"><h4>Correct</h4><p class="working" style="border:0;padding:0;margin:0"><b>The working:</b> ${esc(q.explain)}</p></div>`
    : `<div class="feedback no glass"><h4>${pick ? "Not quite" : "Time’s up"}</h4>${tag ? `<p><span class="mtag">${esc(tag)}</span></p>` : ""}<p>${esc(why || "")}</p><p class="working"><b>The working:</b> ${esc(q.explain)}</p></div>`;
  const next = $("nextBtn"); next.textContent = last ? "See results" : "Next question"; next.hidden = false; next.focus({preventScroll:true});
  setTimeout(() => $("fb").scrollIntoView({behavior: reduce ? "auto" : "smooth", block:"nearest"}), 120);
}
function nextQuestion(){
  if(current !== "v-practice") return;
  session.i++;
  if(session.i >= session.items.length){ finishSession(); return; }
  renderQuestion(); window.scrollTo({top:0, behavior: reduce ? "auto" : "smooth"});
}
$("nextBtn").addEventListener("click", nextQuestion);
document.addEventListener("keydown", e => {
  if(current !== "v-practice" || e.metaKey || e.ctrlKey) return;
  if(e.target && e.target.tagName === "INPUT") return;
  const k = e.key.toUpperCase(); let i = "ABCDE".indexOf(k); if(i < 0) i = ["1","2","3","4","5"].indexOf(k);
  const box = $("opts"); if(i >= 0 && box && !box.classList.contains("locked") && box.children[i]) answer(i);
});
function finishSession(){
  stopTimer(); cs(session.code).sessions++; save();
  session.done = true; pushDuelProgress();
  go("v-summary"); renderSummary();
}

/* ===================== Summary ===================== */
function reviewHtml(){
  return `<div class="review"><p class="sub" style="margin-bottom:6px">Review your answers</p>${session.answers.map((a, i) => `
    <details class="${a.ok ? "r" : "w"}"><summary><i>${a.ok ? "✓" : "✕"}</i><span>${i + 1}. ${esc(a.q.prompt)}</span></summary>
    ${a.ok ? "" : `<p>${a.tag ? `<span class="mtag">${esc(a.tag)}</span><br>` : ""}${a.pick ? "You picked " + esc(a.pick.t) + ". " : ""}${esc(a.why || "")}</p>`}
    <p><b style="color:var(--ink)">The working:</b> ${esc(a.q.explain)}</p></details>`).join("")}</div>`;
}
function renderSummary(){
  const n = session.items.length, c = session.correct, pct = n ? Math.round(c / n * 100) : 0, C = 2 * Math.PI * 62;
  const tags = Object.entries(session.tags).sort((a, b) => b[1] - a[1]);
  let duelBlock = "";
  if(session.mode === "live") duelBlock = `<div id="liveResult">${liveResultHtml()}</div>`;
  if(session.mode === "code-accept") duelBlock = versusHtml(c, session.challenge.name, session.challenge.score, true);
  if(session.mode === "code-create"){
    const code = makeChallengeCode(session, c);
    duelBlock = `<p class="sub" style="margin-top:6px">Send this code to a friend. They enter it under Duel a friend and get the same ${n} questions, then see your score against theirs.</p>
      <div class="codebox"><code id="chCode">${esc(code)}</code><button class="btn btn-primary" id="copyCode" style="min-height:40px">Copy</button></div>`;
  }
  $("summaryPanel").innerHTML = `
    <p class="eyebrow">${esc(session.code)} ${session.mode === "solo" ? "session" : "duel"} complete</p><h2 class="title">${c} of ${n} correct</h2>
    ${session.mode === "live" || session.mode === "code-accept" ? "" : `<div class="ring-score"><svg width="150" height="150" viewBox="0 0 150 150"><circle class="bg" cx="75" cy="75" r="62"/><circle class="fg" id="ringFg" cx="75" cy="75" r="62" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><b>${pct}%</b></div>`}
    ${duelBlock}
    ${tags.length ? `<p class="sub" style="margin:18px 0 10px">Mistakes to watch</p><div class="tag-list" style="justify-content:center">${tags.map(([t, k]) => `<span class="mtag">${esc(t)}${k > 1 ? ` <em>×${k}</em>` : ""}</span>`).join("")}</div>` : ""}
    ${session.explainEnd ? reviewHtml() : ""}
    <div class="stack" style="text-align:left">
      <button class="action glass" id="sumAgain"><div><strong>Practise again</strong><span>A fresh ${esc(session.code)} set, weighted to what you missed</span></div><i class="go">${arrow}</i></button>
      <button class="action glass secondary" id="sumDash"><div><strong>See weak spots</strong><span>Accuracy by topic and repeat mistakes</span></div><i class="go">${arrow}</i></button>
    </div>`;
  setTimeout(() => { const f = $("ringFg"); if(f) f.style.strokeDashoffset = C * (1 - (n ? c / n : 0)); }, 350);
  $("sumAgain").onclick = () => { leaveDuel(); startSolo(session.code); };
  $("sumDash").onclick = () => { activeCourse = session.code; go("v-dash"); };
  const cp = $("copyCode"); if(cp) cp.onclick = () => copyText($("chCode").textContent, cp);
}
const arrow = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>`;
function versusHtml(mine, oppName, oppScore, oppFinished){
  const n = session.items.length;
  const verdict = !oppFinished ? `Waiting for ${esc(oppName)} to finish` : mine > oppScore ? "You win" : mine < oppScore ? `${esc(oppName)} wins` : "It’s a draw";
  return `<h3 class="h3" style="margin-top:8px">${verdict}</h3><div class="versus">
    <div class="${oppFinished && mine > oppScore ? "win" : ""}"><b>${mine}</b><span>${esc(myName())}</span></div><em>vs</em>
    <div class="${oppFinished && oppScore > mine ? "win" : ""}"><b>${oppFinished ? oppScore : (oppScore || 0)}</b><span>${esc(oppName)}${oppFinished ? "" : " (playing)"}</span></div></div><p class="sub" style="font-size:14px">Out of ${n} questions</p>`;
}
async function copyText(t, btn){
  try{ await navigator.clipboard.writeText(t); btn.textContent = "Copied"; }
  catch(e){ const r = document.createRange(); r.selectNodeContents($("chCode")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Selected"; }
  setTimeout(() => btn.textContent = "Copy", 1600);
}

/* ===================== Dashboard ===================== */
function renderDash(){
  const code = activeCourse || COURSES[0].code; const stats = topicStats(code); const c = cs(code);
  const seen = stats.reduce((s, t) => s + t.seen, 0), wrong = stats.reduce((s, t) => s + t.wrong, 0);
  const acc = seen ? Math.round((seen - wrong) / seen * 100) + "%" : "–";
  const tried = stats.filter(t => t.seen).sort((a, b) => a.acc - b.acc), untried = stats.filter(t => !t.seen);
  const tags = Object.entries(c.tags).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const color = a => a < .5 ? "var(--bad)" : a < .8 ? "var(--amber)" : "var(--good)";
  const weak = weakTopics(code);
  $("dashPanel").innerHTML = `
    <div class="profile-program">${profileProgramTag()}</div><p class="eyebrow">${esc(code)}</p><h2 class="title">Your weak spots</h2>
    <div class="kpis"><div class="kpi"><b>${seen}</b><span>Answered</span></div><div class="kpi"><b>${acc}</b><span>Accuracy</span></div><div class="kpi"><b>${c.sessions || 0}</b><span>Sessions</span></div></div>
    <h3 class="h3">Accuracy by topic, weakest first</h3>
    ${tried.length ? tried.map(t => `<div class="topic-row"><span>${esc(t.topic)}</span><div class="meter"><i data-w="${Math.round(t.acc * 100)}" style="background:${color(t.acc)}"></i></div><span class="pct">${Math.round(t.acc * 100)}%</span></div>`).join("") : `<p class="empty">Answer a few questions and your topics will show up here.</p>`}
    ${untried.length ? `<p class="empty" style="margin-top:12px">Not tried yet: ${untried.map(t => esc(t.topic)).join(", ")}</p>` : ""}
    <h3 class="h3">Mistakes you repeat</h3>
    ${tags.length ? `<div class="tag-list">${tags.map(([t, k]) => `<span class="mtag">${esc(t)} <em>×${k}</em></span>`).join("")}</div>` : `<p class="empty">No mistakes logged yet.</p>`}
    <div class="stack"><button class="action glass" id="dashWeak" ${weak.length ? "" : "disabled style='opacity:.55'"}><div><strong>Practise weak spots</strong><span>${weak.length ? "Focus on " + esc(weak.join(" and ")) : "Nothing below 85% right now"}</span></div><i class="go">${arrow}</i></button></div>`;
  setTimeout(() => document.querySelectorAll("#dashPanel .meter i").forEach(i => i.style.width = i.dataset.w + "%"), 200);
  if(weak.length) $("dashWeak").onclick = () => { const p = prefsFor(code); cs(code).prefs = Object.assign(p, {focus:"weak"}); save(); startSolo(code); };
}

/* ===================== Head to head ===================== */
let duel = null, duelTab = "live", duelRoom = null, duelUnsub = null;
const DIFF_CH = {mixed:"M", easy:"E", standard:"S", hard:"H"}, CH_DIFF = {M:"mixed", E:"easy", S:"standard", H:"hard"};
function randCode(){ const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let s = ""; for(let i = 0; i < 4; i++) s += a[Math.floor(Math.random() * a.length)]; return s; }
function randSeed(){ return Math.floor(Math.random() * 1679615) + 1; }
function cleanName(n){ return String(n || "Friend").replace(/[^\p{L}\p{N} ]/gu, "").trim().slice(0, 16) || "Friend"; }
function makeChallengeCode(s, score){
  return [s.code, s.seed.toString(36).toUpperCase(), `${s.items.length}${DIFF_CH[s.diff] || "M"}${Math.round(s.timer / 30)}`, score, cleanName(myName()).replace(/ /g, "_")].join("-");
}
function parseChallenge(str){
  const parts = String(str).trim().split("-"); if(parts.length < 5) return null;
  const [code, seed36, cfg, score, ...nm] = parts; const c = COURSES.find(x => x.code === code.toUpperCase()); if(!c) return null;
  const m = /^(\d+)([MESH])(\d)$/i.exec(cfg); if(!m) return null;
  const seed = parseInt(seed36, 36); if(!seed) return null;
  return {code:c.code, seed, count:+m[1], diff:CH_DIFF[m[2].toUpperCase()], timer:+m[3] * 30, score:+score || 0, name:cleanName(nm.join("-").replace(/_/g, " "))};
}
function sessionFrom(cfg, mode, extra = {}){
  const {items, note} = buildSet(cfg.code, {count:cfg.count, diff:cfg.diff, focus:"all", seed:cfg.seed});
  session = Object.assign({mode, code:cfg.code, seed:cfg.seed, diff:cfg.diff, items, note, i:0, correct:0, tags:{}, answers:[], timer:cfg.timer, explainEnd:true}, extra);
  beginSession();
}
function renderDuel(){
  const code = activeCourse || COURSES[0].code; const p = prefsFor(code);
  const panel = $("duelPanel");
  if(duel && duel.kind === "live"){ renderLobby(); return; }
  const liveBody = roomNS
    ? `<p class="sub">Play the same questions at the same time. Your friend needs access to this Orbit page to join.</p>
       <div class="stack"><button class="action glass" id="hostLive"><div><strong>Create a live duel</strong><span>Get a 4-letter code to share</span></div><i class="go">${arrow}</i></button></div>
       <div class="pref"><label>Or join with a code</label><div style="display:flex;gap:8px"><input class="field code" id="joinCode" maxlength="4" placeholder="ABCD" style="margin:0;text-transform:uppercase" autocomplete="off"><button class="btn btn-primary" id="joinLive">Join</button></div></div><p class="err" id="duelErr"></p>`
    : `<p class="notice">Live duels aren’t available in this view. Use a challenge code instead: it works anywhere, even if your friend plays later.</p>`;
  const codeBody = `<p class="sub">Play first, then send your friend a code. They get the exact same questions and see your score against theirs.</p>
    <div class="stack"><button class="action glass" id="createCh"><div><strong>Play and create a code</strong><span>Uses your ${esc(code)} settings, exam style</span></div><i class="go">${arrow}</i></button></div>
    <div class="pref"><label>Got a code from a friend?</label><div style="display:flex;gap:8px"><input class="field code" id="chInput" placeholder="PHY211-…" style="margin:0" autocomplete="off"><button class="btn btn-primary" id="acceptCh">Play</button></div></div><p class="err" id="chErr"></p>`;
  panel.innerHTML = `<p class="eyebrow">${esc(code)}</p><h2 class="title">Duel a friend</h2>
    <div class="tabs">${seg("tab", [["live","Live"],["code","Challenge code"]], duelTab)}</div>
    <div class="step-in">${duelTab === "live" ? liveBody : codeBody}</div>
    <p class="sub" style="font-size:14px;margin-top:18px">Duels run exam style: ${p.count} questions, ${p.timer ? p.timer + "s timer" : "no timer"}, ${DIFFS[p.diff].toLowerCase()} difficulty, explanations at the end.</p>`;
  requestAnimationFrame(() => layoutThumbs(panel));
  panel.querySelector(".seg").onclick = e => { const b = e.target.closest("button"); if(!b) return; duelTab = b.dataset.v; renderDuel(); };
  if(duelTab === "live" && roomNS){
    $("hostLive").onclick = () => hostLive(code, p);
    $("joinLive").onclick = () => joinLive($("joinCode").value);
    $("joinCode").addEventListener("keydown", e => { if(e.key === "Enter") joinLive($("joinCode").value); });
  }
  if(duelTab === "code"){
    $("createCh").onclick = () => sessionFrom({code, seed:randSeed(), count:p.count, diff:p.diff, timer:p.timer}, "code-create");
    const accept = () => { const ch = parseChallenge($("chInput").value); if(!ch){ $("chErr").textContent = "That code doesn’t look right. Check it was copied in full."; return; } sessionFrom(ch, "code-accept", {challenge:ch}); };
    $("acceptCh").onclick = accept;
    $("chInput").addEventListener("keydown", e => { if(e.key === "Enter") accept(); });
  }
}
function opponent(){
  if(!duelRoom) return null;
  return duelRoom.peers().find(pr => !pr.isMe && pr.presence && pr.presence.role && pr.presence.role !== duel.role) || null;
}
function oppDone(){ const o = opponent(); return !!(o && o.presence.phase === "done"); }
async function hostLive(code, p){
  const c = randCode();
  try{ duelRoom = await roomNS.join("duel-" + c.toLowerCase()); }
  catch(e){ $("duelErr").textContent = "Couldn’t open a live duel right now. Try a challenge code instead."; return; }
  duel = {kind:"live", role:"host", code:c, cfg:{code, seed:randSeed(), count:p.count, diff:p.diff, timer:p.timer}, started:false};
  duelRoom.presence({role:"host", name:cleanName(myName()), cfg:duel.cfg, phase:"lobby", i:0, score:0}).catch(() => {});
  watchRoom(); renderLobby();
}
async function joinLive(raw){
  const c = String(raw || "").trim().toUpperCase();
  if(!/^[A-Z0-9]{4}$/.test(c)){ $("duelErr").textContent = "Enter the 4-letter code your friend sees."; return; }
  try{ duelRoom = await roomNS.join("duel-" + c.toLowerCase()); }
  catch(e){ $("duelErr").textContent = "Couldn’t join that duel. Check the code and try again."; return; }
  duel = {kind:"live", role:"guest", code:c, cfg:null, started:false};
  duelRoom.presence({role:"guest", name:cleanName(myName()), phase:"lobby", i:0, score:0}).catch(() => {});
  watchRoom(); renderLobby();
}
function watchRoom(){
  if(duelUnsub) duelUnsub();
  duelUnsub = duelRoom.onPeers(() => {
    const o = opponent();
    if(duel.role === "guest" && o && o.presence.cfg && !duel.cfg) duel.cfg = o.presence.cfg;
    if(duel.role === "guest" && o && o.presence.phase === "play" && !duel.started) startLive();
    if(current === "v-duel") renderLobby();
    if(current === "v-practice") renderHud();
    if(current === "v-summary" && $("liveResult")) $("liveResult").innerHTML = liveResultHtml();
  }, () => {});
}
function renderLobby(){
  const o = opponent(); const p = $("duelPanel");
  const oName = o ? cleanName(o.presence.name) : null;
  let status, btn = "";
  if(duel.role === "host"){
    status = o ? `<div class="status"><span class="dot on"></span>${esc(oName)} is in. Ready when you are.</div>` : `<div class="status"><span class="dot"></span>Waiting for your friend to join</div>`;
    btn = `<button class="btn btn-primary wide" id="startLive" ${o ? "" : "disabled"}>Start duel</button>`;
  } else {
    status = o ? `<div class="status"><span class="dot on"></span>Waiting for ${esc(oName)} to start</div>` : `<div class="status"><span class="dot"></span>Looking for the duel host</div>`;
  }
  const cfg = duel.cfg;
  p.innerHTML = `<p class="eyebrow">Live duel${cfg ? " in " + esc(cfg.code) : ""}</p><h2 class="title">${duel.role === "host" ? "Share this code" : "You’re in"}</h2>
    <div class="big-code">${esc(duel.code)}</div>${status}
    ${cfg ? `<p class="sub" style="text-align:center;font-size:14px">${cfg.count} questions, ${cfg.timer ? cfg.timer + "s each" : "no timer"}, ${DIFFS[cfg.diff].toLowerCase()} difficulty</p>` : ""}
    <div class="stack">${btn}<button class="btn btn-soft wide" id="cancelLive">Leave duel</button></div>`;
  const s = $("startLive"); if(s) s.onclick = () => { duelRoom.presence({phase:"play"}).catch(() => {}); startLive(); };
  $("cancelLive").onclick = () => { leaveDuel(); renderDuel(); };
}
function startLive(){
  if(!duel || !duel.cfg || duel.started) return;
  duel.started = true; activeCourse = duel.cfg.code;
  duelRoom.presence({phase:"play", i:0, score:0}).catch(() => {});
  sessionFrom(duel.cfg, "live");
}
function pushDuelProgress(){
  if(!session || session.mode !== "live" || !duelRoom) return;
  duelRoom.presence({i:session.answers.length, score:session.correct, phase:session.done ? "done" : "play"}).catch(() => {});
}
function renderHud(){
  const hud = $("hud");
  if(!session || session.mode === "solo" || session.mode === "code-create"){ hud.hidden = true; return; }
  const n = session.items.length; let oName, oI, oScore;
  if(session.mode === "live"){ const o = opponent(); oName = o ? cleanName(o.presence.name) : "Friend"; oI = o ? (o.presence.i || 0) : 0; oScore = o ? (o.presence.score || 0) : 0; }
  else { oName = session.challenge.name; oI = n; oScore = session.challenge.score; }
  hud.hidden = false;
  hud.innerHTML = `<div><span>${esc(myName())}</span><div class="meter"><i style="width:${session.answers.length / n * 100}%"></i></div><b>${session.correct}</b></div>
    <div class="opp"><span>${esc(oName)}</span><div class="meter"><i style="width:${Math.min(1, oI / n) * 100}%"></i></div><b>${session.mode === "code-accept" ? oScore : oScore}</b></div>`;
}
function liveResultHtml(){
  const o = opponent();
  if(!o) return `<p class="notice">Your friend left the duel before finishing.</p>`;
  return versusHtml(session.correct, cleanName(o.presence.name), o.presence.score || 0, o.presence.phase === "done");
}
function leaveDuel(){
  if(duelUnsub){ duelUnsub(); duelUnsub = null; }
  if(duelRoom){ duelRoom.leave().catch(() => {}); duelRoom = null; }
  duel = null;
}

/* ===================== Landing text motion ===================== */
/* ===================== Auth, route guards, boot ===================== */
function renderBoot(err){
  const p = $("bootPanel");
  if(!err){ p.innerHTML = `<div class="launch"><div class="planet ringed"></div><h2 class="title">Getting things ready</h2></div>`; return; }
  p.innerHTML = `<div class="step-in" style="text-align:center"><h2 class="title">Couldn’t load your account</h2><p class="sub">Check your connection and try again.</p><p class="muted-err">${esc(err && err.message ? err.message : err)}</p><div class="stack"><button class="btn btn-primary wide" id="bootRetry">Try again</button></div></div>`;
  $("bootRetry").onclick = () => { if(authUser) enter(authUser); };
}
function renderSignin(){
  $("signinPanel").innerHTML = `<div class="planet ringed signin-planet"></div>
    <h2 class="title">Sign in to Orbit</h2>
    <p class="sub">Your progress, weak spots and mistake history are saved to your account, so they follow you from phone to laptop.</p>
    <button class="btn btn-google wide" id="googleBtn"><svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg><span>Continue with Google</span></button>
    <p class="err" id="signinErr"></p>`;
  $("googleBtn").onclick = googleSignIn;
}
function showSigninError(m){ const e = $("signinErr"); if(e) e.textContent = m; }
async function googleSignIn(){
  const btn = $("googleBtn"), label = btn.querySelector("span");
  showSigninError("");
  if(!sb){ showSigninError("Sign-in didn’t load. Check your connection and refresh the page."); return; }
  if(location.protocol === "file:"){ showSigninError("Google sign-in only works from the page’s web address, not from a file on your computer."); return; }
  btn.disabled = true; label.textContent = "Opening Google…";
  const {error} = await sb.auth.signInWithOAuth({provider:"google", options:{redirectTo: location.origin + location.pathname, queryParams:{prompt:"select_account"}}});
  if(error){ btn.disabled = false; label.textContent = "Continue with Google"; showSigninError("Couldn’t start Google sign-in. Please try again."); }
}
function firstName(u){
  const m = (u && u.user_metadata) || {};
  return String(m.given_name || (m.full_name || m.name || "").split(" ")[0] || "").slice(0, 24);
}

function enter(user){
  if(uid === user.id && entering) return entering;
  uid = user.id; authUser = user; authed = true;
  entering = (async () => {
    renderBoot(); go("v-boot", {instant:true});
    try{ await Promise.all([loadProgress(), loadBanks()]); }
    catch(err){ if(uid === user.id){ entering = null; renderBoot(err); } return; }
    if(uid !== user.id) return;   // signed out while loading
    armBackGuard();
    if(hasCompletedOnboarding()){
      go("v-system", {instant:true});
      return;
    }
    const saved = state.onboard || {};
    ob = {
      step:0,
      university: saved.university === "covenant" ? "covenant" : "",
      name: String(saved.name || firstName(user)).slice(0, 24),
      level: saved.level || "",
      program: PROGRAMS.includes(saved.program) ? saved.program : "",
      exam: saved.exam || ""
    };
    ob.step = !ob.university ? 0 : !ob.name ? 1 : !ob.level ? 2 : !ob.program ? 3 : !ob.exam ? 4 : 0;
    go("v-onboard", {instant:true});
  })();
  return entering;
}
function leave(){   // the only way back to the landing page: signing out
  if(!authed) return;
  clearTimeout(saveTimer); saveTimer = null;
  authed = false; uid = null; authUser = null; entering = null;
  state = {onboard:null, courses:{}}; ob = {step:0, university:"", name:"", level:"", program:"", exam:""};
  Object.keys(banks).forEach(k => delete banks[k]); Object.keys(realBank).forEach(k => delete realBank[k]);
  stopTimer(); leaveDuel(); closeSheet(); session = null; activeCourse = null;
  go("v-landing", {instant:true});
}
async function syncSession(){
  if(!sb) return;
  const {data} = await sb.auth.getSession();
  const u = data && data.session && data.session.user;
  if(u) await enter(u); else if(authed) leave();
}

/* Browser Back: once signed in, it stays inside the app and never reaches the landing page. */
let guardArmed = false;
function armBackGuard(){
  if(guardArmed) return; guardArmed = true;
  let done = false;
  const push = () => { if(done) return; done = true; if(authed){ try{ history.pushState({orbit:"app"}, ""); }catch(e){} } };
  // browsers ignore history entries added before the person has touched the page, so arm on first interaction
  if(navigator.userActivation && navigator.userActivation.hasBeenActive) push();
  else { addEventListener("pointerdown", push, {once:true, passive:true}); addEventListener("keydown", push, {once:true}); }
}
function appBack(){
  if(current === "v-system" || current === "v-onboard" || current === "v-boot") return;
  if(current === "v-practice" || current === "v-duel" || current === "v-summary") leaveDuel();
  go(parentOf[current] || "v-system");
}
addEventListener("popstate", () => {
  if(!authed) return;
  try{ history.pushState({orbit:"app"}, ""); }catch(e){}
  appBack();
});
addEventListener("pageshow", e => {   // restored from the back/forward cache: re-check who is signed in
  if(!e.persisted) return;
  syncSession().catch(() => {});
  if(current === "v-signin") renderSignin();
});

$("navOut").addEventListener("click", async () => {
  const b = $("navOut"); b.disabled = true;
  try{ await flushSave(); }catch(e){}
  try{ if(sb) await sb.auth.signOut({scope:"local"}); }catch(e){}
  b.disabled = false; leave();
});
if(sb) sb.auth.onAuthStateChange((event, sess) => {
  setTimeout(() => {   // deferred: supabase-js must not be called from inside this callback
    if(sess && sess.user) enter(sess.user);
    else if(event === "SIGNED_OUT") leave();
  }, 0);
});

async function boot(){
  if(!sb){ go("v-landing", {instant:true}); return; }
  try{ await syncSession(); }catch(e){ console.warn("Orbit: couldn’t check the session", e); }
  try{ if(/[?&#](code|error|error_description|access_token)=/.test(location.search + location.hash)) history.replaceState(null, "", location.pathname); }catch(e){}
  if(authed) return;
  if(pendingAuthError){ go("v-signin", {instant:true}); showSigninError("Google sign-in didn’t complete. " + pendingAuthError); }
  else go("v-landing", {instant:true});
}

/* ===================== Boot ===================== */
connectRoom();
boot();

export {};
