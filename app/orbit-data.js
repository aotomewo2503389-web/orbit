export const SAMPLE = [
  {id:"q01",d:2,topic:"Electrostatics",prompt:"Two point charges, +2 μC and +3 μC, sit 0.30 m apart in air. What is the force between them? (k = 9.0 × 10⁹ N m² C⁻²)",
    options:[{t:"0.60 N, repulsive",ok:true},{t:"0.60 N, attractive",tag:"Force direction",why:"Like charges repel. Both charges are positive, so the force pushes them apart."},{t:"0.18 N, repulsive",tag:"Forgot to square r",why:"You divided by r = 0.30 m instead of r² = 0.09 m². Coulomb’s law falls off with the square of distance."},{t:"6.0 × 10¹¹ N, repulsive",tag:"Dropped a unit prefix",why:"1 μC is 10⁻⁶ C. Leaving the prefix out inflates the answer by 10¹²."}],
    explain:"F = kq₁q₂/r² = (9.0 × 10⁹)(2 × 10⁻⁶)(3 × 10⁻⁶)/(0.30)² = 0.054/0.09 = 0.60 N. Both charges are positive, so they repel."},
  {id:"q02",d:1,topic:"Electrostatics",prompt:"What is the magnitude of the electric field 2.0 m from a point charge of 8.0 nC? (k = 9.0 × 10⁹ N m² C⁻²)",
    options:[{t:"18 N/C",ok:true},{t:"36 N/C",tag:"Forgot to square r",why:"You divided by r = 2 m once. The field goes as 1/r², so divide by 4 m²."},{t:"72 N/C",tag:"Left out the distance",why:"72 is just kq. The field still has to be divided by r²."},{t:"1.8 × 10¹⁰ N/C",tag:"Dropped a unit prefix",why:"1 nC is 10⁻⁹ C. Without it the answer is a billion times too big."}],
    explain:"E = kq/r² = (9.0 × 10⁹)(8.0 × 10⁻⁹)/(2.0)² = 72/4 = 18 N/C."},
  {id:"q03",d:2,topic:"Electrostatics",prompt:"A closed surface encloses a charge +q and a charge −q. What is the net electric flux through the surface?",
    options:[{t:"Zero",ok:true},{t:"2q/ε₀",tag:"Ignored charge sign",why:"Gauss’s law uses the net enclosed charge. +q and −q add to zero, not 2q."},{t:"q/ε₀",tag:"Counted one charge only",why:"Both charges are inside the surface, so both count toward the enclosed charge."},{t:"It depends on the shape of the surface",tag:"Thinks flux depends on shape",why:"For a closed surface, flux depends only on the enclosed charge, never on the surface’s shape or size."}],
    explain:"Φ = Q_enc/ε₀, and Q_enc = (+q) + (−q) = 0, so the net flux is zero."},
  {id:"q04",d:1,topic:"Capacitance",prompt:"A 2.0 μF and a 3.0 μF capacitor are connected in series. What is the equivalent capacitance?",
    options:[{t:"1.2 μF",ok:true},{t:"5.0 μF",tag:"Series and parallel swapped",why:"Adding capacitances directly is the parallel rule. In series, the reciprocals add."},{t:"0.83 μF",tag:"Forgot to invert",why:"1/2 + 1/3 = 0.83 is 1/C. Flip it to get C = 1.2 μF."},{t:"6.0 μF",tag:"Product without the sum",why:"For two in series, C = C₁C₂/(C₁ + C₂)."}],
    explain:"1/C = 1/2 + 1/3 = 5/6, so C = 6/5 = 1.2 μF."},
  {id:"q05",d:2,topic:"Capacitance",prompt:"A 10 μF capacitor is charged to 20 V. How much energy does it store?",
    options:[{t:"2.0 mJ",ok:true},{t:"4.0 mJ",tag:"Forgot the ½",why:"Stored energy is ½CV²."},{t:"0.10 mJ",tag:"Forgot to square",why:"Energy depends on V²."},{t:"2000 J",tag:"Dropped a unit prefix",why:"10 μF is 10 × 10⁻⁶ F."}],
    explain:"U = ½CV² = ½(10 × 10⁻⁶)(20)² = 2.0 mJ."},
  {id:"q06",d:1,topic:"Circuits",prompt:"A 12 Ω resistor is connected across a 6.0 V supply. What power does it dissipate?",
    options:[{t:"3.0 W",ok:true},{t:"72 W",tag:"Multiplied V by R",why:"V × R is not a power formula."},{t:"0.50 W",tag:"Gave current, not power",why:"6/12 = 0.5 A; multiply by V for power."},{t:"0.25 W",tag:"Stopped halfway",why:"0.25 is I²; multiply by R to get P."}],
    explain:"P = V²/R = 36/12 = 3.0 W."},
  {id:"q07",d:1,topic:"Magnetism",prompt:"An electron moves parallel to a uniform magnetic field. What force does the field exert on it?",
    options:[{t:"No force",ok:true},{t:"Maximum force, qvB",tag:"Ignored the angle",why:"F = qvB sin θ, and sin 0° = 0."},{t:"A force along the field direction",tag:"Treated B like an E-field",why:"Magnetic force is perpendicular to v and B."},{t:"A force that speeds it up",tag:"Thinks B does work",why:"Magnetic force changes direction, not speed."}],
    explain:"F = qvB sin θ with θ = 0°, so F = 0."},
  {id:"q08",d:3,topic:"Magnetism",prompt:"A long straight wire carries 10 A. What is the magnetic field 5.0 cm from it? (μ₀ = 4π × 10⁻⁷ T m A⁻¹)",
    options:[{t:"4.0 × 10⁻⁵ T",ok:true},{t:"2.5 × 10⁻⁴ T",tag:"Dropped the 2π",why:"The field is μ₀I/(2πr)."},{"t":"2.0 × 10⁻⁵ T",tag:"Doubled the distance",why:"Use r = 0.05 m."},{"t":"2.0 × 10⁻⁶ T",tag:"Left out the distance",why:"Divide μ₀I/(2π) by r."}],
    explain:"B = μ₀I/(2πr) = (4π × 10⁻⁷)(10)/(2π × 0.05) = 4.0 × 10⁻⁵ T."},
  {id:"q09",d:2,topic:"Induction",prompt:"The flux through each turn of a 200-turn coil falls from 0.030 Wb to 0.010 Wb in 0.10 s. What is the average induced emf?",
    options:[{t:"40 V",ok:true},{t:"0.20 V",tag:"Forgot the number of turns",why:"Faraday’s law multiplies by N."},{t:"4.0 V",tag:"Didn’t divide by time",why:"Divide flux linkage change by time."},{t:"60 V",tag:"Used one flux value",why:"Use the change in flux, not the starting value."}],
    explain:"ε = NΔΦ/Δt = 200 × (0.030 − 0.010)/0.10 = 40 V."},
  {id:"q10",d:2,topic:"Induction",prompt:"The north pole of a bar magnet is pushed towards one end of a coil. What does that end become?",
    options:[{t:"A north pole",ok:true},{t:"A south pole",tag:"Lenz direction flipped",why:"A south pole would attract rather than oppose."},{t:"Nothing, because there is no battery",tag:"Thinks induction needs a source",why:"Changing flux induces current."},{t:"A north pole only if the magnet moves fast",tag:"Speed decides direction",why:"Speed affects magnitude, not direction."}],
    explain:"Lenz’s law makes the near end a north pole to oppose the approaching north pole."},
  {id:"q11",d:1,topic:"Transformers",prompt:"An ideal transformer has 1200 primary turns and 60 secondary turns. The primary is 240 V a.c. What is the secondary voltage?",
    options:[{t:"12 V",ok:true},{t:"4800 V",tag:"Inverted turns ratio",why:"It is a step-down transformer."},{t:"240 V",tag:"Thinks voltage stays constant",why:"Voltage scales with turns."},{t:"20 V",tag:"Gave the ratio",why:"Divide 240 V by 20."}],
    explain:"Vs/Vp = Ns/Np, so Vs = 240 × 60/1200 = 12 V."},
  {id:"q12",d:3,topic:"Transformers",prompt:"In the ideal transformer above, the secondary delivers 2.0 A. What current flows in the primary?",
    options:[{t:"0.10 A",ok:true},{t:"40 A",tag:"Inverted turns ratio",why:"Primary current is smaller in a step-down transformer."},{t:"2.0 A",tag:"Thinks current stays constant",why:"Power in equals power out."}],
    explain:"Ip = VsIs/Vp = (12 × 2.0)/240 = 0.10 A."},
  {id:"q13",d:2,topic:"Transformers",prompt:"A steady d.c. supply is connected to a transformer’s primary. After switch-on, what is the secondary output?",
    options:[{t:"Zero",ok:true},{t:"Stepped-down d.c.",tag:"Thinks transformers work on d.c.",why:"Steady d.c. gives constant flux."},{t:"Stepped-down a.c.",tag:"Thinks transformers make a.c.",why:"A transformer does not convert d.c. to a.c."}],
    explain:"A transformer needs changing flux; steady d.c. produces dΦ/dt = 0 after switch-on."},
  {id:"q14",d:2,topic:"Inductors",prompt:"A 0.20 H inductor carries a steady 3.0 A. How much energy is stored?",
    options:[{t:"0.90 J",ok:true},{t:"1.8 J",tag:"Forgot the ½",why:"Stored energy is ½LI²."},{t:"0.30 J",tag:"Forgot to square",why:"Use I²."},{t:"0.60 J",tag:"Used LI",why:"LI is flux linkage."}],
    explain:"U = ½LI² = ½ × 0.20 × 9 = 0.90 J."},
  {id:"q15",d:2,topic:"Inductors",prompt:"The current in a 0.50 H inductor rises at 4.0 A/s. What emf is induced?",
    options:[{t:"2.0 V",ok:true},{t:"8.0 V",tag:"Divided instead of multiplied",why:"Emf is L × dI/dt."},{t:"0.125 V",tag:"Divided instead of multiplied",why:"Multiply L by dI/dt."},{t:"Zero",tag:"Confused change with reversal",why:"Any change in current induces an emf."}],
    explain:"|ε| = L dI/dt = 0.50 × 4.0 = 2.0 V."},
  {id:"q16",d:3,topic:"Inductors",prompt:"An RL circuit has L = 2.0 H and R = 4.0 Ω. What is its time constant?",
    options:[{t:"0.50 s",ok:true},{t:"8.0 s",tag:"Multiplied L and R",why:"The RL time constant is L/R."},{t:"2.0 s",tag:"Inverted L/R",why:"Use L/R, not R/L."}],
    explain:"τ = L/R = 2.0/4.0 = 0.50 s."}
];

export const COURSES = [
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

export const COURSES_BY_PROGRAM_LEVEL = {
  "Industrial Physics":{"100 level":["PHY111","PHY113","MTH111"],"200 level":["CIT211","CSC233","DLD111","ENT211","GST211","MTH213","PHY211","PHY213","PHY215","PHY218","PHY232","TMC211","TMC212"]},
  "Industrial Maths":{"200 level":["MTH213"]},
  "Industrial Chemistry":{"200 level":["MTH213"]},
  "Computer Science":{"200 level":["MTH213"]},
  "Biology":{"200 level":["MTH213"]},
  "Microbiology":{"200 level":["MTH213"]},
  "Management Information Systems (MIS)":{"200 level":["MTH213"]}
};

export const UNIVERSITY_LOGOS = {covenant:"covenant-university.jpeg",unilag:"unilag.jpeg",landmark:"landmark-university.jpeg"};
export const LANDING_COURSES = [
  {name:"Maths",h:262,icon:"maths"}, {name:"Physics",h:32,icon:"physics"}, {name:"Computer Science",h:168,icon:"computing"},
  {name:"Computer Engineering",h:345,icon:"engineering"}, {name:"Biology",h:212,icon:"biology"}
];

export const DIFFS = {mixed:"Mixed",easy:"Easy",standard:"Standard",hard:"Hard"};
export const DIFF_N = {easy:1,standard:2,hard:3};
export const DEFAULT_PREFS = {count:10,timer:0,diff:"mixed",focus:"all",source:"all",topic:"",explain:"each"};
