(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const w={m1:{id:"m1",num:"M1",name:"M1 - Introduction to QM",open:!0,progress:100,status:"Complete",statusPill:"p-complete",staged:"Live on LMS (Published Aug 31)",stagedBadge:"Live",stagedPill:"p-complete",dateRange:"Aug 25 – Sep 8",spanStart:0,spanEnd:11,finalized:[{item:"Script & Storyboards (L1–L2) finalized",date:"Aug 28",by:"Ankit Verma (PRA)"},{item:"Studio Video Shoot Complete",date:"Sep 2",by:"Ravi Kumar (Editor)"},{item:"QC Audio & Video Sign-off Passed",date:"Sep 8",by:"Stuti Garg (QC)"},{item:"Live on edX & Swayam LMS",date:"Aug 31",by:"Malhar (Manager)"}],changeHistory:[{date:"Sep 1",user:"Ankit Verma (PRA)",oldDates:"Aug 28 – Sep 1",newDates:"Aug 28 – Sep 2",reason:"Studio slot delayed by 1 day due to faculty availability"}],items:[{id:"m1-l1-rev",modId:"m1",lesson:"L1 - What is QM?",task:"Edit & Final Review",s:0,e:7,sStr:"2026-09-01",eStr:"2026-09-08",col:"#15803d",txt:"Complete &#10003;",status:"Complete",owner:"Ravi Kumar",contents:"Final master video (1080p 24fps, 14m 20s), slides deck (18 slides), intro bumper & lower thirds, complete transcript & SRT subtitles.",createdBy:"Malhar (Manager) on 20 Aug 2026",lastEdited:"Ankit Verma (PRA) on 01 Sep 2026",lastEditReason:"Studio slot delayed by 1 day due to faculty availability",editHistory:[{date:"01 Sep 2026",by:"Ankit Verma (PRA)",oldDates:"2026-08-28 – 2026-09-01",newDates:"2026-09-01 – 2026-09-08",reason:"Studio slot delayed by 1 day due to faculty availability"}]},{id:"m1-l2-qc",modId:"m1",lesson:"L2 - Data Types",task:"QC Review & Signoff",s:7,e:11,sStr:"2026-09-08",eStr:"2026-09-12",col:"#059669",txt:"QC Passed &#10003;",status:"Complete",owner:"Stuti Garg",contents:"QC audit report, audio loudness check (-14 LUFS verified), color pass, LMS packaging zip.",createdBy:"Malhar (Manager) on 20 Aug 2026",lastEdited:null,lastEditReason:null,editHistory:[]}]},m2:{id:"m2",num:"M2",name:"M2 - Descriptive Statistics",open:!1,progress:65,status:"In Progress",statusPill:"p-review",staged:"Draft staged on sandbox for internal QA review",stagedBadge:"Staged (Sandbox)",stagedPill:"p-warning",dateRange:"Sep 5 – Sep 18",spanStart:4,spanEnd:17,finalized:[{item:"Scripts & Formula sheets approved",date:"Sep 4",by:"Ankit Verma (PRA)"},{item:"L1 Rough cut completed",date:"Sep 9",by:"Ravi Kumar (Editor)"}],changeHistory:[],items:[{id:"m2-l1-rev",modId:"m2",lesson:"L1 - Central Tendency",task:"Edit → V2 Review",s:4,e:10,sStr:"2026-09-05",eStr:"2026-09-11",col:"#7c3aed",txt:"Review V2",status:"Review",owner:"Malhar",contents:"V2 video cut incorporating faculty corrections on median formula notation, updated slide deck.",createdBy:"Ankit Verma (PRA) on 28 Aug 2026",lastEdited:"Malhar (Manager) on 05 Sep 2026",lastEditReason:"Faculty requested extra review window for mathematical notations",editHistory:[{date:"05 Sep 2026",by:"Malhar (Manager)",oldDates:"2026-09-05 – 2026-09-09",newDates:"2026-09-05 – 2026-09-11",reason:"Faculty requested extra review window for mathematical notations"}]},{id:"m2-l2-ed",modId:"m2",lesson:"L2 - Dispersion",task:"Editing V1",s:7,e:13,sStr:"2026-09-08",eStr:"2026-09-14",col:"#0891b2",txt:"Editing V1",status:"Editing",owner:"Ravi Kumar",contents:"Raw studio footage sync, sound design, variance calculation motion graphics.",createdBy:"Ankit Verma (PRA) on 28 Aug 2026",lastEdited:null,lastEditReason:null,editHistory:[]},{id:"m2-l3-sh",modId:"m2",lesson:"L3 - Data Visualisation",task:"Studio Shoot",s:11,e:13,sStr:"2026-09-12",eStr:"2026-09-14",col:"#ea7c1e",txt:"Shoot",status:"Shoot",owner:"Ankit Verma",contents:"Green screen studio recording with Prof. R. Sharma, teleprompter slides, demonstration charts.",createdBy:"Malhar (Manager) on 30 Aug 2026",lastEdited:null,lastEditReason:null,editHistory:[]}]},m3:{id:"m3",num:"M3",name:"M3 - Probability",open:!1,progress:42,status:"In Progress",statusPill:"p-warning",staged:"Not staged yet (awaiting L4 review approval)",stagedBadge:"Pending Review",stagedPill:"p-danger",dateRange:"Sep 8 – Sep 22",spanStart:7,spanEnd:21,finalized:[{item:"L1 & L2 Final animations approved",date:"Sep 7",by:"Ankit Verma (PRA)"},{item:"L4 Deliverable V1 uploaded to Drive",date:"Sep 10",by:"Ankit Verma (PRA)"}],changeHistory:[{date:"Sep 8",user:"Malhar (Manager)",oldDates:"Sep 8 – Sep 10",newDates:"Sep 8 – Sep 11",reason:"Extended L4 Review turnaround due to complex normal distribution diagrams"}],items:[{id:"m3-l1-ed",modId:"m3",lesson:"L1 - Basic Probability",task:"Editing V1",s:9,e:15,sStr:"2026-09-10",eStr:"2026-09-16",col:"#0891b2",txt:"Editing V1",status:"Editing",owner:"Ravi Kumar",contents:"Initial cut, Venn diagram overlays, audio clean-up.",createdBy:"Ankit Verma (PRA) on 01 Sep 2026",lastEdited:null,lastEditReason:null,editHistory:[]},{id:"m3-l2-sb",modId:"m3",lesson:"L2 - Conditional Probability",task:"Storyboard",s:7,e:13,sStr:"2026-09-08",eStr:"2026-09-14",col:"#6d6cf0",txt:"Storyboard",status:"Storyboard",owner:"Ankit Verma",contents:"Bayes Theorem visual explanation boards, coin toss animations, student exercise prompts.",createdBy:"Ankit Verma (PRA) on 01 Sep 2026",lastEdited:null,lastEditReason:null,editHistory:[]},{id:"m3-l4-rev",modId:"m3",lesson:"⭐ L4 - Prob. Distributions",task:"Review V1",s:7,e:10,sStr:"2026-09-08",eStr:"2026-09-11",col:"#dc2626",txt:"⚠ Review V1 (Overdue)",status:"Review",owner:"Malhar",overdue:!0,contents:"Google Drive V1 cut link (18m 42s), script-prob-dist-v1-final.docx, slides-prob-dist-v1.pptx, assets-prob-dist-v1.zip.",createdBy:"Malhar (Manager) on 02 Sep 2026",lastEdited:"Malhar (Manager) on 08 Sep 2026",lastEditReason:"Extended L4 Review turnaround due to complex normal distribution diagrams",editHistory:[{date:"08 Sep 2026",by:"Malhar (Manager)",oldDates:"2026-09-08 – 2026-09-10",newDates:"2026-09-08 – 2026-09-11",reason:"Extended L4 Review turnaround due to complex normal distribution diagrams"}]}]},m4:{id:"m4",num:"M4",name:"M4 - Hypothesis Testing",open:!1,progress:10,status:"Planned",statusPill:"p-none",staged:"Not started yet",stagedBadge:"Not Started",stagedPill:"p-none",dateRange:"Sep 20 – Oct 6",spanStart:19,spanEnd:35,finalized:[],changeHistory:[],items:[{id:"m4-l1-sb",modId:"m4",lesson:"L1 - Null Hypothesis",task:"Storyboard",s:19,e:29,sStr:"2026-09-20",eStr:"2026-09-30",col:"#6d6cf0",txt:"Planned",status:"Planned",owner:"Ankit Verma",contents:"Initial module outline and syllabus alignment with Faculty.",createdBy:"Malhar (Manager) on 05 Sep 2026",lastEdited:null,lastEditReason:null,editHistory:[]}]}},h={m1:{id:"m1",num:"Module 1",title:"Module 1 - Introduction to Quantitative Methods",shortTitle:"Module 1",status:"Complete",statusPill:"p-complete",progress:100,progressCol:"var(--success)",phase:"QC & Signoff",target:"Completed Aug 2026",team:[{name:"Ravi Kumar",role:"Editor",color:"#ea7c1e",init:"RK"},{name:"Stuti Garg",role:"QC",color:"var(--success)",init:"SG"}],desc:"Foundational module establishing terminology, quantitative decision models, and measurement scales used throughout the course.",availableUnits:["Unit 1 - What is Quantitative Methods?","Unit 2 - Data Types & Scales"],batches:[{id:"batch-m1-1",num:"Batch 1",units:["Unit 1 - What is Quantitative Methods?"],status:"Completed",statusPill:"p-complete",submittedBy:"Ravi Kumar",submittedDate:"28 Aug 2026",driveName:"QM101 - Module 1 - Batch 1 - Final",driveUrl:"drive.google.com/drive/folders/m1batch1",fileLinks:["drive.google.com/file/d/m1-unit1-final-video","drive.google.com/file/d/m1-unit1-assets-zip"],notes:"Final video, captions, and source assets reviewed and approved.",reviewComment:"Reviewed by QC — all deliverables meet the publication standard.",notes_thread:[],editHistory:[]},{id:"batch-m1-2",num:"Batch 2",units:["Unit 2 - Data Types & Scales"],status:"Reviewed",statusPill:"p-complete",submittedBy:"Stuti Garg",submittedDate:"2 Sep 2026",driveName:"QM101 - Module 1 - Batch 2 - QC Final",driveUrl:"drive.google.com/drive/folders/m1batch2",fileLinks:["drive.google.com/file/d/m1-unit2-final-video","drive.google.com/file/d/m1-unit2-subtitles-zip"],notes:"QC package includes final video, transcript, captions, and LMS package.",reviewComment:"Reviewed and signed off. Module 1 is ready for publication.",notes_thread:[],editHistory:[]}],lessons:[{id:"m1l1",title:"L1 - What is Quantitative Methods?",fullTitle:"M1 · L1 - What is Quantitative Methods?",itemTitle:"Lecture Video & Script Finalized",phase:"Complete",status:"Done",version:"V2",owner:"Ravi Kumar",ownerColor:"#ea7c1e",due:"Aug 28",desc:"Introductory overview of quantitative techniques in management decision making. Audio synced and captions validated.",notes:[{author:"Ravi Kumar",role:"Editor",text:"All cuts finalized and color grading locked.",time:"28 Aug · 4:15 PM",color:"#ea7c1e",init:"RK"}]},{id:"m1l2",title:"L2 - Data Types & Scales",fullTitle:"M1 · L2 - Data Types & Scales",itemTitle:"QC Verification & Signoff",phase:"QC",status:"Done",version:"V1",owner:"Stuti Garg",ownerColor:"var(--success)",due:"Sep 2",desc:"Nominal, Ordinal, Interval, and Ratio scale concepts. Passed all technical quality standards.",notes:[{author:"Stuti Garg",role:"QC",text:"Quality check passed with zero defects. Audio levels calibrated at -14 LUFS.",time:"2 Sep · 11:30 AM",color:"var(--success)",init:"SG"}]}]},m2:{id:"m2",num:"Module 2",title:"Module 2 - Descriptive Statistics",shortTitle:"Module 2",status:"Editing",statusPill:"p-editing",progress:55,progressCol:"var(--c-editing)",phase:"Video Editing",target:"Sep 18, 2026",team:[{name:"Ankit Verma",role:"PRA",color:"#0891b2",init:"AV"},{name:"Ravi Kumar",role:"Editor",color:"#ea7c1e",init:"RK"}],desc:"Covers central tendency, dispersion metrics, and graphical visualization of univariate data distributions.",availableUnits:["Unit 1 - Measures of Central Tendency","Unit 2 - Measures of Dispersion","Unit 3 - Data Visualisation"],batches:[{id:"batch-m2-1",num:"Batch 1",units:["Unit 1 - Measures of Central Tendency","Unit 2 - Measures of Dispersion"],status:"Changes Requested",statusPill:"p-review",submittedBy:"Ravi Kumar",submittedDate:"9 Sep 2026",driveName:"QM101 - Module 2 - Batch 1 - V2",driveUrl:"drive.google.com/drive/folders/m2batch1",notes:"V2 revisions incorporated. Updated slide 14 calculation graph.",reviewComment:"Transition timing needs fixing between histograms. Revise and resubmit.",notes_thread:[]},{id:"batch-m2-2",num:"Batch 2",units:["Unit 3 - Data Visualisation"],status:"In Progress",statusPill:"p-editing",submittedBy:"Neha Khatri",submittedDate:"Not submitted yet",driveName:"QM101 - Module 2 - Batch 2",driveUrl:"",notes:"Studio shoot scheduled Sep 13. Teleprompter script loaded.",reviewComment:"",notes_thread:[]}],lessons:[{id:"m2l1",title:"L1 - Measures of Central Tendency",fullTitle:"M2 · L1 - Measures of Central Tendency",itemTitle:"Edit Video Revisions (V2)",phase:"Review",status:"Awaiting Review",version:"V2",owner:"Ravi Kumar",ownerColor:"#ea7c1e",due:"Sep 12",desc:"V2 revisions incorporated from faculty feedback on mean, median, and mode skewness examples.",notes:[{author:"Ravi Kumar",role:"Editor",text:"V2 timeline exported. Updated slide 14 calculation graph.",time:"9 Sep · 3:20 PM",color:"#ea7c1e",init:"RK"}]},{id:"m2l2",title:"L2 - Measures of Dispersion",fullTitle:"M2 · L2 - Measures of Dispersion",itemTitle:"Edit Video V1 Rough Cut",phase:"Editing",status:"In Progress",version:"V1",owner:"Ankit Verma",ownerColor:"#0891b2",due:"Sep 14",desc:"Editing in progress. V1 rough cut at 60%. Focus on clean transitions between histogram and box plot sections.",notes:[{author:"Ankit Verma",role:"PRA",text:"Rough cut assembly 60% done. Waiting for raw audio cleanup.",time:"9 Sep · 5:10 PM",color:"#0891b2",init:"AV"}]},{id:"m2l3",title:"L3 - Data Visualisation",fullTitle:"M2 · L3 - Data Visualisation",itemTitle:"Studio Recording Shoot",phase:"Shoot",status:"Scheduled",version:"-",owner:"Neha Khatri",ownerColor:"#ea7c1e",due:"Sep 13",desc:"Studio shoot booked at IIMB Media Lab with Prof. Sridhar for live Excel demos.",notes:[{author:"Neha Khatri",role:"PRA",text:"Studio reserved 2 PM to 5 PM. Teleprompter script loaded.",time:"8 Sep · 1:00 PM",color:"#ea7c1e",init:"NK"}]}]},m3:{id:"m3",num:"Module 3",title:"Module 3 - Probability",shortTitle:"Module 3",status:"Review",statusPill:"p-review",progress:35,progressCol:"var(--violet)",phase:"Review & Production",target:"Sep 22, 2026",team:[{name:"Ankit Verma",role:"PRA",color:"#0891b2",init:"AV"},{name:"Ravi Kumar",role:"Editor",color:"#ea7c1e",init:"RK"}],desc:"Foundational probability theory, conditional probability, Bayes theorem, and continuous distributions.",availableUnits:["Unit 1 - Basic Probability","Unit 2 - Conditional Probability","Unit 3 - Bayes Theorem","Unit 4 - Probability Distributions"],batches:[{id:"batch-m3-1",num:"Batch 1",units:["Unit 1 - Basic Probability","Unit 2 - Conditional Probability","Unit 3 - Bayes Theorem","Unit 4 - Probability Distributions"],status:"Awaiting Review",statusPill:"p-warning",submittedBy:"Ankit Verma",submittedDate:"10 Sep 2026",driveName:"QM101 - Module 3 - Batch 1 - V1",driveUrl:"drive.google.com/drive/folders/m3batch1",notes:"V1 complete. Covers Normal, Binomial and Poisson distributions with animated visuals. Running time 12m 34s.",reviewComment:"",notes_thread:[]}],lessons:[{id:"m3l1",title:"L1 - Basic Probability",fullTitle:"M3 · L1 - Basic Probability",itemTitle:"Edit Video V1",phase:"Editing",status:"In Progress",version:"V1",owner:"Ravi Kumar",ownerColor:"#ea7c1e",due:"Sep 16",desc:"Premiere Pro edit in progress. Custom coin and dice animations being prepared.",notes:[{author:"Ravi Kumar",role:"Editor",text:"Started assembly cut today.",time:"10 Sep · 9:15 AM",color:"#ea7c1e",init:"RK"}]},{id:"m3l2",title:"L2 - Conditional Probability",fullTitle:"M3 · L2 - Conditional Probability",itemTitle:"Storyboard Submission",phase:"Storyboard",status:"In Progress",version:"-",owner:"Ankit Verma",ownerColor:"#0891b2",due:"Sep 14",desc:"Slide deck storyboard covering independent events and tree diagrams.",notes:[{author:"Ankit Verma",role:"PRA",text:"Drafting storyboard slides in PPT.",time:"8 Sep · 2:30 PM",color:"#0891b2",init:"AV"}]},{id:"m3l3",title:"L3 - Bayes' Theorem",fullTitle:"M3 · L3 - Bayes' Theorem",itemTitle:"Storyboard Planning",phase:"Storyboard",status:"Scheduled",version:"-",owner:"Ankit Verma",ownerColor:"#0891b2",due:"Sep 18",desc:"Real-world diagnostic testing examples. Storyboard scheduled after L2 signoff.",notes:[]},{id:"m3l4",title:"L4 - Probability Distributions",fullTitle:"M3 · L4 - Probability Distributions",itemTitle:"Review Video V1",phase:"Editing",status:"Awaiting Review",version:"V1",owner:"Ankit Verma",ownerColor:"#7c3aed",due:"Sep 11",desc:"V1 complete. Covers Normal, Binomial and Poisson distributions with animated visuals. Running time 12m 34s. Ready for Manager review.",notes:[{author:"Ankit Verma",role:"PRA",text:"V1 video uploaded to Drive. Ready for review.",time:"10 Sep · 10:45 AM",color:"#0891b2",init:"AV"}]}]},m4:{id:"m4",num:"Module 4",title:"Module 4 - Hypothesis Testing",shortTitle:"Module 4",status:"Not Started",statusPill:"p-none",progress:0,progressCol:"var(--text-3)",phase:"Planning",target:"Oct 5, 2026",team:[{name:"Unassigned",role:"PRA",color:"#94a3b8",init:"-"}],desc:"Formulation of null and alternative hypotheses, p-values, and Type I/II decision errors.",lessons:[{id:"m4l1",title:"L1 - Null & Alternative Hypothesis",fullTitle:"M4 · L1 - Null & Alternative Hypothesis",itemTitle:"Script Preparation",phase:"Planning",status:"Not Started",version:"-",owner:"Unassigned",ownerColor:"#94a3b8",due:"Sep 25",desc:"Faculty lecture notes received. Scriptwriting scheduled to start next week.",notes:[]},{id:"m4l2",title:"L2 - Type I & II Errors",fullTitle:"M4 · L2 - Type I & II Errors",itemTitle:"Script Preparation",phase:"Planning",status:"Not Started",version:"-",owner:"Unassigned",ownerColor:"#94a3b8",due:"Sep 30",desc:"Script outlining error matrix and significance levels.",notes:[]}]},m5:{id:"m5",num:"Module 5",title:"Module 5 - Regression Analysis",shortTitle:"Module 5",status:"Not Started",statusPill:"p-none",progress:0,progressCol:"var(--text-3)",phase:"Planning",target:"Oct 20, 2026",team:[{name:"Unassigned",role:"PRA",color:"#94a3b8",init:"-"}],desc:"Linear and multiple regression models, R-squared interpretation, and residual diagnostics.",lessons:[{id:"m5l1",title:"L1 - Simple Linear Regression",fullTitle:"M5 · L1 - Simple Linear Regression",itemTitle:"Outline & Syllabus",phase:"Planning",status:"Not Started",version:"-",owner:"Unassigned",ownerColor:"#94a3b8",due:"Oct 10",desc:"Course outline draft in review by subject matter expert.",notes:[]}]},m6:{id:"m6",num:"Module 6",title:"Module 6 - Advanced Topics",shortTitle:"Module 6",status:"Pending Scope",statusPill:"p-none",progress:0,progressCol:"var(--text-3)",phase:"Pending Scope",target:"Nov 2026",team:[{name:"Unassigned",role:"PRA",color:"#94a3b8",init:"-"}],desc:"Optional advanced electives: Time Series Analysis, Logistic Regression, and Non-parametric tests.",lessons:[{id:"m6l1",title:"L1 - Time Series & Forecasting",fullTitle:"M6 · L1 - Time Series & Forecasting",itemTitle:"Curriculum Proposal",phase:"Scope",status:"Pending Scope",version:"-",owner:"Unassigned",ownerColor:"#94a3b8",due:"Oct 25",desc:"Under review with faculty committee.",notes:[]}]}},b={Manager:{name:"Malhar",initials:"PM",color:"var(--accent)",greet:"Good morning, Priya 👋"},PRA:{name:"Ankit Verma",initials:"AV",color:"#0891b2",greet:"Good morning, Ankit 👋"},Editor:{name:"Ravi Kumar",initials:"RK",color:"#ea7c1e",greet:"Good morning, Ravi 👋"}};window.TIMELINE_DATA=w;window.MODULES_DATA=h;window.ROLES=b;function re(){document.getElementById("floatNotif").classList.add("hidden")}setTimeout(re,12e3);const xe={dashboard:"Dashboard",projects:"All Projects",overview:"QM101 - Overview",work:"QM101 - Work Items",timeline:"QM101 - Timeline",review:"QM101 - Review",activity:"QM101 - Activity",notifications:"Notifications"};function N(e){document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".nav-item,.nav-sub").forEach(i=>i.classList.remove("active"));const t=document.getElementById("screen-"+e);t&&t.classList.add("active"),document.getElementById("topbar-title").textContent=xe[e]||e;const n=document.getElementById("nav-"+e);n&&n.classList.add("active"),e==="work"&&(document.querySelector(".tree-children.open")||q("m1")),e==="review"&&D()}function Me(e,t){e==="work"&&t?q(t):N(e)}let p="Manager";function Ee(){document.getElementById("roleDropdown").classList.toggle("open")}function $e(e){const t=b[e];p=e;const n=e==="Manager",i=e==="PRA",o=e==="Editor";document.querySelectorAll('[id^="notes-av-"]').forEach(c=>{c.textContent=t.initials,c.style.background=t.color}),document.getElementById("sb-av").textContent=t.initials,document.getElementById("sb-av").style.background=t.color,document.getElementById("sb-name").textContent=t.name,document.getElementById("sb-role").textContent=e,document.getElementById("rc-label").textContent=e,document.getElementById("rc-dot").style.background=t.color,document.getElementById("dash-greet").textContent=t.greet,document.getElementById("modal-av").textContent=t.initials,document.getElementById("modal-av").style.background=t.color,document.getElementById("modal-mgr-name").textContent=t.name,document.querySelectorAll(".manager-only").forEach(c=>{c.style.display=n?"":"none"}),document.getElementById("dash-manager-view").style.display=n?"":"none",document.getElementById("dash-pra-view").style.display=i?"":"none",document.getElementById("dash-editor-view").style.display=o?"":"none",document.getElementById("dash-section-label").textContent=n?"Needs your attention":"Your tasks",document.getElementById("dash-proj-label").textContent=n?"Your Projects":"Your Assignments";const a=document.getElementById("rev-decision-panel"),s=document.getElementById("rev-submit-panel"),u=document.getElementById("rev-pra-actions");a&&(a.style.display=n?"":"none"),s&&(s.style.display=n?"none":""),u&&(u.style.display=n?"none":"");const d=document.querySelector('.topbar .tb-icon[onclick="openModal()"]');d&&(d.style.display=n?"":"none"),document.querySelectorAll(".role-opt").forEach(c=>{c.classList.remove("active");const r=c.querySelector('svg[id^="check"]');r&&r.remove()});const l=document.getElementById("role-"+e);if(l){l.classList.add("active");const c=document.createElement("svg");c.id="check-"+e,c.setAttribute("width","14"),c.setAttribute("height","14"),c.setAttribute("viewBox","0 0 16 16"),c.setAttribute("fill","none"),c.setAttribute("stroke",t.color),c.setAttribute("stroke-width","2.5"),c.style.marginLeft="auto",c.innerHTML='<path d="M3 8l4 4 6-6"/>',l.appendChild(c)}document.getElementById("roleDropdown").classList.remove("open")}document.addEventListener("click",e=>{!e.target.closest("#roleChipBtn")&&!e.target.closest(".user-row")&&!e.target.closest("#roleDropdown")&&document.getElementById("roleDropdown").classList.remove("open")});function C(e){if(!e)return 0;const t=new Date("2026-09-01T00:00:00"),n=new Date(e+"T00:00:00"),i=Math.round((n-t)/(1e3*60*60*24));return Math.max(0,Math.min(55,i))}function F(e){e.status==="Complete"&&(e.status="Completed");const t=new Date;t.setHours(0,0,0,0);const n=new Date(e.eStr+"T00:00:00");return e.status!=="Completed"&&!Number.isNaN(n.getTime())&&n<t&&(e.status="Not updated yet",e.overdue=!0),e.status}function Q(e){return e==="Completed"?"p-complete":e==="Not updated yet"?"p-danger":"p-editing"}function I(){const n=r=>(Math.max(0,Math.min(56,r))/56*100).toFixed(2)+"%",i=r=>(Math.max(1,r)/56*100).toFixed(2)+"%";let o="",a="";Object.keys(w).forEach(r=>{const g=w[r];o+=`
              <div class="gantt-fixed-row row-mod" onclick="toggleTimelineMod('${r}')" style="display:flex;align-items:center;justify-content:space-between;min-height:34px;gap:4px;padding:6px 10px 6px 10px">
                <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
                  <span class="gantt-mod-toggle" style="flex-shrink:0">${g.open?"▼":"▶"}</span>
                  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px;font-weight:700">${g.name}</span>
                </div>
                <div style="display:flex;align-items:center;gap:4px;flex-shrink:0">
                  <span class="pill ${g.statusPill}" style="font-size:9px;padding:1px 5px">${g.progress}%</span>
                  <span class="pill" style="font-size:9px;background:var(--surface-2);color:var(--text-3);padding:1px 4px;cursor:pointer" onclick="event.stopPropagation();openModuleTimelineDetail('${r}')">${g.items.length} ℹ</span>
                </div>
              </div>
            `,a+=`
              <div class="gantt-row gantt-mod-row" onclick="toggleTimelineMod('${r}')" style="min-height:34px">
                <div class="gantt-cells" style="height:34px">
                  ${[0,1,2,3,4,5,6,7].map(m=>`<div class="gantt-cell${m===1?" cur-w":""}"></div>`).join("")}
                  <div class="gantt-mod-span-bar" style="left:${n(g.spanStart)};width:${i(g.spanEnd-g.spanStart)}"></div>
                </div>
              </div>
            `,g.open&&(g.items.length===0?(o+='<div class="gantt-fixed-row row-wi" style="min-height:34px;font-style:italic;color:var(--text-3);padding-left:28px">No schedule items yet</div>',a+=`
                  <div class="gantt-row" style="min-height:34px">
                    <div class="gantt-cells" style="height:34px">
                      ${[0,1,2,3,4,5,6,7].map(m=>`<div class="gantt-cell${m===1?" cur-w":""}"></div>`).join("")}
                      <button class="btn btn-ghost btn-xs" style="position:absolute;left:10px" onclick="openAddTimelineModal('${r}')">+ Add Schedule</button>
                    </div>
                  </div>
                `):g.items.forEach(m=>{const v=F(m);o+=`
                    <div class="gantt-fixed-row row-wi" onclick="openTimelineItemInfo('${m.id}')" style="min-height:34px;padding:5px 10px 5px 28px;cursor:pointer">
                      <span style="font-weight:600;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.overdue?"⚠ ":""}${m.lesson}</span>
                      <span style="margin-left:4px;color:var(--text-3)">- ${m.task}</span>
                      <span class="pill ${Q(v)}" style="font-size:9px;padding:1px 5px;margin-left:5px;flex-shrink:0">${v}</span>
                    </div>
                  `,a+=`
                    <div class="gantt-row" style="min-height:34px">
                      <div class="gantt-cells" style="height:34px">
                        ${[0,1,2,3,4,5,6,7].map(f=>`<div class="gantt-cell${f===1?" cur-w":""}"></div>`).join("")}
                        <div class="gantt-bar" style="left:${n(m.s)};width:${i(m.e-m.s)};background:${m.col}" onclick="openTimelineItemInfo('${m.id}')">
                          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.txt}</span>
                          <span class="gantt-bar-edit-btn" onclick="event.stopPropagation();openEditTimelineModal('${m.id}')" title="Edit schedule dates"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg></span>
                        </div>
                      </div>
                    </div>
                  `}))});const s=document.getElementById("gantt-fixed-labels"),u=document.getElementById("gantt-body");if(!s||!u)return;s.innerHTML=o,u.innerHTML=a,u.style.position="relative";const d=(9/56*100).toFixed(2),l=document.createElement("div");l.className="today-line",l.style.left=`${d}%`;const c=document.createElement("div");c.className="today-lbl",c.textContent="Today",l.appendChild(c),u.appendChild(l),ce()}function ce(){const e=document.querySelectorAll("#gantt-fixed-labels .gantt-fixed-row"),t=document.querySelectorAll("#gantt-body .gantt-row"),n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const o=Math.max(e[i].offsetHeight,t[i].offsetHeight,34);e[i].style.minHeight=o+"px",t[i].style.minHeight=o+"px"}}function Be(e){w[e]&&(w[e].open=!w[e].open,I())}function Ie(){Object.values(w).forEach(e=>e.open=!1),I(),x("Collapsed all timeline modules")}function Se(){Object.values(w).forEach(e=>e.open=!0),I(),x("Expanded all timeline modules")}function K(e){const t=document.getElementById("add-tl-lesson-select");if(!t)return;if(e==="__NEW_MOD__"){t.innerHTML='<option value="__NEW__">+ Create / Type Custom Lesson Title</option>';return}const n=new Set;w[e]&&w[e].items&&w[e].items.forEach(o=>{o.lesson&&n.add(o.lesson)}),h[e]&&h[e].lessons&&h[e].lessons.forEach(o=>{o.title&&n.add(o.title)});let i='<option value="">-- Select an existing Task/Lesson Title --</option>';n.forEach(o=>{i+=`<option value="${y(o)}">${y(o)}</option>`}),i+='<option value="__NEW__">+ Create / Type Custom Lesson Title</option>',t.innerHTML=i}function ke(){const e=document.getElementById("add-tl-mod"),t=e?e.value:"m3",n=document.getElementById("add-tl-new-mod-row"),i=document.getElementById("add-tl-new-mod-name");if(t==="__NEW_MOD__"){n&&(n.style.display="block");const o=Object.keys(h).length;i&&(i.placeholder=`Module ${o+1}`),i&&!i.value&&(i.value=`Module ${o+1}`),i&&setTimeout(()=>i.focus(),60)}else n&&(n.style.display="none");K(t),V()}function Ae(){const e=document.getElementById("add-tl-lesson-select"),t=document.getElementById("add-tl-title"),n=document.getElementById("add-tl-new-lesson-row"),i=document.getElementById("add-tl-new-lesson-name");!e||!t||(e.value&&e.value!=="__NEW__"?(t.value=e.value,n&&(n.style.display="none")):e.value==="__NEW__"?(n&&(n.style.display="block"),i&&(i.value="",setTimeout(()=>i.focus(),60)),t.value=""):n&&(n.style.display="none"),V())}function Ce(){const e=document.getElementById("add-tl-new-lesson-name"),t=document.getElementById("add-tl-title");e&&t&&(t.value=e.value),V()}function Te(){const e=document.getElementById("add-tl-start"),t=document.getElementById("add-tl-start-err");if(!e||!t)return;const n=new Date("2026-09-01T00:00:00"),i=new Date(e.value+"T00:00:00");e.value&&i<n?(t.style.display="block",t.textContent="Start date cannot be earlier than the project start date (Sep 1, 2026).",e.style.borderColor="var(--danger)"):(t.style.display="none",e.style.borderColor="")}function V(){var a;const e=document.getElementById("add-tl-mod"),t=e?e.value==="__NEW_MOD__"?"__new__":e.value:"m3",n=document.getElementById("add-tl-title")?document.getElementById("add-tl-title").value.trim():"",i=document.getElementById("add-tl-atomic-preview");if(!i)return;if(!n){i.style.display="none";return}const o=t==="__new__"?[]:(((a=w[t])==null?void 0:a.items)||[]).filter(s=>s.lesson.toLowerCase()===n.toLowerCase());o.length>0?(i.style.display="block",i.innerHTML=`
              <div style="font-size:11.5px;color:var(--primary);background:var(--primary-subtle);border:1px solid var(--primary-border);border-radius:6px;padding:8px 11px;margin-top:7px">
                <div style="font-weight:700;margin-bottom:4px">Atomic Progress Tracking: ${o.length} event${o.length>1?"s":""} already scheduled for "${y(n)}":</div>
                <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:4px">
                  ${o.map(s=>`<span class="pill" style="font-size:10px;background:${s.col}20;color:${s.col};border:1px solid ${s.col}40"><b>${s.task}</b> (${s.sStr.slice(5)} to ${s.eStr.slice(5)})</span>`).join("")}
                </div>
                <div style="font-size:10.5px;color:var(--text-3);margin-top:4px">Adding this event creates another atomic phase row for granular progress tracking.</div>
              </div>
              `):(i.style.display="block",i.innerHTML=`
              <div style="font-size:11.5px;color:var(--text-2);background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:7px 10px;margin-top:7px">
                <b>New Task/Lesson:</b> Starting initial atomic phase for <b>"${y(n)}"</b>.
              </div>
              `)}function ue(e){const t=e||(document.getElementById("add-tl-mod")?document.getElementById("add-tl-mod").value:"m3");document.getElementById("add-tl-mod")&&(document.getElementById("add-tl-mod").value=t),K(t),V(),document.getElementById("modal-add-timeline").classList.add("open"),setTimeout(()=>{const n=document.getElementById("add-tl-title");n&&n.focus()},80)}function W(){document.getElementById("modal-add-timeline").classList.remove("open")}function Le(e){e.target===document.getElementById("modal-add-timeline")&&W()}function Re(){var v;let e=document.getElementById("add-tl-mod").value;const t=document.getElementById("add-tl-title").value.trim(),n=document.getElementById("add-tl-phase").value,i=document.getElementById("add-tl-owner").value,o=document.getElementById("add-tl-start").value,a=document.getElementById("add-tl-end").value;if(e==="__NEW_MOD__"){const f=document.getElementById("add-tl-new-mod-name"),M=(f?f.value.trim():"")||`Module ${Object.keys(h).length+1}`,$=Object.keys(h).length+1;e="m"+$,h[e]={id:e,num:`Module ${$}`,title:M.startsWith("Module")?M:`Module ${$} - ${M}`,shortTitle:`Module ${$}`,status:"Planned",statusPill:"p-none",progress:0,progressCol:"var(--text-3)",phase:"Storyboard",target:"TBD",team:[{name:"Ankit Verma",role:"PRA",color:"#6d6cf0",init:"AV"},{name:"Ravi Kumar",role:"Editor",color:"#ea7c1e",init:"RK"}],desc:"New module.",lessons:[]},w[e]={id:e,num:`M${$}`,name:`M${$} - ${M.replace(/^Module \d+\s*-?\s*/,"")}`,open:!0,progress:0,status:"Planned",statusPill:"p-none",staged:"Not started",stagedBadge:"Not Started",stagedPill:"p-none",dateRange:"TBD",spanStart:24,spanEnd:44,finalized:[],changeHistory:[],items:[]};const L=document.getElementById("add-tl-mod");if(L){const P=document.createElement("option");P.value=e,P.textContent=h[e].title,L.insertBefore(P,L.querySelector('option[value="__NEW_MOD__"]')),L.value=e}document.getElementById("add-tl-new-mod-row")&&(document.getElementById("add-tl-new-mod-row").style.display="none"),x(`Created new module: ${h[e].title}`,"success")}if(!t){alert("Please enter a task or milestone title."),document.getElementById("add-tl-title").focus();return}if(!o||!a){alert("Please select both start and end dates.");return}const s=new Date("2026-09-01T00:00:00");if(new Date(o+"T00:00:00")<s){alert("Start date cannot be earlier than the project start date (Sep 1, 2026)."),document.getElementById("add-tl-start").focus();return}const d=C(o),l=Math.max(d+1,C(a)),c={Storyboard:"#6d6cf0",Shoot:"#ea7c1e",Editing:"#0891b2",Review:"#7c3aed",QC:"#059669",Publishing:"#15803d"},r=document.getElementById("add-tl-contents")?document.getElementById("add-tl-contents").value.trim():"",g=`${((v=b[p])==null?void 0:v.name)||"Malhar"} (${p})`,m={id:"tl-"+Date.now(),modId:e,lesson:t,task:n,s:d,e:l,sStr:o,eStr:a,col:c[n]||"#0891b2",txt:n,status:"In Progress",owner:i,contents:r||`${n} deliverable package for ${t}`,createdBy:`${g} on 10 Sep 2026`,lastEdited:null,lastEditReason:null,editHistory:[]};w[e]&&(w[e].items.push(m),w[e].open=!0,w[e].spanStart=Math.min(w[e].spanStart,d),w[e].spanEnd=Math.max(w[e].spanEnd,l)),W(),document.getElementById("add-tl-title").value="",document.getElementById("add-tl-contents")&&(document.getElementById("add-tl-contents").value=""),I(),x(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5" /><path d="M5 1v4M11 1v4M1 7h14" /></svg> Added "${t}" (${n}) to schedule`,"success")}function G(e){const t=z(e);if(!t)return;const{item:n,mod:i}=t;F(n);const o=new Date(n.sStr+"T00:00:00"),a=new Date(n.eStr+"T00:00:00"),s=Math.max(1,Math.round((a-o)/(1e3*60*60*24))+1);document.getElementById("tl-info-title").innerHTML=`<span>📌</span> ${n.lesson}`,document.getElementById("tl-info-sub").textContent=`${i.name} · Phase: ${n.task}`;const u=document.getElementById("tl-info-body");if(!u)return;const d=(i.items||[]).filter(v=>v.lesson.toLowerCase()===n.lesson.toLowerCase()).sort((v,f)=>v.s-f.s);let l="";d.length>1&&(l=`
      <!-- Atomic Phase Lifecycle Pipeline -->
      <div class="drawer-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <div class="drawer-section-title" style="margin-bottom:0">Atomic Task Lifecycle (${d.length} Events Scheduled)</div>
          <span class="pill p-complete" style="font-size:9.5px">Atomic Tracking</span>
        </div>
        <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
          <div style="display:flex;align-items:center;gap:6px;overflow-x:auto;padding-bottom:4px">
            ${d.map((v,f)=>`
              <div style="flex-shrink:0;background:${v.id===n.id?"var(--surface)":"var(--surface-2)"};border:1.5px solid ${v.id===n.id?v.col:"var(--border)"};border-radius:7px;padding:7px 10px;min-width:125px;cursor:pointer" onclick="openTimelineItemInfo('${v.id}')" title="Click to inspect this phase event">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px">
                  <span style="font-size:9.5px;color:var(--text-3);font-weight:700;text-transform:uppercase">Phase ${f+1}</span>
                  ${v.id===n.id?'<span style="font-size:9px;background:var(--primary);color:white;padding:0 4px;border-radius:4px">Viewing</span>':""}
                </div>
                <div style="font-weight:700;font-size:12px;color:${v.col}">${y(v.task)}</div>
                <div style="font-size:10.5px;color:var(--text-2);margin-top:3px"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> ${v.sStr.slice(5)} – ${v.eStr.slice(5)}</div>
                <div style="font-size:10px;color:var(--text-3);margin-top:2px">👤 ${y(v.owner||"Unassigned")}</div>
              </div>
              ${f<d.length-1?'<span style="color:var(--text-3);font-size:14px;flex-shrink:0">➔</span>':""}
            `).join("")}
          </div>
        </div>
      </div>
    `);let c="";n.editHistory&&n.editHistory.length>0?c=n.editHistory.map(v=>`
      <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;margin-bottom:7px;font-size:11.5px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <b style="color:var(--text)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> ${v.oldDates} ➔ ${v.newDates}</b>
          <span style="color:var(--text-3);font-size:10.5px">${v.date}</span>
        </div>
        <div style="color:var(--text-2);margin-bottom:4px"><b>Reason:</b> ${y(v.reason)}</div>
        <div style="font-size:10.5px;color:var(--text-3)">Edited by ${v.by}</div>
      </div>
    `).join(""):n.lastEdited?c=`
      <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;margin-bottom:7px;font-size:11.5px">
        <div style="color:var(--text-2);margin-bottom:4px"><b>Reason:</b> ${y(n.lastEditReason||"Schedule adjusted")}</div>
        <div style="font-size:10.5px;color:var(--text-3)">${n.lastEdited}</div>
      </div>
    `:c=`
      <div style="font-size:12px;color:var(--text-3);font-style:italic;padding:6px 0">
        ✨ Initial schedule - no date shifts or revisions made yet.
      </div>
    `,u.innerHTML=`
              <!-- Top Schedule Card -->
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:9px;padding:12px 14px;margin-bottom:14px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                  <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--text-3)">Schedule Timeline</span>
                  <span class="pill ${Q(n.status)}" style="font-weight:700">${n.overdue?"⚠ ":""}${n.status}</span>
                </div>

                <div class="grid-2" style="gap:10px;margin-bottom:10px">
                  <div style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:8px 11px">
                    <div style="font-size:10.5px;color:var(--text-3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">Start Date</div>
                    <div style="font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px">
                      <span><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5" /><path d="M5 1v4M11 1v4M1 7h14" /></svg></span> ${n.sStr}
                    </div>
                  </div>
                  <div style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:8px 11px">
                    <div style="font-size:10.5px;color:var(--text-3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">End Date</div>
                    <div style="font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px">
                      <span>🏁</span> ${n.eStr}
                    </div>
                  </div>
                </div>

                <div style="display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--text-2);padding-top:2px">
                  <span><b>Duration:</b> ${s} day${s>1?"s":""}</span>
                  <span><b>Assignee:</b> 👤 ${n.owner||"Unassigned"}</span>
                </div>
              </div>

              <div class="drawer-section">
                <div class="drawer-section-title">Event Status</div>
                <div style="display:flex;gap:8px;align-items:center">
                  <select class="form-input" id="timeline-event-status" style="margin:0;flex:1">
                    <option value="In Progress" ${n.status==="In Progress"?"selected":""}>In Progress</option>
                    <option value="Completed" ${n.status==="Completed"?"selected":""}>Completed</option>
                  </select>
                  <button class="btn btn-primary btn-sm" onclick="updateTimelineItemStatus('${n.id}')">Update Status</button>
                </div>
                ${n.overdue?'<div style="font-size:11.5px;color:var(--danger);margin-top:7px">⚠ The end date has passed and this event has not been marked completed. “Not updated yet” is applied automatically.</div>':""}
              </div>

              ${l}

              <!-- Contents & Scope -->
              <div class="drawer-section">
                <div class="drawer-section-title">Deliverable Contents &amp; Scope</div>
                <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:12px;line-height:1.5;color:var(--text)">
                  ${y(n.contents||"Standard lesson deliverable as per course syllabus.")}
                </div>
              </div>

              <!-- Created By -->
              <div class="drawer-section">
                <div class="drawer-section-title">Created By</div>
                <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;font-size:12px">
                  <div style="display:flex;align-items:center;gap:7px;color:var(--text)">
                    <span>👤</span>
                    <span><b>Created by:</b> ${n.createdBy||"Malhar (Manager) on 25 Aug 2026"}</span>
                  </div>
                </div>
              </div>

              <!-- Last Edited By & Reason -->
              <div class="drawer-section" style="margin-bottom:0">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <div class="drawer-section-title" style="margin-bottom:0">Last Edited &amp; Reason Log</div>
                  ${n.lastEdited?'<span class="pill p-warning" style="font-size:9.5px">Modified</span>':'<span class="pill p-complete" style="font-size:9.5px">Original</span>'}
                </div>
                ${c}
              </div>
              `;const r=()=>{J(),me(n.id)},g=document.getElementById("tl-info-edit-head-btn");g&&(g.onclick=r);const m=document.getElementById("tl-info-edit-btn");m&&(m.onclick=r),document.getElementById("modal-timeline-item-info").classList.add("open")}function J(){const e=document.getElementById("modal-timeline-item-info");e&&e.classList.remove("open")}function De(e){e.target===document.getElementById("modal-timeline-item-info")&&J()}function Pe(e){const t=z(e),n=document.getElementById("timeline-event-status");if(!t||!n)return;const{item:i}=t;i.status=n.value,i.overdue=!1,I(),G(e),x("Timeline event status updated to "+i.status+".","success")}function z(e){for(const t of Object.keys(w)){const n=w[t].items.find(i=>i.id===e);if(n)return{item:n,mod:w[t]}}return null}function me(e){const t=z(e);if(!t)return;const{item:n,mod:i}=t;document.getElementById("edit-tl-item-id").value=n.id,document.getElementById("edit-tl-sub").textContent=`${i.name} · ${n.lesson} (${n.task})`,document.getElementById("edit-tl-start").value=n.sStr||"2026-09-08",document.getElementById("edit-tl-end").value=n.eStr||"2026-09-11",document.getElementById("edit-tl-reason").value="",document.getElementById("modal-edit-timeline").classList.add("open"),setTimeout(()=>{const o=document.getElementById("edit-tl-reason");o&&o.focus()},80)}function Y(){document.getElementById("modal-edit-timeline").classList.remove("open")}function Ne(e){e.target===document.getElementById("modal-edit-timeline")&&Y()}function Ve(e){const t=document.getElementById("edit-tl-reason");t&&(t.value=e,t.focus())}function ze(){var r;const e=document.getElementById("edit-tl-item-id").value,t=document.getElementById("edit-tl-start").value,n=document.getElementById("edit-tl-end").value,i=document.getElementById("edit-tl-reason").value.trim();if(!i){alert("Please provide a reason for changing the schedule. This is required for the timeline audit trail."),document.getElementById("edit-tl-reason").focus();return}const o=z(e);if(!o)return;const{item:a,mod:s}=o,u=`${a.sStr} – ${a.eStr}`,d=`${t} – ${n}`,l=`${((r=b[p])==null?void 0:r.name)||"Malhar"} (${p})`;a.editHistory||(a.editHistory=[]),a.editHistory.unshift({date:"10 Sep 2026",by:l,oldDates:u,newDates:d,reason:i}),a.lastEdited=`${l} on 10 Sep 2026`,a.lastEditReason=i,s.changeHistory.unshift({date:"10 Sep",user:l,oldDates:u,newDates:d,reason:i,task:`${a.lesson} (${a.task})`}),a.sStr=t,a.eStr=n,a.s=C(t),a.e=Math.max(a.s+1,C(n)),a.e>9&&a.txt.includes("Overdue")&&(a.txt=a.task,a.col="#7c3aed",a.overdue=!1),Y(),I(),x('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5" /><path d="M5 8l2.5 2.5L11 6" /></svg> Schedule updated & reason logged to audit trail',"success");const c=document.getElementById("modal-timeline-item-info");c&&c.classList.contains("open")&&G(e)}function He(e){const t=w[e];if(!t)return;document.getElementById("tl-detail-title").innerHTML=`<span><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1l6 3v8l-6 3-6-3V4l6-3z" /><path d="M8 1v14M2 4l6 3 6-3" /></svg></span> ${t.name}`,document.getElementById("tl-detail-sub").textContent=`Status: ${t.status} · Schedule: ${t.dateRange}`;const n=document.getElementById("tl-detail-body");if(!n)return;const i=t.finalized.length>0?t.finalized.map(s=>`
              <div class="final-item">
                <div style="font-size:14px;color:var(--success);line-height:1">&#10003;</div>
                <div style="flex:1;min-width:0">
                  <div style="font-weight:600;color:var(--text)">${s.item}</div>
                  <div style="font-size:11px;color:var(--text-3)">Completed on ${s.date} · Sign-off: ${s.by}</div>
                </div>
                <span class="pill p-complete" style="font-size:9.5px">Finalised</span>
              </div>
              `).join(""):'<div style="font-size:12px;color:var(--text-3);font-style:italic;padding:8px 0">No deliverables finalised yet for this module.</div>',o=t.changeHistory.length>0?t.changeHistory.map(s=>`
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;margin-bottom:7px;font-size:11.5px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
                  <b style="color:var(--text)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5" /><path d="M5 1v4M11 1v4M1 7h14" /></svg> ${s.oldDates} ➔ ${s.newDates}</b>
                  <span style="color:var(--text-3);font-size:10.5px">${s.date}</span>
                </div>
                <div style="color:var(--text-2);margin-bottom:3px"><b>Reason:</b> ${y(s.reason)}</div>
                <div style="font-size:10.5px;color:var(--text-3)">Logged by ${s.user}${s.task?" · "+s.task:""}</div>
              </div>
              `).join(""):'<div style="font-size:12px;color:var(--text-3);font-style:italic;padding:8px 0">No timeline revisions logged for this module.</div>',a=t.items.length>0?t.items.map(s=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 10px;background:var(--surface-2);border:1px solid var(--border);border-radius:7px;margin-bottom:5px;font-size:12px">
                <div style="cursor:pointer;flex:1" onclick="closeTimelineDetailModal();openTimelineItemInfo('${s.id}')" title="Click to view details &amp; history">
                  <span style="font-weight:600;color:var(--text)">${s.lesson}</span>
                  <span style="color:var(--text-3);margin-left:6px">${s.task}</span>
                  <div style="font-size:10.5px;color:var(--text-3);margin-top:2px">Dates: ${s.sStr} to ${s.eStr} · Assignee: ${s.owner}</div>
                </div>
                <div style="display:flex;gap:5px">
                  <button class="btn btn-ghost btn-xs" onclick="closeTimelineDetailModal();openTimelineItemInfo('${s.id}')" title="View details">ℹ️ Info</button>
                  <button class="btn btn-ghost btn-xs" onclick="closeTimelineDetailModal();openEditTimelineModal('${s.id}')" title="Edit dates"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z" /></svg> Edit</button>
                </div>
              </div>
              `).join(""):'<div style="font-size:12px;color:var(--text-3);font-style:italic">No scheduled items.</div>';n.innerHTML=`
              <!-- Progress Header Card -->
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:9px;padding:12px 14px;margin-bottom:16px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <span style="font-size:12px;font-weight:700;color:var(--text)">Overall Module Completion</span>
                  <span class="pill ${t.statusPill}" style="font-weight:700">${t.progress}% · ${t.status}</span>
                </div>
                <div class="ov-progress-bar" style="margin:6px 0 8px">
                  <div class="ov-progress-fill" style="width:${t.progress}%;background:${t.progress===100?"var(--success)":"var(--accent)"}"></div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--text-2);margin-top:4px">
                  <span>${t.stagedBadge==="Live"?'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1s4 1 4 7c0 2-1 4-4 6C5 12 4 10 4 8c0-6 4-7 4-7z"/><circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M5 12l-3 3M11 12l3 3"/></svg>':"⏳"}</span>
                  <span><b>LMS Status:</b> <span class="pill ${t.stagedPill}" style="font-size:9.5px">${t.stagedBadge}</span> ${t.staged}</span>
                </div>
              </div>

              <!-- Finalised Items -->
              <div class="drawer-section">
                <div class="drawer-section-title">Finalised Deliverables &amp; Sign-offs</div>
                ${i}
              </div>

              <!-- Scheduled Work Items -->
              <div class="drawer-section">
                <div class="drawer-section-title">Scheduled Timeline Milestones</div>
                ${a}
              </div>

              <!-- Change Reason History -->
              <div class="drawer-section" style="margin-bottom:0">
                <div class="drawer-section-title">Timeline Change History &amp; Reason Log</div>
                ${o}
              </div>
  `,document.getElementById("tl-detail-add-btn").onclick=()=>{X(),ue(e)},document.getElementById("modal-timeline-detail").classList.add("open")}function X(){document.getElementById("modal-timeline-detail").classList.remove("open")}function Oe(e){e.target===document.getElementById("modal-timeline-detail")&&X()}function pe(){document.querySelectorAll(".tree-children").forEach(e=>e.classList.remove("open")),document.querySelectorAll(".tree-chev").forEach(e=>e.classList.remove("open"))}function qe(){document.querySelectorAll(".tree-children").forEach(e=>e.classList.add("open")),document.querySelectorAll(".tree-chev").forEach(e=>e.classList.add("open"))}function ve(e,t){t&&t.stopPropagation();const n=document.getElementById("ch-"+e),i=document.getElementById("chev-"+e);if(!n)return;const o=n.classList.contains("open");n.classList.toggle("open",!o),i&&i.classList.toggle("open",!o)}function je(e){const t=document.getElementById("ch-"+e),n=document.getElementById("chev-"+e);t&&!t.classList.contains("open")&&(t.classList.add("open"),n&&n.classList.add("open")),O(e)}function q(e){pe();const t=document.getElementById("ch-"+e),n=document.getElementById("chev-"+e);t&&t.classList.add("open"),n&&n.classList.add("open"),N("work"),O(e)}function Ue(e){N("work"),j(e)}function _e(e){ve(e)}function Fe(){if(p!=="Manager"){x("ℹ️  Only managers can create projects");return}document.getElementById("modal-back").classList.add("open"),setTimeout(()=>document.getElementById("new-name").focus(),80)}function Qe(e){e&&document.getElementById("add-les-mod")&&(document.getElementById("add-les-mod").value=e),document.getElementById("modal-add-lesson").classList.add("open"),setTimeout(()=>{const t=document.getElementById("add-les-title");t&&t.focus()},80)}function Z(){document.getElementById("modal-add-lesson").classList.remove("open")}function Ke(e){e.target===document.getElementById("modal-add-lesson")&&Z()}function We(e,t,n){var r,g,m;if(!n)return;let i=h[e];if(!i){for(const v in h)if(h[v].lessons&&h[v].lessons.some(f=>f.id===t)){i=h[v],e=v;break}}if(!i)return;const o=i.lessons.find(v=>v.id===t);if(!o)return;const a=o.owner;o.owner=n;const s={"Ankit Verma":"#0891b2","Ravi Kumar":"#ea7c1e","Stuti Garg":"var(--success)","Priya S":"var(--accent)",Malhar:"var(--accent)",Unassigned:"#94a3b8"};o.ownerColor=s[n]||"#94a3b8",o.notes||(o.notes=[]);const u=`${((r=b[p])==null?void 0:r.name)||"Malhar"} (${p})`,d=v=>v==="Unassigned"?"-":v.split(" ").map(f=>f[0]).join(""),l="n-"+Date.now();if(o.notes.push({id:l,author:u,role:p,color:((g=b[p])==null?void 0:g.color)||"var(--accent)",init:d(((m=b[p])==null?void 0:m.name)||"Malhar"),time:"Just now",text:`👤 Assigned owner to "${n}" (previously: ${a}).`,isAudit:!0}),typeof w<"u"&&Array.isArray(w)){const v=w.find(f=>f.modId===e&&f.title&&f.title.toLowerCase().includes(o.title.toLowerCase()));v&&(v.owner=n)}renderWorkItemsTree();const c=document.getElementById("work-detail");c&&c.classList.contains("show")?k(i,o):O(e),x(`👤 ${o.title}: Assigned to ${n}`,"success")}function Ge(){var f,M;const e=document.getElementById("add-les-mod").value,t=document.getElementById("add-les-title").value.trim(),n=document.getElementById("add-les-item-title").value.trim()||"Deliverable Item",i=document.getElementById("add-les-phase").value,o=document.getElementById("add-les-status").value,a=document.getElementById("add-les-owner").value,s=document.getElementById("add-les-due").value,u=document.getElementById("add-les-desc").value.trim()||"Standard lesson deliverable scope.";if(!t){alert("Please enter a lesson title."),document.getElementById("add-les-title").focus();return}const d=s?new Date(s+"T00:00:00"):new Date,c=s?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()]} ${d.getDate()}`:"-",r=`${e}l${Date.now().toString().slice(-4)}`,g={"Ravi Kumar (Editor)":"#ea7c1e","Ankit Verma (PRA)":"#6d6cf0","Stuti Garg (QC)":"var(--success)","Malhar (Manager)":"var(--accent)"},m=`${((f=b[p])==null?void 0:f.name)||"Malhar"} (${p})`,v={id:r,title:t,fullTitle:`${e.toUpperCase()} · ${t}`,itemTitle:n,phase:i,status:o,version:"V1",owner:a.split(" ")[0]+" "+(a.split(" ")[1]||""),ownerColor:g[a]||"#6d6cf0",due:c,desc:u,notes:[{id:"note-"+Date.now(),author:m,role:p,text:`✨ Lesson created in ${e.toUpperCase()} with status "${o}" (${i})`,time:B(),color:"var(--accent)",init:T(((M=b[p])==null?void 0:M.name)||"Malhar"),isAudit:!0}]};if(h[e]&&h[e].lessons.push(v),w[e]){const $=typeof C=="function"?C(s||"2026-09-20"):15;w[e].items.push({id:"tl-"+Date.now(),modId:e,lesson:t,task:i,s:$,e:$+5,sStr:s||"2026-09-20",eStr:"2026-09-25",col:i==="Shoot"?"#ea7c1e":i==="Editing"?"#0891b2":i==="Review"?"#7c3aed":"#6d6cf0",txt:i,status:i,owner:a.split(" ")[0]+" "+(a.split(" ")[1]||""),contents:u,createdBy:`${m} on 10 Sep 2026`,editHistory:[]}),typeof I=="function"&&I()}Z(),document.getElementById("add-les-title").value="",document.getElementById("add-les-item-title").value="",document.getElementById("add-les-desc").value="",j(r),x(`✨ Created "${t}" under ${e.toUpperCase()}`,"success")}function Je(){document.getElementById("modal-add-module").classList.add("open"),setTimeout(()=>{const e=document.getElementById("add-mod-title");e&&e.focus()},80)}function ee(){document.getElementById("modal-add-module").classList.remove("open")}function Ye(e){e.target===document.getElementById("modal-add-module")&&ee()}function Xe(){const e=document.getElementById("add-mod-title").value.trim(),t=document.getElementById("add-mod-phase").value,n=document.getElementById("add-mod-target").value.trim()||"Oct 2026",i=document.getElementById("add-mod-desc").value.trim()||"New module syllabus scope.";if(!e){alert("Please enter a module title."),document.getElementById("add-mod-title").focus();return}const o=Object.keys(h).length+1,a="m"+o;h[a]={id:a,num:`Module ${o}`,title:e.startsWith("Module")?e:`Module ${o} - ${e}`,shortTitle:`Module ${o}`,status:"Planned",statusPill:"p-none",progress:0,progressCol:"var(--text-3)",phase:t,target:n,team:[{name:"Ankit Verma",role:"PRA",color:"#6d6cf0",init:"AV"},{name:"Ravi Kumar",role:"Editor",color:"#ea7c1e",init:"RK"}],desc:i,lessons:[]},w[a]={id:a,num:`M${o}`,name:`M${o} - ${e.replace(/^Module \d+\s*-\s*/,"")}`,open:!0,progress:0,status:"Planned",statusPill:"p-none",staged:"Not started",stagedBadge:"Not Started",stagedPill:"p-none",dateRange:"Sep 25 – Oct 15",spanStart:24,spanEnd:44,finalized:[],changeHistory:[],items:[]},ee(),document.getElementById("add-mod-title").value="",document.getElementById("add-mod-desc").value="",typeof I=="function"&&I(),O(a),x(`<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1l6 3v8l-6 3-6-3V4l6-3z"/><path d="M8 1v14M2 4l6 3 6-3"/></svg> Created "${h[a].title}"`,"success")}function Ze(e,t){const n=h[e],i=n?n.lessons.find(o=>o.id===t):null;i&&(document.getElementById("change-status-mod-id").value=e,document.getElementById("change-status-les-id").value=t,document.getElementById("change-status-phase").value=i.phase,document.getElementById("change-status-val").value=i.status,document.getElementById("change-status-sub").textContent=`${n.num} · ${i.title}`,document.getElementById("modal-change-status").classList.add("open"))}function te(){document.getElementById("modal-change-status").classList.remove("open")}function et(e){e.target===document.getElementById("modal-change-status")&&te()}function tt(){var c,r;const e=document.getElementById("change-status-mod-id").value,t=document.getElementById("change-status-les-id").value,n=document.getElementById("change-status-phase").value,i=document.getElementById("change-status-val").value,o=document.getElementById("change-status-note").value.trim(),a=h[e],s=a?a.lessons.find(g=>g.id===t):null;if(!s)return;const u=s.status,d=s.phase;s.status=i,s.phase=n;const l=`${((c=b[p])==null?void 0:c.name)||"Malhar"} (${p})`;s.notes=s.notes||[],s.notes.push({id:"note-"+Date.now(),author:l,role:p,text:`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8a6 6 0 1110.4-4.1M2 4v4h4"/></svg> Status updated: ${d} (${u}) ➔ ${n} (${i})`+(o?` - Remark: ${o}`:""),time:B(),color:"var(--accent)",init:T(((r=b[p])==null?void 0:r.name)||"Malhar"),isAudit:!0}),te(),document.getElementById("change-status-note").value="",k(a,s),x(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8a6 6 0 1110.4-4.1M2 4v4h4"/></svg> Updated status for "${s.title}" to ${i}`,"success")}function nt(e,t){const n=h[e],i=n?n.lessons.find(o=>o.id===t):null;i&&(document.getElementById("set-due-mod-id").value=e,document.getElementById("set-due-les-id").value=t,document.getElementById("set-due-sub").textContent=`${n.num} · ${i.title} (Current Due: ${i.due})`,document.getElementById("set-due-reason").value="",document.getElementById("modal-set-due-date").classList.add("open"))}function ne(){document.getElementById("modal-set-due-date").classList.remove("open")}function it(e){e.target===document.getElementById("modal-set-due-date")&&ne()}function ot(e){const t=document.getElementById("set-due-reason");t&&(t.value=e)}function st(){var r,g;const e=document.getElementById("set-due-mod-id").value,t=document.getElementById("set-due-les-id").value,n=document.getElementById("set-due-date-val").value,i=document.getElementById("set-due-reason").value.trim();if(!n){alert("Please select a new target due date.");return}if(!i){alert("Please specify a reason for changing the due date (required for audit log)."),document.getElementById("set-due-reason").focus();return}const o=new Date(n+"T00:00:00"),s=`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o.getMonth()]} ${o.getDate()}`,u=h[e],d=u?u.lessons.find(m=>m.id===t):null;if(!d)return;const l=d.due;d.due=s;const c=`${((r=b[p])==null?void 0:r.name)||"Malhar"} (${p})`;d.notes=d.notes||[],d.notes.push({id:"note-"+Date.now(),author:c,role:p,text:`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> Due date modified: ${l} ➔ ${s} - Reason: ${i}`,time:B(),color:"var(--warning)",init:T(((g=b[p])==null?void 0:g.name)||"Malhar"),isAudit:!0}),ne(),k(u,d),x(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> Updated due date for "${d.title}" to ${s}`,"success")}function B(){const e=new Date,t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let n=e.getHours();const i=e.getMinutes().toString().padStart(2,"0"),o=n>=12?"PM":"AM";return n=n%12||12,`${e.getDate()} ${t[e.getMonth()]} · ${n}:${i} ${o}`}function T(e){if(!e)return"PM";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function at(e,t){var d;const n=h[e],i=n?n.lessons.find(l=>l.id===t):null;if(!i)return;const o=document.getElementById(`cmt-input-${t}`);if(!o)return;const a=o.value.trim();if(!a){alert("Please enter note text before posting."),o.focus();return}const s={PRA:"#6d6cf0",Editor:"#ea7c1e",QC:"var(--success)",Manager:"var(--accent)"},u=((d=b[p])==null?void 0:d.name)||"Malhar";i.notes=i.notes||[],i.notes.push({id:"note-"+Date.now(),author:u,role:p,text:a,time:B(),color:s[p]||"var(--accent)",init:T(u),edited:!1}),o.value="",k(n,i),setTimeout(()=>{const l=document.getElementById(`notes-feed-${t}`);l&&(l.scrollTop=l.scrollHeight);const c=document.getElementById(`notes-av-${t}`);if(c){const r=b[p];r&&(c.textContent=r.initials,c.style.background=r.color)}},30),x('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 10a1 1 0 01-1 1H5l-3 3V3a1 1 0 011-1h10a1 1 0 011 1v7z"/></svg> Note added',"success")}function dt(e,t,n){const i=h[e],o=i?i.lessons.find(s=>s.id===t):null,a=o?o.notes.find(s=>(s.id||"")===n):null;a&&(document.getElementById("edit-note-mod-id").value=e,document.getElementById("edit-note-les-id").value=t,document.getElementById("edit-note-id").value=n,document.getElementById("edit-note-text").value=a.text,document.getElementById("modal-edit-lesson-note").classList.add("open"))}function ie(){document.getElementById("modal-edit-lesson-note").classList.remove("open")}function lt(e){e.target===document.getElementById("modal-edit-lesson-note")&&ie()}function rt(){const e=document.getElementById("edit-note-mod-id").value,t=document.getElementById("edit-note-les-id").value,n=document.getElementById("edit-note-id").value,i=document.getElementById("edit-note-text").value.trim();if(!i){alert("Note text cannot be empty.");return}const o=h[e],a=o?o.lessons.find(u=>u.id===t):null,s=a?a.notes.find(u=>(u.id||"")===n):null;s&&(s.text=i,s.edited=!0,s.editedTime=B(),ie(),k(o,a),x('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg> Note updated',"success"))}function ct(e,t,n){var d,l;const i=h[e],o=i?i.lessons.find(c=>c.id===t):null;if(!o||!o.notes)return;const a=o.notes.findIndex(c=>(c.id||"")===n);if(a===-1)return;const s=o.notes[a];if(!confirm(`Are you sure you want to delete this note by ${s.author}?`))return;o.notes.splice(a,1);const u=`${((d=b[p])==null?void 0:d.name)||"Malhar"} (${p})`;o.notes.push({id:"note-"+Date.now(),author:u,role:p,text:`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg> Note by ${s.author} was deleted on ${B()}`,time:B(),color:"var(--danger)",init:T(((l=b[p])==null?void 0:l.name)||"Malhar"),isAudit:!0}),k(i,o),x('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg> Note deleted & tracked in audit log',"info")}function ge(e){if(!e)return null;const t=new Date(e),n=new Date(t);return n.setDate(n.getDate()+5),Math.ceil((n-new Date)/(1e3*60*60*24))}function he(e){if(!e)return"";const t=new Date(e);t.setDate(t.getDate()+5);const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${t.getDate()} ${n[t.getMonth()]}`}let E=[{id:"v1",verTag:"V1",submitter:"Ankit Verma",role:"PRA",time:"10 Sep · 10:42 AM",submittedDate:"2026-09-10",status:"Awaiting Review",statusPill:"p-warning",statusColor:"var(--warning)",moduleId:"m3",batchId:"batch-m3-1",driveName:"QM101 - M3, L4 - Probability Distributions - V1",driveUrl:"drive.google.com/drive/folders/1aBcXyZ… (view access given)",note:"V1 complete. New animated examples for Normal distribution in Section 2 (timestamp 4:23–6:45). Poisson example extended with real-world context. Please review transitions between sections and confirm all diagrams are clear.",attachedFiles:[{icon:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 1h7l3 3v11H3V1z"/><path d="M10 1v3h3"/><path d="M5 7h6M5 10h4"/></svg>',name:"script-prob-dist-v1-final.docx",sub:"Script - final draft (14 pages)",action:"Open"},{icon:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="1" width="14" height="11" rx="1.5"/><path d="M5 9V6M8 9V4M11 9V7"/></svg>',name:"slides-prob-dist-v1.pptx",sub:"Slide deck - animated Normal distribution",action:"Open"},{icon:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 1v3M10 1v3M6 4h4M6 7h4"/></svg>',name:"assets-prob-dist-v1.zip",sub:"Graphics & math illustrations archive (24 MB)",action:"Download"}]}],S=[{verTag:"M2-L3 V1",lesson:"Module 2 - L3: Bayes Theorem",submitter:"Ankit Verma",submittedDate:"2026-09-01",reviewedDate:"2026-09-03",outcome:"Approved",outcomeClass:"p-complete",outcomeIcon:"&#10003;",reviewedBy:"Malhar (Manager)",note:"All sections clear. Approved for LMS staging.",driveName:"QM101 - M2, L3 - Bayes Theorem - V1"},{verTag:"M1-L2 V2",lesson:"Module 1 - L2: Descriptive Statistics",submitter:"Ankit Verma",submittedDate:"2026-08-28",reviewedDate:"2026-08-30",outcome:"Approved",outcomeClass:"p-complete",outcomeIcon:"&#10003;",reviewedBy:"Malhar (Manager)",note:"Revised voiceover noted. Approved.",driveName:"QM101 - M1, L2 - Descriptive Statistics - V2"},{verTag:"M3-L2 V1",lesson:"Module 3 - L2: Standard Deviation",submitter:"Ravi Kumar",submittedDate:"2026-08-18",reviewedDate:null,outcome:"Expired",outcomeClass:"p-danger",outcomeIcon:"⏰",reviewedBy:"-",note:"Review window lapsed (5 days). No manager action taken.",driveName:"QM101 - M3, L2 - Standard Deviation - V1"},{verTag:"M1-L4 V1",lesson:"Module 1 - L4: Probability Basics",submitter:"Ankit Verma",submittedDate:"2026-09-05",reviewedDate:"2026-09-06",outcome:"Changes Requested",outcomeClass:"p-review",outcomeIcon:"↺",reviewedBy:"Malhar (Manager)",note:"Transition timing between sections needs fixing. Voiceover audio clipping at 3:45.",driveName:"QM101 - M1, L4 - Probability Basics - V1"}],A="v1";function ye(){const e=new Date,t=E.filter(n=>{if(n.status!=="Awaiting Review"||!n.submittedDate)return!1;const i=new Date(n.submittedDate),o=new Date(i);return o.setDate(o.getDate()+5),e>o});t.forEach(n=>{S.unshift({verTag:n.verTag,lesson:"QM101 - M3, L4 - Probability Distributions",submitter:n.submitter,submittedDate:n.submittedDate,reviewedDate:null,outcome:"Expired",outcomeClass:"p-danger",outcomeIcon:"⏰",reviewedBy:"-",note:"Review window lapsed (5 days). No manager action was taken.",driveName:n.driveName}),n.status="Expired",n.statusPill="p-danger",n.statusColor="var(--danger)"}),t.length>0&&x(`⏰ ${t.length} review(s) expired and moved to History`,"danger")}function ut(e){A=e,D()}function D(){const e=document.getElementById("rev-versions-list"),t=document.getElementById("rev-deliverables-container");if(!e||!t)return;ye();const n=E.filter(r=>r.status==="Awaiting Review"||r.status==="Awaiting PRA Review"),i=E.filter(r=>r.status!=="Awaiting Review"&&r.status!=="Awaiting PRA Review"),o=n.length;let a="";o>0&&(a+=`<div style="font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-3);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:5px">Pending Review <span class="pill p-warning" style="font-size:9px;padding:1px 6px">${o}</span></div>`),n.forEach(r=>{const g=r.id===A,m=ge(r.submittedDate),v=he(r.submittedDate),f=m!==null&&m<=2,M=m!==null&&m<=0,$=M?"var(--danger)":f?"var(--warning)":"var(--success)",L=M?"Overdue":m===1?"1 day left":m!==null?`${m} days left`:"",P=f?"border-left:3px solid var(--danger)":"";a+=`
      <div class="ver-card ${g?"active":""}" onclick="selectReviewVersion('${r.id}')" style="cursor:pointer;margin-bottom:8px;${P}">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
          <div class="ver-card-tag" style="margin-bottom:0">${r.verTag}</div>
          <span class="pill ${r.statusPill}" style="font-size:9.5px">${r.status}</span>
        </div>
        <div class="ver-card-sub" style="font-size:11px">
          By ${y(r.submitter)}<br>${r.time}
        </div>
        ${m!==null?`
        <div style="margin-top:5px;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:10px;color:${$};font-weight:700;display:flex;align-items:center;gap:3px">
            ⏱ ${L}
          </div>
          <div style="font-size:9.5px;color:var(--text-3)">Exp: ${v}</div>
        </div>
        <div style="margin-top:4px;height:3px;background:var(--border-2);border-radius:2px;overflow:hidden">
          <div style="height:100%;background:${$};width:${Math.max(0,Math.min(100,m/5*100))}%;transition:width .3s"></div>
        </div>`:""}
      </div>
    `}),i.length>0&&(o>0&&(a+='<div style="height:1px;background:var(--border);margin:8px 0"></div>'),a+='<div style="font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-3);font-weight:700;margin-bottom:6px">Reviewed</div>',i.forEach(r=>{const g=r.id===A;a+=`
        <div class="ver-card ${g?"active":""}" onclick="selectReviewVersion('${r.id}')" style="cursor:pointer;margin-bottom:8px;opacity:0.8">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
            <div class="ver-card-tag" style="margin-bottom:0;font-size:11px">${r.verTag}</div>
            <span class="pill ${r.statusPill}" style="font-size:9px">${r.status}</span>
          </div>
          <div class="ver-card-sub" style="font-size:10.5px">By ${y(r.submitter)}<br>${r.time}</div>
        </div>
      `})),E.length===0&&(a=`<div style="text-align:center;padding:20px 10px;color:var(--text-3);font-size:12px">
      <div style="font-size:24px;margin-bottom:8px">📭</div>
      No review submissions yet.
    </div>`),e.innerHTML=a;const s=E.find(r=>r.id===A)||E[0];if(!s)return;const u=document.getElementById("rev-main-status-pill");u&&(u.className=`pill ${s.statusPill}`,u.textContent=`${s.status} (${s.verTag})`);const d=(s.attachedFiles||[]).map(r=>typeof r=="string"?{icon:"📎",name:r,sub:"Linked deliverable",action:"Open"}:r);t.innerHTML=`
    <div style="padding:18px 20px 10px">
      <div class="section-label">${s.verTag} Deliverables - shared by ${y(s.submitter)}, ${s.time}</div>
    </div>
    <div style="padding:0 20px 16px">
      <div class="review-package-card">
        <div class="drive-card" style="margin-bottom:0;border:none;border-radius:0;box-shadow:none" onclick="window.open('#')">
          <div class="drive-icon"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg></div>
          <div class="drive-info">
            <div class="drive-name">${y(s.driveName)}</div>
            <div class="drive-url">${y(s.driveUrl)}</div>
            <div class="drive-meta">Shared by ${y(s.submitter)} · ${s.time}</div>
          </div>
          <button class="btn btn-primary btn-sm">Open Folder →</button>
        </div>

        <!-- Collapsible Attached Files Bar -->
        <div class="att-files-bar" onclick="toggleAttachedFiles()">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:14px">📎</span>
            <span style="font-weight:600;color:var(--text)">${d.length} additionally attached review files</span>
            <span style="color:var(--text-3);font-size:11px">(${d.map(r=>r.name.split(".").pop()).join(", ")})</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span id="att-state-txt" style="font-size:11px;color:var(--accent);font-weight:600">Click to view</span>
            <span id="att-chev" style="font-size:11px;color:var(--text-3);transition:transform .18s">▼</span>
          </div>
        </div>

        <!-- Collapsed Tray -->
        <div class="att-files-tray" id="attached-files-tray" style="display:none">
          ${d.map(r=>`
            <div class="file-item" style="border-radius:0;border-top:1px solid var(--border);border-left:none;border-right:none;border-bottom:none">
              <div class="file-icon">${r.icon}</div>
              <div style="flex:1;min-width:0">
                <div class="file-name">${y(r.name)}</div>
                <div class="file-sub">${y(r.sub)}</div>
              </div>
              <button class="btn btn-ghost btn-xs" onclick="window.open('#')">${r.action}</button>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <div style="padding:16px 20px">
      <div class="section-label" style="margin-bottom:8px">Note from ${y(s.submitter)}</div>
      <div class="submitter-note">${y(s.note)}</div>
    </div>
  `;const l=document.querySelector("#rev-decision-actions button.btn-success");l&&(l.innerHTML=`&#10003; &nbsp;Approve ${s.verTag}`);const c=document.querySelector("#rev-decision-actions button.btn-danger-ghost");c&&(c.innerHTML=`↺ &nbsp;Request Changes on ${s.verTag}`)}function fe(){const e=document.getElementById("share-form-wrap")||document.getElementById("share-form-inline");e&&(e.style.display=e.style.display==="none"?"":"none")}function mt(){var M;const e=document.getElementById("share-type-select"),t=document.getElementById("share-url-input"),n=document.getElementById("share-label-input"),i=document.getElementById("share-note-input"),o=e?e.value:"drive",a=t?t.value.trim():"",s=n?n.value.trim():"",u=i?i.value.trim():"",d=E.length+1,l="V"+d,c="v"+d,r=`${((M=b[p])==null?void 0:M.name)||"Ankit Verma"}`,m={drive:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg>',doc:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 1h7l3 3v11H3V1z"/><path d="M10 1v3h3"/><path d="M5 7h6M5 10h4"/></svg>',slides:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="1" width="14" height="11" rx="1.5"/><path d="M5 9V6M8 9V4M11 9V7"/></svg>',zip:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 1v3M10 1v3M6 4h4M6 7h4"/></svg>',other:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 10.5a4 4 0 005.5-5.5L10 3.5a4 4 0 00-5.5 5.5"/><path d="M10 5.5a4 4 0 00-5.5 5.5L6 12.5a4 4 0 005.5-5.5"/></svg>'}[o]||'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg>',v=new Date().toISOString().split("T")[0],f={id:c,verTag:l,submitter:r,role:p,time:B(),submittedDate:v,status:"Awaiting Review",statusPill:"p-warning",statusColor:"var(--warning)",driveName:s||`QM101 - M3, L4 - Probability Distributions - ${l}`,driveUrl:a||`drive.google.com/drive/folders/${l.toLowerCase()}-submission (view access given)`,note:u||`Submitted ${l} deliverable package for review with updated assets.`,attachedFiles:[{icon:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 1h7l3 3v11H3V1z"/><path d="M10 1v3h3"/><path d="M5 7h6M5 10h4"/></svg>',name:`script-prob-dist-${l.toLowerCase()}-revised.docx`,sub:`Script - ${l} revised draft`,action:"Open"},{icon:m,name:s?`${s.toLowerCase().replace(/[^a-z0-9]/g,"-")}.pkg`:`assets-${l.toLowerCase()}.zip`,sub:`Deliverable package (${l})`,action:"Open"}]};E.unshift(f),A=c,typeof R=="function"&&R({dotIcon:"📤",dotBg:"rgba(109,108,240,0.15)",dotCol:"#6d6cf0",action:`${l} Review Submitted`,ts:"Just now",author:`${r} (${p})`,desc:`<b>New Version Shared:</b> ${f.driveName}. Submitter Note: "${y(f.note)}"`}),t&&(t.value=""),n&&(n.value=""),i&&(i.value=""),fe(),D(),x(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1s4 1 4 7c0 2-1 4-4 6C5 12 4 10 4 8c0-6 4-7 4-7z"/><circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M5 12l-3 3M11 12l3 3"/></svg> ${l} submitted for review! Manager notified.`,"success")}function oe(){document.getElementById("modal-back").classList.remove("open")}function pt(e){e.target===document.getElementById("modal-back")&&oe()}function vt(){const e=document.getElementById("new-name").value.trim();if(!e){document.getElementById("new-name").focus();return}oe(),x('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M5 8l2.5 2.5L11 6"/></svg>  "'+e+'" created'),document.getElementById("new-name").value=""}function x(e,t){const n=document.createElement("div");let i="var(--success)";t==="danger"?i="var(--danger)":t==="warning"?i="var(--warning)":t==="info"?i="var(--text-2)":t==="accent"&&(i="var(--accent)"),n.style.cssText=`position:fixed;bottom:90px;right:24px;background:${i};color:#fff;padding:10px 16px;border-radius:10px;font-size:12.5px;font-weight:600;z-index:400;box-shadow:var(--shadow-lg);animation:slide-up .25s ease;display:flex;align-items:center;gap:8px;max-width:320px`,n.innerHTML=e,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}let U=3;function gt(){document.getElementById("modal-request-changes").classList.add("open"),setTimeout(()=>{const e=document.getElementById("req-changes-desc");e&&e.focus()},80)}function se(){document.getElementById("modal-request-changes").classList.remove("open")}function ht(e){e.target===document.getElementById("modal-request-changes")&&se()}function yt(){document.getElementById("modal-approve").classList.add("open"),setTimeout(()=>{const e=document.getElementById("approve-notes");e&&e.focus()},80)}function ae(){document.getElementById("modal-approve").classList.remove("open")}function ft(e){e.target===document.getElementById("modal-approve")&&ae()}function wt(){var c,r,g;const e=document.getElementById("req-changes-desc"),t=e?e.value.trim():"";if(!t){alert("Please specify the required changes before submitting."),e&&e.focus();return}const n=[];document.querySelectorAll('input[name="req-cat"]:checked').forEach(m=>n.push(m.value));const i=n.length>0?`<div style="margin-top:5px;display:flex;flex-wrap:wrap;gap:4px">${n.map(m=>`<span class="pill" style="font-size:9.5px;background:var(--danger-bg);color:var(--danger);border:1px solid rgba(220,38,38,0.25)">${m}</span>`).join("")}</div>`:"",o=(c=document.getElementById("req-changes-due"))==null?void 0:c.value,a=o?`<div style="font-size:11px;color:var(--danger);margin-top:5px;font-weight:600">Target V2 Date: ${o}</div>`:"",s=E.find(m=>m.id===A);s&&(s.status="Changes Requested",s.statusPill="p-danger",s.statusColor="var(--danger)"),R({dotIcon:"↺",dotBg:"rgba(220,38,38,0.15)",dotCol:"var(--danger)",action:"Changes Requested",ts:"Just now",author:`${((r=b[p])==null?void 0:r.name)||"Malhar"} (${p})`,desc:`<div style="color:var(--text);margin-bottom:2px"><b>Required:</b> ${y(t)}</div>${i}${a}`}),D();const u=document.getElementById("rev-status-pm");u&&(u.className="pill p-danger",u.textContent="Changes Req.");const d=document.getElementById("rev-decision-actions"),l=document.getElementById("rev-decision-result");if(d&&(d.style.display="none"),l&&(l.style.display="block",l.innerHTML=`
      <div style="background:var(--danger-bg);border:1px solid rgba(220,38,38,0.22);border-radius:8px;padding:12px;font-size:12px;color:var(--text-2)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
          <span style="font-weight:700;color:var(--danger);display:flex;align-items:center;gap:5px">↺ Changes Requested</span>
          <span style="font-size:10px;color:var(--text-3)">Just now</span>
        </div>
        <div style="font-size:11.5px;color:var(--text-2);margin-bottom:10px;line-height:1.4">Instructions sent to Editor/PRA for revision. Waiting for revision submission.</div>
        <button class="btn btn-ghost btn-xs" style="width:100%;justify-content:center" onclick="resetDecision()">Reset Decision</button>
      </div>
    `),e&&(e.value=""),document.querySelectorAll('input[name="req-cat"]').forEach(m=>m.checked=!1),s){const m=new Date;S.unshift({verTag:s.verTag,lesson:"QM101 - M3, L4 - Probability Distributions",submitter:s.submitter,submittedDate:s.submittedDate||m.toISOString().split("T")[0],reviewedDate:m.toISOString().split("T")[0],outcome:"Changes Requested",outcomeClass:"p-danger",outcomeIcon:"↺",reviewedBy:`${((g=b[p])==null?void 0:g.name)||"Malhar"} (${p})`,note:e?e.value.trim():"Changes requested by manager.",driveName:s.driveName})}se(),x(`↺ Changes requested on ${s?s.verTag:"Version"}`,"danger")}function bt(){var s,u;const e=document.getElementById("approve-notes"),t=e?e.value.trim():"",n=E.find(d=>d.id===A);if(n){n.status="Approved &#10003;",n.statusPill="p-complete",n.statusColor="var(--success)";const d=h[n.moduleId],l=d&&(d.batches||[]).find(c=>c.id===n.batchId);if(l){l.status="Request Approved",l.statusPill="p-complete",l.reviewComment=t||"Manager approved this review request.",l.approvalNotice="Request approved. Please update the project timeline accordingly.";const c=document.getElementById("tree-"+n.moduleId+"-"+n.batchId);c&&(c.innerHTML='<span class="pill p-complete" style="font-size:10px">Approved</span> '+l.num+" · "+(l.units.length===1?l.units[0].split(" - ")[0]:l.units.length+" units"))}}R({dotIcon:"&#10003;",dotBg:"rgba(22,163,74,0.15)",dotCol:"var(--success)",action:`${n?n.verTag:"V1"} Approved`,ts:"Just now",author:`${((s=b[p])==null?void 0:s.name)||"Malhar"} (${p})`,desc:t?`<b>Signed off with comment:</b> "${y(t)}"`:"<b>Signed off:</b> Approved without additional comments. Ready for LMS staging."}),D();const i=document.getElementById("rev-status-pm");i&&(i.className="pill p-complete",i.textContent="Approved &#10003;");const o=document.getElementById("rev-decision-actions"),a=document.getElementById("rev-decision-result");o&&(o.style.display="none"),a&&(a.style.display="block",a.innerHTML=`
      <div style="background:var(--success-bg);border:1px solid rgba(22,163,74,0.25);border-radius:8px;padding:12px;font-size:12px;color:var(--text-2)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
          <span style="font-weight:700;color:var(--success);display:flex;align-items:center;gap:5px">&#10003; ${n?n.verTag:"V1"} Approved</span>
          <span style="font-size:10px;color:var(--text-3)">Just now</span>
        </div>
        ${t?`<div style="font-size:11.5px;color:var(--text-2);margin-bottom:10px;font-style:italic">"${y(t)}"</div>`:'<div style="font-size:11.5px;color:var(--text-2);margin-bottom:10px;line-height:1.4">Sign-off recorded. Deliverable package approved for LMS staging.</div>'}
        <button class="btn btn-ghost btn-xs" style="width:100%;justify-content:center" onclick="resetDecision()">Reset Decision</button>
      </div>
    `),e&&(e.value=""),n&&S.unshift({verTag:n.verTag,lesson:"QM101 - M3, L4 - Probability Distributions",submitter:n.submitter,submittedDate:n.submittedDate||new Date().toISOString().split("T")[0],reviewedDate:new Date().toISOString().split("T")[0],outcome:"Approved",outcomeClass:"p-complete",outcomeIcon:"&#10003;",reviewedBy:`${((u=b[p])==null?void 0:u.name)||"Malhar"} (${p})`,note:t||"Approved without additional comments.",driveName:n.driveName}),ae(),x(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M5 8l2.5 2.5L11 6"/></svg> ${n?n.verTag:"Version"} Approved successfully`,"success")}function xt(){var a;const e=document.getElementById("rev-decision-actions"),t=document.getElementById("rev-decision-result");e&&(e.style.display="flex"),t&&(t.style.display="none",t.innerHTML="");const n=document.getElementById("rev-main-status-pill");n&&(n.className="pill p-review",n.textContent="Awaiting Review");const i=document.getElementById("rev-v1-status-text");i&&(i.style.color="var(--warning)",i.textContent="Awaiting review");const o=document.getElementById("rev-status-pm");o&&(o.className="pill p-warning",o.textContent="Pending"),R({dotIcon:"↩️",dotBg:"var(--surface-2)",dotCol:"var(--text-3)",action:"Decision Reset",ts:"Just now",author:`${((a=b[p])==null?void 0:a.name)||"Malhar"} (${p})`,desc:"Review decision reset back to Awaiting Review."}),x("Decision reset to Awaiting Review","accent")}function Mt(){be(),document.getElementById("modal-review-history").classList.add("open")}function we(){document.getElementById("modal-review-history").classList.remove("open")}function Et(e){e.target===document.getElementById("modal-review-history")&&we()}function be(){const e=document.getElementById("review-history-list");if(!e)return;const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=d=>{if(!d)return"-";const l=new Date(d);return`${l.getDate()} ${t[l.getMonth()]} ${l.getFullYear()}`},i=S.filter(d=>d.outcome==="Approved").length,o=S.filter(d=>d.outcome==="Expired").length,a=S.filter(d=>d.outcome==="Changes Requested").length,s=S.length,u=document.getElementById("rh-stats");if(u&&(u.innerHTML=`
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:var(--success-bg);border:1px solid rgba(22,163,74,0.2)">
          <span style="font-weight:700;color:var(--success);font-size:18px">${i}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Approved</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:rgba(220,38,38,0.07);border:1px solid rgba(220,38,38,0.18)">
          <span style="font-weight:700;color:var(--danger);font-size:18px">${o}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Expired / Missed</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:rgba(109,108,240,0.07);border:1px solid rgba(109,108,240,0.18)">
          <span style="font-weight:700;color:var(--accent);font-size:18px">${a}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Changes Requested</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:var(--surface-2);border:1px solid var(--border-2)">
          <span style="font-weight:700;color:var(--text);font-size:18px">${s}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Total Reviews</span>
        </div>
      </div>
    `),S.length===0){e.innerHTML=`<div style="text-align:center;padding:40px 20px;color:var(--text-3);font-size:13px">
      <div style="font-size:32px;margin-bottom:10px">📭</div>
      No review history yet. Reviews will appear here once completed or expired.
    </div>`;return}e.innerHTML=S.map(d=>{const l=d.outcome==="Expired",c=d.outcome==="Approved";return`
      <div style="border:1px solid ${c?"rgba(22,163,74,0.2)":l?"rgba(220,38,38,0.2)":"rgba(109,108,240,0.2)"};background:${c?"var(--success-bg)":l?"rgba(220,38,38,0.05)":"rgba(109,108,240,0.05)"};border-radius:10px;padding:14px 16px;margin-bottom:10px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:8px">
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
              <span style="font-size:13px;font-weight:700;color:var(--text)">${d.verTag}</span>
              <span class="pill ${d.outcomeClass}" style="font-size:10px">${d.outcomeIcon} ${d.outcome}</span>
            </div>
            <div style="font-size:12px;color:var(--text-2);font-weight:500">${d.lesson}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:2px"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg> ${y(d.driveName)}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:10.5px;color:var(--text-3)">Submitted</div>
            <div style="font-size:11.5px;color:var(--text-2);font-weight:600">${n(d.submittedDate)}</div>
            ${d.reviewedDate?`<div style="font-size:10px;color:var(--text-3);margin-top:2px">Reviewed ${n(d.reviewedDate)}</div>`:'<div style="font-size:10px;color:var(--danger);margin-top:2px">⏰ Not reviewed</div>'}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-top:8px;border-top:1px solid var(--border);font-size:11.5px;color:var(--text-2)">
          <span>👤 By <b>${y(d.submitter)}</b></span>
          <span style="color:var(--border-2)">|</span>
          <span>Reviewed by: <b>${y(d.reviewedBy)}</b></span>
          ${d.note?`<span style="color:var(--border-2)">|</span><span style="color:var(--text-3);font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px" title="${y(d.note)}">"${y(d.note.substring(0,60))}${d.note.length>60?"…":""}"</span>`:""}
        </div>
      </div>
    `}).join("")}function $t(e,t){document.querySelectorAll(".rh-filter-btn").forEach(s=>{s.classList.remove("active","btn-primary"),s.classList.add("btn-ghost")}),t.classList.add("active","btn-primary"),t.classList.remove("btn-ghost");const n=document.getElementById("review-history-list");if(!n)return;const i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=s=>{if(!s)return"-";const u=new Date(s);return`${u.getDate()} ${i[u.getMonth()]} ${u.getFullYear()}`},a=e==="all"?S:S.filter(s=>s.outcome===e);if(a.length===0){n.innerHTML=`<div style="text-align:center;padding:30px;color:var(--text-3);font-size:13px">No "${e}" reviews in history.</div>`;return}n.innerHTML=a.map(s=>{const u=s.outcome==="Expired",d=s.outcome==="Approved";return`
      <div style="border:1px solid ${d?"rgba(22,163,74,0.2)":u?"rgba(220,38,38,0.2)":"rgba(109,108,240,0.2)"};background:${d?"var(--success-bg)":u?"rgba(220,38,38,0.05)":"rgba(109,108,240,0.05)"};border-radius:10px;padding:14px 16px;margin-bottom:10px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:8px">
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
              <span style="font-size:13px;font-weight:700;color:var(--text)">${s.verTag}</span>
              <span class="pill ${s.outcomeClass}" style="font-size:10px">${s.outcomeIcon} ${s.outcome}</span>
            </div>
            <div style="font-size:12px;color:var(--text-2);font-weight:500">${s.lesson}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:2px"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg> ${y(s.driveName)}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:10.5px;color:var(--text-3)">Submitted</div>
            <div style="font-size:11.5px;color:var(--text-2);font-weight:600">${o(s.submittedDate)}</div>
            ${s.reviewedDate?`<div style="font-size:10px;color:var(--text-3);margin-top:2px">Reviewed ${o(s.reviewedDate)}</div>`:'<div style="font-size:10px;color:var(--danger);margin-top:2px">⏰ Not reviewed</div>'}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-top:8px;border-top:1px solid var(--border);font-size:11.5px;color:var(--text-2);flex-wrap:wrap">
          <span>👤 By <b>${y(s.submitter)}</b></span>
          <span style="color:var(--border-2)">|</span>
          <span>Reviewed by: <b>${y(s.reviewedBy)}</b></span>
          ${s.note?`<span style="color:var(--border-2)">|</span><span style="color:var(--text-3);font-style:italic">"${y(s.note.substring(0,80))}${s.note.length>80?"…":""}"</span>`:""}
        </div>
      </div>
    `}).join("")}function Bt(){const e=document.getElementById("revChangelogFeed"),t=document.getElementById("rev-activity-collapsed-banner"),n=document.getElementById("activity-toggle-txt"),i=document.getElementById("changelog-count");if(!e)return;if(e.style.display==="none")e.style.display="block",t&&(t.style.display="none"),n&&(n.textContent="Hide Activity");else{if(e.style.display="none",t){t.style.display="block";const a=i?i.textContent:"3 events",s=document.getElementById("rev-activity-collapsed-count");s&&(s.textContent=a)}n&&(n.textContent="Show Activity")}}function R(e){const t=document.getElementById("revChangelogFeed");if(!t)return;U++;const n=document.getElementById("changelog-count");n&&(n.textContent=`${U} events`);const i=document.getElementById("rev-activity-collapsed-count");i&&(i.textContent=`${U} events`);const o=document.createElement("div");o.className="changelog-item",o.innerHTML=`
    <div class="cli-dot" style="background:${e.dotBg};color:${e.dotCol}">${e.dotIcon}</div>
    <div class="cli-body">
      <div class="cli-head">
        <span class="cli-action">${e.action}</span>
        <span class="cli-ts">${e.ts}</span>
      </div>
      <div class="cli-author">${e.author}</div>
      <div class="cli-desc">${e.desc}</div>
    </div>
  `,t.insertBefore(o,t.firstChild)}function y(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function It(e){const t=h[e];if(!t)return;document.getElementById("add-batch-mod-id").value=e,document.getElementById("add-batch-mod-label").textContent=t.title+" - Select units included in this batch",document.getElementById("add-batch-name").value="Batch "+((t.batches||[]).length+1),document.getElementById("add-batch-drive").value="",document.getElementById("add-batch-label").value="V1",document.getElementById("add-batch-notes").value="",document.getElementById("add-batch-files").value="";const n=p==="Editor";document.getElementById("add-batch-pra-row").style.display=n?"block":"none",document.getElementById("add-batch-pra").value="",document.getElementById("add-batch-units-req").style.display=n?"none":"",document.getElementById("add-batch-units-hint").textContent=n?" — Optional for Editors":" — Select all that apply (mandatory)";const i=document.getElementById("add-batch-units-list"),o=t.availableUnits||["Unit 1","Unit 2","Unit 3"];i.innerHTML=o.map((a,s)=>`
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12.5px;padding:3px 0">
              <input type="checkbox" class="batch-unit-chk" value="${a}"
                style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer"
                id="unit-chk-${s}">
              <span>${a}</span>
            </label>
          `).join(""),document.getElementById("modal-add-batch").classList.add("open"),setTimeout(()=>document.getElementById("add-batch-name").focus(),80)}function de(){document.getElementById("modal-add-batch").classList.remove("open")}function St(e){e.target===document.getElementById("modal-add-batch")&&de()}function kt(){var v;const e=document.getElementById("add-batch-mod-id").value,t=h[e];if(!t)return;const n=document.getElementById("add-batch-name").value.trim(),i=document.getElementById("add-batch-drive").value.trim(),o=document.getElementById("add-batch-label").value.trim(),a=document.getElementById("add-batch-notes").value.trim(),s=document.getElementById("add-batch-files").value.split(`
`).map(f=>f.trim()).filter(Boolean),u=document.getElementById("add-batch-pra").value,d=p==="Editor"?"Awaiting PRA Review":"Awaiting Review",l=Array.from(document.querySelectorAll(".batch-unit-chk:checked")).map(f=>f.value);if(!n){alert("Please enter a batch name."),document.getElementById("add-batch-name").focus();return}if(p!=="Editor"&&l.length===0){alert("Please select at least one unit to include in this batch.");return}if(p==="Editor"&&!u){alert("Please select the PRA who should receive this review request."),document.getElementById("add-batch-pra").focus();return}if(!i){alert("Please provide the Google Drive link for this batch."),document.getElementById("add-batch-drive").focus();return}const c="batch-"+e+"-"+Date.now(),r={id:c,num:n,units:l,status:d,statusPill:"p-warning",submittedBy:((v=b[p])==null?void 0:v.name)||"Ankit Verma",reviewRecipient:p==="Editor"?u:"Manager",submittedDate:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),driveName:"QM101 - "+t.shortTitle+" - "+n+" - "+(o||"V1"),driveUrl:i,fileLinks:s,notes:a,reviewComment:"",notes_thread:[]};t.batches=t.batches||[],t.batches.push(r),E.push({id:c,verTag:n+(o?" - "+o:""),submitter:r.submittedBy,role:p,reviewRecipient:p==="Editor"?u:"Manager",time:B(),submittedDate:new Date().toISOString().split("T")[0],status:d,statusPill:"p-warning",statusColor:"var(--warning)",moduleId:e,moduleName:t.title,batchId:c,batchNum:n,units:l,driveName:r.driveName,driveUrl:i,note:a,attachedFiles:s});const g=document.getElementById("ch-"+e);if(g){const f=g.querySelector('[style*="No batches"]');f&&f.remove();const M=document.createElement("div");M.className="tree-lesson",M.id="tree-"+e+"-"+c;const $=l.length===1?l[0].split(" - ")[0]:l.length+" units";M.innerHTML='<span class="pill p-warning" style="font-size:10px">Review</span> '+n+" · "+$,M.onclick=()=>_(e,c),g.appendChild(M)}de(),_(e,c);const m=document.querySelector("#nav-review .nav-count");m&&(m.textContent=E.filter(f=>f.status==="Awaiting Review"||f.status==="Awaiting PRA Review").length),x("📋 "+n+" submitted for review!","success")}function At(e,t){var u;const n=h[e],i=n&&(n.batches||[]).find(d=>d.id===t);if(!i||i.status!=="Awaiting PRA Review")return;i.status="Awaiting Review",i.statusPill="p-warning",i.reviewRecipient="Manager",i.forwardedBy=((u=b[p])==null?void 0:u.name)||"PRA",i.forwardedAt=B();const o=E.find(d=>d.batchId===t);o&&(o.status="Awaiting Review",o.statusPill="p-warning",o.statusColor="var(--warning)",o.reviewRecipient="Manager",o.forwardedBy=i.forwardedBy);const a=document.getElementById("tree-"+e+"-"+t);a&&(a.innerHTML='<span class="pill p-warning" style="font-size:10px">Manager Review</span> '+i.num+" · "+(i.units.length===1?i.units[0].split(" - ")[0]:i.units.length+" units"));const s=document.querySelector("#nav-review .nav-count");s&&(s.textContent=E.filter(d=>d.status==="Awaiting Review"||d.status==="Awaiting PRA Review").length),H(n,i),x("Batch forwarded to the Manager for review.","success")}function Ct(e,t){const n=h[e],i=n&&(n.batches||[]).find(a=>a.id===t);if(!i)return;document.getElementById("edit-batch-mod-id").value=e,document.getElementById("edit-batch-id").value=t,document.getElementById("edit-batch-mod-label").textContent=n.title+" · "+i.num,document.getElementById("edit-batch-name").value=i.num,document.getElementById("edit-batch-drive").value=i.driveUrl||"",document.getElementById("edit-batch-files").value=(i.fileLinks||[]).join(`
`),document.getElementById("edit-batch-label").value=i.label||"",document.getElementById("edit-batch-notes").value=i.notes||"",document.getElementById("edit-batch-reason").value="";const o=n.availableUnits||i.units||[];document.getElementById("edit-batch-units-list").innerHTML=o.map((a,s)=>`
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12.5px;padding:3px 0">
              <input type="checkbox" class="edit-batch-unit-chk" value="${a}" ${i.units.includes(a)?"checked":""}
                style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer" id="edit-unit-chk-${s}">
              <span>${a}</span>
            </label>`).join(""),document.getElementById("modal-edit-batch").classList.add("open"),setTimeout(()=>document.getElementById("edit-batch-name").focus(),80)}function le(){document.getElementById("modal-edit-batch").classList.remove("open")}function Tt(e){e.target===document.getElementById("modal-edit-batch")&&le()}function Lt(){var m;const e=document.getElementById("edit-batch-mod-id").value,t=document.getElementById("edit-batch-id").value,n=h[e],i=n&&(n.batches||[]).find(v=>v.id===t);if(!i)return;const o=document.getElementById("edit-batch-name").value.trim(),a=document.getElementById("edit-batch-drive").value.trim(),s=document.getElementById("edit-batch-label").value.trim(),u=document.getElementById("edit-batch-notes").value.trim(),d=document.getElementById("edit-batch-reason").value.trim(),l=Array.from(document.querySelectorAll(".edit-batch-unit-chk:checked")).map(v=>v.value),c=document.getElementById("edit-batch-files").value.split(`
`).map(v=>v.trim()).filter(Boolean);if(!o){alert("Please enter a batch name.");return}if(!a){alert("Please provide the Google Drive link for this batch.");return}if(!l.length){alert("Please select at least one unit.");return}if(d.length<10){alert("Please enter an edit reason with at least 10 non-space characters."),document.getElementById("edit-batch-reason").focus();return}i.num,i.num=o,i.units=l,i.driveUrl=a,i.fileLinks=c,i.label=s,i.notes=u,i.driveName="QM101 - "+n.shortTitle+" - "+o+" - "+(s||"V1"),i.editHistory=i.editHistory||[],i.editHistory.unshift({reason:d,by:((m=b[p])==null?void 0:m.name)||"Current user",time:B()});const r=E.find(v=>v.batchId===t);r&&Object.assign(r,{verTag:o+(s?" - "+s:""),batchNum:o,units:l,driveName:i.driveName,driveUrl:a,note:u,attachedFiles:c});const g=document.getElementById("tree-"+e+"-"+t);g&&(g.innerHTML='<span class="pill '+(i.status==="Completed"||i.status==="Reviewed"?"p-complete":"p-warning")+'" style="font-size:10px">'+i.status+"</span> "+o+" · "+(l.length===1?l[0].split(" - ")[0]:l.length+" units")),le(),H(n,i),x("Batch updated and edit reason recorded.","success")}function _(e,t){const n=h[e];if(!n)return;const i=(n.batches||[]).find(u=>u.id===t);if(!i)return;document.querySelectorAll(".tree-mod, .tree-lesson, .tree-wi").forEach(u=>u.classList.remove("selected"));const o=document.getElementById("tree-"+e+"-"+t);o&&o.classList.add("selected");const a=document.getElementById("ch-"+e),s=document.getElementById("chev-"+e);a&&!a.classList.contains("open")&&(a.classList.add("open"),s&&s.classList.add("open")),H(n,i)}function H(e,t){const n=document.getElementById("work-detail");n.classList.add("show"),document.getElementById("work-empty").style.display="none";const o={Approved:"p-complete","Request Approved":"p-complete",Completed:"p-complete",Reviewed:"p-complete","Changes Requested":"p-review","Awaiting Review":"p-warning","Awaiting PRA Review":"p-warning","In Progress":"p-editing",Expired:"p-danger"}[t.status]||"p-none";n.innerHTML=`
  <div class="wi-header">
    <button class="back-mod-btn" onclick="selMod('${e.id}')">← Back to ${e.shortTitle} Overview</button>
    <div class="wi-bc">QM101 · ${e.num} · ${t.num}</div>
    <div class="wi-title">${t.driveName}</div>
    <div class="wi-facts">
      <div class="wi-fact">
        <label>Status</label>
        <div class="val"><span class="pill ${o}">${t.status}</span></div>
      </div>
      <div class="wi-fact">
        <label>Submitted by</label>
        <div class="val">${t.submittedBy}</div>
      </div>
      <div class="wi-fact">
        <label>Date</label>
        <div class="val">${t.submittedDate}</div>
      </div>
    </div>
  </div>

  <div class="wi-body">
    <div class="wi-section">Units Included in this Batch</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;margin-bottom:16px">
      ${t.units.map(a=>'<span class="batch-units-tag" style="font-size:12px">'+a+"</span>").join("")}
    </div>

    <div class="wi-section" style="margin-top:16px">Drive / Deliverables</div>
    ${t.driveUrl?`
    <div class="ver-item" style="margin-top:8px;cursor:pointer" onclick="window.open('https://' + '${t.driveUrl}'.replace(/^https?:///, ''), '_blank')">
      <div style="width:32px;height:32px;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg>
      </div>
      <div style="flex:1;min-width:0">
        <div class="ver-by">${t.driveName}</div>
        <div class="ver-date">${t.driveUrl}</div>
      </div>
      <span class="pill ${o}" style="font-size:10px">${t.status}</span>
      <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();navProj('review')">Review →</button>
    </div>`:'<div style="font-size:12.5px;color:var(--text-3);font-style:italic;margin-top:8px">No Drive link submitted yet.</div>'}

    ${(t.fileLinks||[]).length?`<div style="margin:9px 0 16px;font-size:12px;color:var(--text-2)"><b>Attached deliverable / ZIP links</b>${t.fileLinks.map(a=>`<div style="margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><a href="https://${a.replace(/^https?:\/\//,"")}" target="_blank" rel="noopener" style="color:var(--accent)">${a}</a></div>`).join("")}</div>`:""}

    ${t.reviewComment?`
    <div class="wi-section" style="margin-top:20px">Manager Feedback</div>
    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-top:8px;font-size:12.5px;color:var(--text-2);line-height:1.6">${t.reviewComment}</div>`:""}

    ${t.approvalNotice?`<div style="margin-top:14px;background:var(--success-bg);border:1px solid rgba(5,150,105,.25);border-radius:8px;padding:11px 13px;font-size:12.5px;color:var(--success);font-weight:600">✓ ${t.approvalNotice}</div>`:""}

    ${(t.editHistory||[]).length?`<div class="wi-section" style="margin-top:20px">Submission Edit History</div><div style="font-size:12px;color:var(--text-2);background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px 12px">${t.editHistory.map(a=>`<div style="margin-bottom:6px"><b>${a.by}</b> · ${a.time}<br>${a.reason}</div>`).join("")}</div>`:""}

    <div class="wi-section" style="margin-top:20px">Notes &amp; Activity</div>
    <div class="notes-panel">
      <div class="notes-feed" id="batch-notes-feed-${t.id}">
        ${(t.notes_thread||[]).length>0?(t.notes_thread||[]).map((a,s)=>`
        <div class="note-msg-row">
          <div class="av av-sm" style="background:${a.color};flex-shrink:0">${a.init}</div>
          <div class="note-bubble">
            <div class="note-bubble-head">
              <span class="note-author">${a.author}</span>
              <span class="note-role">${a.role}</span>
              <span class="note-time">${a.time}</span>
            </div>
            <div class="note-text">${a.text}</div>
          </div>
        </div>`).join(""):'<div class="notes-empty">No notes on this batch yet.</div>'}
      </div>
      <div class="notes-input-bar">
        <div class="av av-sm" style="background:var(--accent);flex-shrink:0" id="batch-notes-av-${t.id}">PM</div>
        <div class="notes-input-wrap">
          <textarea class="notes-textarea" id="batch-cmt-${t.id}" rows="1" placeholder="Add a note on this batch…" onkeydown="if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();submitBatchNote('${e.id}','${t.id}');}"></textarea>
          <button class="notes-send-btn" onclick="submitBatchNote('${e.id}', '${t.id}')" title="Send (Ctrl+Enter)">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2L1 7.5 6 9m8-7L9 15l-3-6m8-7L6 9"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div style="height:1px;background:var(--border);margin:20px 0"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${p==="PRA"&&t.status==="Awaiting PRA Review"?`<button class="btn btn-primary btn-sm" onclick="sendBatchForManagerReview('${e.id}', '${t.id}')">Send for Manager's Review</button>`:""}
      <button class="btn btn-ghost btn-sm" onclick="openEditBatchModal('${e.id}', '${t.id}')">Edit Submission</button>
      ${t.status==="Awaiting Review"?'<button class="btn btn-primary btn-sm" onclick="navProj(&quot;review&quot;)">→ Go to Review Queue</button>':""}
        <button class="btn btn-ghost btn-sm" onclick="navProj('timeline')">View Timeline</button>
    </div >
  </div >
          <div style="height:40px"></div>
        `}function Rt(e,t){var d;const n=h[e];if(!n)return;const i=(n.batches||[]).find(l=>l.id===t);if(!i)return;const o=document.getElementById("batch-cmt-"+t);if(!o)return;const a=o.value.trim();if(!a){o.focus();return}const s=((d=b[p])==null?void 0:d.name)||"Malhar",u={PRA:"#6d6cf0",Editor:"#ea7c1e",QC:"var(--success)",Manager:"var(--accent)"};i.notes_thread=i.notes_thread||[],i.notes_thread.push({author:s,role:p,text:a,time:B(),color:u[p]||"var(--accent)",init:T(s)}),o.value="",H(n,i),setTimeout(()=>{const l=document.getElementById("batch-notes-feed-"+t);l&&(l.scrollTop=l.scrollHeight)},30),x("Note added to batch","success")}function O(e){const t=h[e];if(!t)return;document.querySelectorAll(".tree-mod, .tree-lesson, .tree-wi").forEach(o=>o.classList.remove("selected"));const n=document.getElementById("mod-header-"+e);n&&n.classList.add("selected");const i=document.getElementById("work-detail");i.classList.add("show"),document.getElementById("work-empty").style.display="none",i.innerHTML=`
          <div class="mod-view-header">
      <div class="wi-bc">QM101 · ${t.num}</div>
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap">
        <div>
          <div class="mod-view-title">${t.title}</div>
          <div class="mod-view-desc">${t.desc}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <span class="pill ${t.statusPill}" style="font-size:12px;font-weight:700;padding:4px 10px">${t.status}</span>
          <span style="font-size:12px;font-weight:700;color:${t.progressCol}">${t.progress}% Complete</span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="prog" style="margin-top:14px;height:6px">
        <div class="prog-fill" style="width:${t.progress}%;background:${t.progressCol}"></div>
      </div>

      <!-- Facts row -->
          <div class="mod-facts-grid" style="margin-top:16px">
            <div class="mod-fact-card">
              <div class="mf-label">Lessons</div>
              <div class="mf-val">${t.lessons.length} Lessons</div>
            </div>
            <div class="mod-fact-card">
              <div class="mf-label">Phase</div>
              <div class="mf-val">${t.phase}</div>
            </div>
            <div class="mod-fact-card">
              <div class="mf-label">Target / Timeline</div>
              <div class="mf-val">${t.target}</div>
            </div>
            <div class="mod-fact-card">
              <div class="mf-label">Team Assigned</div>
              <div class="mf-val" style="display:flex;align-items:center;gap:6px">
                ${t.team.map(o=>`<div class="av av-sm" style="background:${o.color}" title="${o.name} (${o.role})">${o.init}</div>`).join("")}
                <span style="font-size:11.5px;color:var(--text-2);margin-left:2px">${t.team.map(o=>o.name.split(" ")[0]).join(", ")}</span>
              </div>
            </div>
          </div>
    </div>

          <div class="mod-view-body">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
              <div class="wi-section" style="margin-bottom:0">Review Batches (${(t.batches||[]).length})</div>
              <span style="font-size:11px;color:var(--text-3)">Each batch is a review submission for this module</span>
            </div>

            <div class="mod-lessons-grid">
              ${(t.batches||[]).length>0?(t.batches||[]).map(o=>{const a={Approved:"p-complete","Request Approved":"p-complete",Completed:"p-complete",Reviewed:"p-complete","Changes Requested":"p-review","Awaiting Review":"p-warning","Awaiting PRA Review":"p-warning","In Progress":"p-editing","Not Started":"p-none"},s=o.status==="Awaiting Review";return`
          <div class="batch-card ${s?"is-review":""}" onclick="selBatch('${t.id}', '${o.id}')">
            <div class="batch-card-top">
              <span class="batch-num">${o.num}</span>
              <span class="pill ${a[o.status]||"p-none"}" style="font-size:10px">${o.status}</span>
              <span style="margin-left:auto"><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();selBatch('${t.id}', '${o.id}')">View Details →</button></span>
            </div>
            <div class="batch-units-tag">
              ${o.units.length===1?o.units[0]:o.units.length+" units · "+o.units.slice(0,2).join(", ")+(o.units.length>2?"…":"")}
            </div>
            <div class="batch-card-foot">
              <span>By ${o.submittedBy}</span>
              <span style="color:var(--border-2)">·</span>
              <span>${o.submittedDate}</span>
              ${s?'<span style="color:var(--border-2)">·</span><span style="color:var(--violet);font-weight:600">Awaiting manager review</span>':""}
            </div>
          </div>`}).join(""):'<div style="text-align:center;padding:30px 20px;color:var(--text-3);font-size:13px"><div style="font-size:22px;margin-bottom:8px">📋</div>No review batches yet.<br><span style="font-size:11.5px">Submit videos for review using the button below.</span></div>'}
      </div>
      <!-- OVERRIDE: old lessons grid replaced by batch grid above -->
      <div style="display:none" class="mod-lessons-grid-old">
      </div></div>

      <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary btn-sm" onclick="openAddBatchModal('${t.id}')">+ Add Batch for Review</button>
        <button class="btn btn-ghost btn-sm" onclick="navProj('timeline')">View in Timeline</button>
        ${t.id==="m3"?`<button class="btn btn-primary btn-sm" onclick="navProj('review')">→ Go to Review (V1)</button>`:""}
      </div>
    </div>
  `}function j(e){let t=null,n=null;for(const s in h){const u=h[s].lessons.find(d=>d.id===e);if(u){t=h[s],n=u;break}}if(!t||!n)return;const i=document.getElementById("ch-"+t.id),o=document.getElementById("chev-"+t.id);i&&!i.classList.contains("open")&&(i.classList.add("open"),o&&o.classList.add("open")),document.querySelectorAll(".tree-mod, .tree-lesson, .tree-wi").forEach(s=>s.classList.remove("selected"));const a=document.getElementById("tree-"+e);a&&a.classList.add("selected"),k(t,n)}function k(e,t){const n={Editing:"p-editing",Storyboard:"p-storyboard",Review:"p-review",Shoot:"p-shoot","Mock Shoot":"p-shoot",QC:"p-qc",Complete:"p-complete",Planning:"p-none",Scope:"p-none"},i={"In Progress":"p-editing","Awaiting Review":"p-review",Scheduled:"p-shoot","Not Started":"p-none",Done:"p-complete","Pending Scope":"p-none"},o=t.version!=="-",a=t.due==="Sep 11",s=t.owner==="Unassigned"?"-":t.owner.split(" ").map(d=>d[0]).join(""),u=document.getElementById("work-detail");u.classList.add("show"),document.getElementById("work-empty").style.display="none",u.innerHTML=`
    <div class="wi-header">
      <button class="back-mod-btn" onclick="selMod('${e.id}')">← Back to ${e.shortTitle} Overview</button>
      <div class="wi-bc">QM101 · ${e.num} · ${t.title.split("-")[0].trim()}</div>
      <div class="wi-title">${t.itemTitle} - ${t.title}</div>
      <div class="wi-facts">
        <div class="wi-fact">
          <label>Phase</label>
          <div class="val"><span class="pill ${n[t.phase]||"p-none"}">${t.phase}</span></div>
        </div>
        <div class="wi-fact">
          <label>Status</label>
          <div class="val"><span class="pill ${i[t.status]||"p-none"}">${t.status}</span></div>
        </div>
        ${o?`<div class="wi-fact"><label>Version</label><div class="val"><span class="pill p-accent">${t.version}</span></div></div>`:""}
        <div class="wi-fact">
          <label>Owner</label>
          <div class="val" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <div class="av av-sm" style="background:${t.ownerColor}">${s}</div>
            <span style="${t.owner==="Unassigned"?"color:var(--danger);font-weight:700":""}">${t.owner}</span>
            <select class="quick-assign-select" onchange="quickAssignLesson('${e.id}','${t.id}',this.value)" style="font-size:11px;padding:2px 8px;border:1px solid ${t.owner==="Unassigned"?"var(--danger)":"var(--border-2)"};border-radius:6px;background:${t.owner==="Unassigned"?"rgba(220,38,38,0.08)":"var(--surface)"};color:${t.owner==="Unassigned"?"var(--danger)":"var(--text-2)"};font-weight:${t.owner==="Unassigned"?"700":"500"};cursor:pointer;outline:none">
              <option value="" disabled selected>${t.owner==="Unassigned"?"👤 Assign Owner Now…":'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg> Change Owner'}</option>
              <option value="Ankit Verma">Ankit Verma (PRA)</option>
              <option value="Ravi Kumar">Ravi Kumar (Editor)</option>
              <option value="Stuti Garg">Stuti Garg (QC)</option>
              <option value="Priya S">Priya S (Senior PRA)</option>
              <option value="Malhar">Malhar (Manager)</option>
              <option value="Unassigned">Unassigned</option>
            </select>
          </div>
        </div>
        <div class="wi-fact">
          <label>Due</label>
          <div class="val" style="${a?"color:var(--danger);font-weight:700":"color:var(--text-2)"}">${t.due==="-"?"-":t.due}</div>
        </div>
      </div>
    </div>

    <div class="wi-body">
      <div class="wi-section">Description</div>
      <div class="wi-desc">${t.desc}</div>

      ${o?`
        <div class="wi-section" style="margin-top:16px">Version History &amp; Review Files</div>
        <div class="ver-item" onclick="navProj('review')">
          <div class="ver-tag">${t.version}</div>
          <div style="flex:1;min-width:0">
            <div class="ver-by">Deliverable uploaded by ${t.owner}</div>
            <div class="ver-date">10 Sep 2026 · Google Drive Link Shared</div>
          </div>
          <span class="pill ${t.status==="Awaiting Review"?"p-warning":"p-complete"}">${t.status==="Awaiting Review"?"Pending Review":"Approved"}</span>
          <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();navProj('review')">Review →</button>
        </div>
      `:""}

      <div class="wi-section" style="margin-top:20px">Notes &amp; Activity</div>
      <div class="notes-panel">
        <div class="notes-feed" id="notes-feed-${t.id}">
          ${t.notes&&t.notes.length>0?t.notes.map((d,l)=>{const c=d.id||"n-"+l;if(d.id=c,d.isAudit)return`
              <div class="note-audit-row" id="note-card-${c}">
                <div class="note-audit-line"></div>
                <div class="note-audit-body">
                  <span class="note-audit-text">${y(d.text)}</span>
                  <span class="note-audit-time">${y(d.time)}</span>
                </div>
              </div>`;const r=d.edited?`<span class="note-edited-badge" title="Edited on ${d.editedTime||"unknown"}">· edited</span>`:"",g=d.edited?`<button class="btn btn-ghost btn-xs note-action-btn" title="Edited on ${d.editedTime||""}" onclick="event.stopPropagation()" style="padding:1px 3px"><svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M8 5v4l2.5 1.5"/></svg></button>`:"";return`
            <div class="note-msg-row" id="note-card-${c}">
              <div class="av av-sm" style="background:${d.color};flex-shrink:0">${d.init}</div>
              <div class="note-bubble">
                <div class="note-bubble-head">
                  <span class="note-author">${y(d.author)}</span>
                  <span class="note-role">${y(d.role)}</span>
                  ${r}
                  ${g}
                  <span class="note-time">${d.time}</span>
                  <button class="btn btn-ghost btn-xs note-action-btn" onclick="openEditNoteModal('${e.id}', '${t.id}', '${c}')" title="Edit note" style="padding:1px 3px">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg>
                  </button>
                  <button class="btn btn-ghost btn-xs note-action-btn" onclick="deleteLessonNote('${e.id}', '${t.id}', '${c}')" title="Delete note" style="padding:1px 3px;color:var(--danger)">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg>
                  </button>
                </div>
                <div class="note-text">${y(d.text)}</div>
              </div>
            </div>`}).join(""):'<div class="notes-empty">No notes yet. Add the first note below.</div>'}
        </div>
        <div class="notes-input-bar">
          <div class="av av-sm" style="background:var(--accent);flex-shrink:0" id="notes-av-${t.id}">PM</div>
          <div class="notes-input-wrap">
            <textarea class="notes-textarea" id="cmt-input-${t.id}" rows="1" placeholder="Add a note for ${t.owner}…" onkeydown="if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();submitAddLessonNote('${e.id}','${t.id}');}"></textarea>
            <button class="notes-send-btn" onclick="submitAddLessonNote('${e.id}', '${t.id}')" title="Send (Ctrl+Enter)">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2L1 7.5 6 9m8-7L9 15l-3-6m8-7L6 9"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div style="height:1px;background:var(--border);margin:20px 0"></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost btn-sm" onclick="openChangeStatusModal('${e.id}', '${t.id}')"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8a6 6 0 1110.4-4.1M2 4v4h4"/></svg> Change Status</button>
        <button class="btn btn-ghost btn-sm" onclick="openSetDueDateModal('${e.id}', '${t.id}')"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> Set Due Date</button>
        ${t.status==="Awaiting Review"?`<button class="btn btn-primary btn-sm" onclick="navProj('review')">→ Go to Review Screen</button>`:""}
      </div>
    </div>
    <div style="height:40px"></div>
  `}function Dt(e,t,n,i,o,a,s,u,d,l){if(e&&(e.startsWith("m1")||e.startsWith("m2")||e.startsWith("m3")||e.startsWith("m4")||e.startsWith("m5")||e.startsWith("m6"))){j(e);return}}function Pt(){const e=document.getElementById("attached-files-tray"),t=document.getElementById("att-state-txt"),n=document.getElementById("att-chev");if(!e)return;e.style.display==="none"||e.style.display===""?(e.style.display="block",t&&(t.textContent="Click to hide"),n&&(n.style.transform="rotate(180deg)")):(e.style.display="none",t&&(t.textContent="Click to view"),n&&(n.style.transform="rotate(0deg)"))}window.addEventListener("DOMContentLoaded",()=>{I(),q("m1"),N("dashboard")});window.closeAddModuleModal=ee;window.toggleRoleMenu=Ee;window.openChangeStatusModal=Ze;window.toggleTimelineMod=Be;window.toggleReviewActivityPanel=Bt;window.openAddLessonModal=Qe;window.closeEditNoteModalOut=lt;window.submitAddLessonNote=at;window.closeEditTimelineModalOut=Ne;window.collapseAllTimeline=Ie;window.submitBatchNote=Rt;window.renderReviewVersions=D;window.submitAddTimeline=Re;window.toggleAttachedFiles=Pt;window.submitChangeStatus=tt;window.filterReviewHistory=$t;window.renderBatchDetail=H;window.submitAddLesson=Ge;window.syncNewLessonToTitle=Ce;window.timelineStatusClass=Q;window.updateTimelineItemStatus=Pe;window.toggleTree=_e;window.addChangelogItem=R;window.closeTimelineDetailModalOut=Oe;window.getInitials=T;window.getExpiryDateStr=he;window.closeSetDueDateModal=ne;window.closeReqChangesModal=se;window.toggleShareForm=fe;window.selWI=Dt;window.openReviewHistory=Mt;window.expandAllTimeline=Se;window.submitSetDueDate=st;window.formatCurrentTime=B;window.submitEditTimeline=ze;window.toggleTreeMod=ve;window.closeEditTimelineModal=Y;window.resetDecision=xt;window.expandAllModules=qe;window.openApproveModal=yt;window.sendBatchForManagerReview=At;window.closeTimelineItemInfoOut=De;window.closeAddTimelineModal=W;window.createProject=vt;window.setReasonText=Ve;window.closeApproveModalOut=ft;window.closeAddBatchModalOut=St;window.openLessonWork=Ue;window.openAddBatchModal=It;window.onAddTimelineModChange=ke;window.escapeHtml=y;window.openSetDueDateModal=nt;window.refreshTimelineItemStatus=F;window.clickTreeMod=je;window.closeEditBatchModalOut=Tt;window.checkAndExpireReviews=ye;window.closeTimelineDetailModal=X;window.closeEditNoteModal=ie;window.submitShareForm=mt;window.updateAddTimelineLessonPreview=V;window.selLesson=j;window.validateTlStartDate=Te;window.submitEditNote=rt;window.renderReviewHistory=be;window.openEditTimelineModal=me;window.closeAddBatchModal=de;window.closeReviewHistoryOut=Et;window.nav=N;window.selectReviewVersion=ut;window.selectSetDueDateChip=ot;window.submitRequestChanges=wt;window.populateAddTimelineLessonOptions=K;window.openEditBatchModal=Ct;window.deleteLessonNote=ct;window.submitApprove=bt;window.syncGanttRowHeights=ce;window.openAddTimelineModal=ue;window.closeChangeStatusModal=te;window.selMod=O;window.submitEditBatch=Lt;window.closeModalOut=pt;window.dateToDayIndex=C;window.showToast=x;window.closeAddModuleModalOut=Ye;window.navProj=Me;window.openEditNoteModal=dt;window.switchRole=$e;window.onAddTimelineLessonSelectChange=Ae;window.openTimelineItemInfo=G;window.renderLessonDetail=k;window.closeSetDueDateModalOut=it;window.openModal=Fe;window.closeChangeStatusModalOut=et;window.collapseAllModules=pe;window.openReqChangesModal=gt;window.dismissFloat=re;window.closeAddTimelineModalOut=Le;window.submitAddModule=Xe;window.selBatch=_;window.buildGantt=I;window.findTimelineItem=z;window.closeApproveModal=ae;window.openAddModuleModal=Je;window.quickAssignLesson=We;window.closeEditBatchModal=le;window.closeAddLessonModal=Z;window.calcDaysLeft=ge;window.openModuleWork=q;window.closeModal=oe;window.closeReviewHistory=we;window.closeAddLessonModalOut=Ke;window.openModuleTimelineDetail=He;window.submitAddBatch=kt;window.closeTimelineItemInfo=J;window.closeReqChangesModalOut=ht;
