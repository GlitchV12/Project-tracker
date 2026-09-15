export const TIMELINE_DATA = {
                m1: {
                id: 'm1',
              num: 'M1',
              name: 'M1 - Introduction to QM',
              open: true, // Only Module 1 is open by default!
              progress: 100,
              status: 'Complete',
              statusPill: 'p-complete',
              staged: 'Live on LMS (Published Aug 31)',
              stagedBadge: 'Live',
              stagedPill: 'p-complete',
              dateRange: 'Aug 25 – Sep 8',
              spanStart: 0,
              spanEnd: 11,
              finalized: [
              {item: 'Script & Storyboards (L1–L2) finalized', date: 'Aug 28', by: 'Ankit Verma (PRA)' },
              {item: 'Studio Video Shoot Complete', date: 'Sep 2', by: 'Ravi Kumar (Editor)' },
              {item: 'QC Audio & Video Sign-off Passed', date: 'Sep 8', by: 'Stuti Garg (QC)' },
              {item: 'Live on edX & Swayam LMS', date: 'Aug 31', by: 'Malhar (Manager)' }
              ],
              changeHistory: [
              {date: 'Sep 1', user: 'Ankit Verma (PRA)', oldDates: 'Aug 28 – Sep 1', newDates: 'Aug 28 – Sep 2', reason: 'Studio slot delayed by 1 day due to faculty availability' }
              ],
              items: [
              {
                id: 'm1-l1-rev', modId: 'm1', lesson: 'L1 - What is QM?', task: 'Edit & Final Review',
              s: 0, e: 7, sStr: '2026-09-01', eStr: '2026-09-08', col: '#15803d', txt: 'Complete &#10003;', status: 'Complete', owner: 'Ravi Kumar',
              contents: 'Final master video (1080p 24fps, 14m 20s), slides deck (18 slides), intro bumper & lower thirds, complete transcript & SRT subtitles.',
              createdBy: 'Malhar (Manager) on 20 Aug 2026',
              lastEdited: 'Ankit Verma (PRA) on 01 Sep 2026',
              lastEditReason: 'Studio slot delayed by 1 day due to faculty availability',
              editHistory: [
              {date: '01 Sep 2026', by: 'Ankit Verma (PRA)', oldDates: '2026-08-28 – 2026-09-01', newDates: '2026-09-01 – 2026-09-08', reason: 'Studio slot delayed by 1 day due to faculty availability' }
              ]
              },
              {
                id: 'm1-l2-qc', modId: 'm1', lesson: 'L2 - Data Types', task: 'QC Review & Signoff',
              s: 7, e: 11, sStr: '2026-09-08', eStr: '2026-09-12', col: '#059669', txt: 'QC Passed &#10003;', status: 'Complete', owner: 'Stuti Garg',
              contents: 'QC audit report, audio loudness check (-14 LUFS verified), color pass, LMS packaging zip.',
              createdBy: 'Malhar (Manager) on 20 Aug 2026',
              lastEdited: null,
              lastEditReason: null,
              editHistory: []
              }
              ]
          },
              m2: {
                id: 'm2',
              num: 'M2',
              name: 'M2 - Descriptive Statistics',
              open: false, // Collapsed by default!
              progress: 65,
              status: 'In Progress',
              statusPill: 'p-review',
              staged: 'Draft staged on sandbox for internal QA review',
              stagedBadge: 'Staged (Sandbox)',
              stagedPill: 'p-warning',
              dateRange: 'Sep 5 – Sep 18',
              spanStart: 4,
              spanEnd: 17,
              finalized: [
              {item: 'Scripts & Formula sheets approved', date: 'Sep 4', by: 'Ankit Verma (PRA)' },
              {item: 'L1 Rough cut completed', date: 'Sep 9', by: 'Ravi Kumar (Editor)' }
              ],
              changeHistory: [],
              items: [
              {
                id: 'm2-l1-rev', modId: 'm2', lesson: 'L1 - Central Tendency', task: 'Edit → V2 Review',
              s: 4, e: 10, sStr: '2026-09-05', eStr: '2026-09-11', col: '#7c3aed', txt: 'Review V2', status: 'Review', owner: 'Malhar',
              contents: 'V2 video cut incorporating faculty corrections on median formula notation, updated slide deck.',
              createdBy: 'Ankit Verma (PRA) on 28 Aug 2026',
              lastEdited: 'Malhar (Manager) on 05 Sep 2026',
              lastEditReason: 'Faculty requested extra review window for mathematical notations',
              editHistory: [
              {date: '05 Sep 2026', by: 'Malhar (Manager)', oldDates: '2026-09-05 – 2026-09-09', newDates: '2026-09-05 – 2026-09-11', reason: 'Faculty requested extra review window for mathematical notations' }
              ]
              },
              {
                id: 'm2-l2-ed', modId: 'm2', lesson: 'L2 - Dispersion', task: 'Editing V1',
              s: 7, e: 13, sStr: '2026-09-08', eStr: '2026-09-14', col: '#0891b2', txt: 'Editing V1', status: 'Editing', owner: 'Ravi Kumar',
              contents: 'Raw studio footage sync, sound design, variance calculation motion graphics.',
              createdBy: 'Ankit Verma (PRA) on 28 Aug 2026',
              lastEdited: null,
              lastEditReason: null,
              editHistory: []
              },
              {
                id: 'm2-l3-sh', modId: 'm2', lesson: 'L3 - Data Visualisation', task: 'Studio Shoot',
              s: 11, e: 13, sStr: '2026-09-12', eStr: '2026-09-14', col: '#ea7c1e', txt: 'Shoot', status: 'Shoot', owner: 'Ankit Verma',
              contents: 'Green screen studio recording with Prof. R. Sharma, teleprompter slides, demonstration charts.',
              createdBy: 'Malhar (Manager) on 30 Aug 2026',
              lastEdited: null,
              lastEditReason: null,
              editHistory: []
              }
              ]
          },
              m3: {
                id: 'm3',
              num: 'M3',
              name: 'M3 - Probability',
              open: false, // Collapsed by default!
              progress: 42,
              status: 'In Progress',
              statusPill: 'p-warning',
              staged: 'Not staged yet (awaiting L4 review approval)',
              stagedBadge: 'Pending Review',
              stagedPill: 'p-danger',
              dateRange: 'Sep 8 – Sep 22',
              spanStart: 7,
              spanEnd: 21,
              finalized: [
              {item: 'L1 & L2 Final animations approved', date: 'Sep 7', by: 'Ankit Verma (PRA)' },
              {item: 'L4 Deliverable V1 uploaded to Drive', date: 'Sep 10', by: 'Ankit Verma (PRA)' }
              ],
              changeHistory: [
              {date: 'Sep 8', user: 'Malhar (Manager)', oldDates: 'Sep 8 – Sep 10', newDates: 'Sep 8 – Sep 11', reason: 'Extended L4 Review turnaround due to complex normal distribution diagrams' }
              ],
              items: [
              {
                id: 'm3-l1-ed', modId: 'm3', lesson: 'L1 - Basic Probability', task: 'Editing V1',
              s: 9, e: 15, sStr: '2026-09-10', eStr: '2026-09-16', col: '#0891b2', txt: 'Editing V1', status: 'Editing', owner: 'Ravi Kumar',
              contents: 'Initial cut, Venn diagram overlays, audio clean-up.',
              createdBy: 'Ankit Verma (PRA) on 01 Sep 2026',
              lastEdited: null,
              lastEditReason: null,
              editHistory: []
              },
              {
                id: 'm3-l2-sb', modId: 'm3', lesson: 'L2 - Conditional Probability', task: 'Storyboard',
              s: 7, e: 13, sStr: '2026-09-08', eStr: '2026-09-14', col: '#6d6cf0', txt: 'Storyboard', status: 'Storyboard', owner: 'Ankit Verma',
              contents: 'Bayes Theorem visual explanation boards, coin toss animations, student exercise prompts.',
              createdBy: 'Ankit Verma (PRA) on 01 Sep 2026',
              lastEdited: null,
              lastEditReason: null,
              editHistory: []
              },
              {
                id: 'm3-l4-rev', modId: 'm3', lesson: '⭐ L4 - Prob. Distributions', task: 'Review V1',
              s: 7, e: 10, sStr: '2026-09-08', eStr: '2026-09-11', col: '#dc2626', txt: '⚠ Review V1 (Overdue)', status: 'Review', owner: 'Malhar', overdue: true,
              contents: 'Google Drive V1 cut link (18m 42s), script-prob-dist-v1-final.docx, slides-prob-dist-v1.pptx, assets-prob-dist-v1.zip.',
              createdBy: 'Malhar (Manager) on 02 Sep 2026',
              lastEdited: 'Malhar (Manager) on 08 Sep 2026',
              lastEditReason: 'Extended L4 Review turnaround due to complex normal distribution diagrams',
              editHistory: [
              {date: '08 Sep 2026', by: 'Malhar (Manager)', oldDates: '2026-09-08 – 2026-09-10', newDates: '2026-09-08 – 2026-09-11', reason: 'Extended L4 Review turnaround due to complex normal distribution diagrams' }
              ]
              }
              ]
          },
              m4: {
                id: 'm4',
              num: 'M4',
              name: 'M4 - Hypothesis Testing',
              open: false, // Collapsed by default!
              progress: 10,
              status: 'Planned',
              statusPill: 'p-none',
              staged: 'Not started yet',
              stagedBadge: 'Not Started',
              stagedPill: 'p-none',
              dateRange: 'Sep 20 – Oct 6',
              spanStart: 19,
              spanEnd: 35,
              finalized: [],
              changeHistory: [],
              items: [
              {
                id: 'm4-l1-sb', modId: 'm4', lesson: 'L1 - Null Hypothesis', task: 'Storyboard',
              s: 19, e: 29, sStr: '2026-09-20', eStr: '2026-09-30', col: '#6d6cf0', txt: 'Planned', status: 'Planned', owner: 'Ankit Verma',
              contents: 'Initial module outline and syllabus alignment with Faculty.',
              createdBy: 'Malhar (Manager) on 05 Sep 2026',
              lastEdited: null,
              lastEditReason: null,
              editHistory: []
              }
              ]
          }
        };

export const MODULES_DATA = {
          m1: {
            id: 'm1',
            num: 'Module 1',
            title: 'Module 1 - Introduction to Quantitative Methods',
            shortTitle: 'Module 1',
            status: 'Complete',
            statusPill: 'p-complete',
            progress: 100,
            progressCol: 'var(--success)',
            phase: 'QC & Signoff',
            target: 'Completed Aug 2026',
            team: [
              { name: 'Ravi Kumar', role: 'Editor', color: '#ea7c1e', init: 'RK' },
              { name: 'Stuti Garg', role: 'QC', color: 'var(--success)', init: 'SG' }
            ],
            desc: 'Foundational module establishing terminology, quantitative decision models, and measurement scales used throughout the course.',
            availableUnits: ['Unit 1 - What is Quantitative Methods?', 'Unit 2 - Data Types & Scales'],
            batches: [
              { id: 'batch-m1-1', num: 'Batch 1', units: ['Unit 1 - What is Quantitative Methods?'], status: 'Completed', statusPill: 'p-complete', submittedBy: 'Ravi Kumar', submittedDate: '28 Aug 2026', driveName: 'QM101 - Module 1 - Batch 1 - Final', driveUrl: 'drive.google.com/drive/folders/m1batch1', fileLinks: ['drive.google.com/file/d/m1-unit1-final-video', 'drive.google.com/file/d/m1-unit1-assets-zip'], notes: 'Final video, captions, and source assets reviewed and approved.', reviewComment: 'Reviewed by QC — all deliverables meet the publication standard.', notes_thread: [], editHistory: [] },
              { id: 'batch-m1-2', num: 'Batch 2', units: ['Unit 2 - Data Types & Scales'], status: 'Reviewed', statusPill: 'p-complete', submittedBy: 'Stuti Garg', submittedDate: '2 Sep 2026', driveName: 'QM101 - Module 1 - Batch 2 - QC Final', driveUrl: 'drive.google.com/drive/folders/m1batch2', fileLinks: ['drive.google.com/file/d/m1-unit2-final-video', 'drive.google.com/file/d/m1-unit2-subtitles-zip'], notes: 'QC package includes final video, transcript, captions, and LMS package.', reviewComment: 'Reviewed and signed off. Module 1 is ready for publication.', notes_thread: [], editHistory: [] }
            ],
            lessons: [
              {
                id: 'm1l1',
                title: 'L1 - What is Quantitative Methods?',
                fullTitle: 'M1 · L1 - What is Quantitative Methods?',
                itemTitle: 'Lecture Video & Script Finalized',
                phase: 'Complete',
                status: 'Done',
                version: 'V2',
                owner: 'Ravi Kumar',
                ownerColor: '#ea7c1e',
                due: 'Aug 28',
                desc: 'Introductory overview of quantitative techniques in management decision making. Audio synced and captions validated.',
                notes: [
                  { author: 'Ravi Kumar', role: 'Editor', text: 'All cuts finalized and color grading locked.', time: '28 Aug · 4:15 PM', color: '#ea7c1e', init: 'RK' }
                ]
              },
              {
                id: 'm1l2',
                title: 'L2 - Data Types & Scales',
                fullTitle: 'M1 · L2 - Data Types & Scales',
                itemTitle: 'QC Verification & Signoff',
                phase: 'QC',
                status: 'Done',
                version: 'V1',
                owner: 'Stuti Garg',
                ownerColor: 'var(--success)',
                due: 'Sep 2',
                desc: 'Nominal, Ordinal, Interval, and Ratio scale concepts. Passed all technical quality standards.',
                notes: [
                  { author: 'Stuti Garg', role: 'QC', text: 'Quality check passed with zero defects. Audio levels calibrated at -14 LUFS.', time: '2 Sep · 11:30 AM', color: 'var(--success)', init: 'SG' }
                ]
              }
            ]
          },
          m2: {
            id: 'm2',
            num: 'Module 2',
            title: 'Module 2 - Descriptive Statistics',
            shortTitle: 'Module 2',
            status: 'Editing',
            statusPill: 'p-editing',
            progress: 55,
            progressCol: 'var(--c-editing)',
            phase: 'Video Editing',
            target: 'Sep 18, 2026',
            team: [
              { name: 'Ankit Verma', role: 'PRA', color: '#0891b2', init: 'AV' },
              { name: 'Ravi Kumar', role: 'Editor', color: '#ea7c1e', init: 'RK' }
            ],
            desc: 'Covers central tendency, dispersion metrics, and graphical visualization of univariate data distributions.',
            availableUnits: ['Unit 1 - Measures of Central Tendency', 'Unit 2 - Measures of Dispersion', 'Unit 3 - Data Visualisation'],
            batches: [
              {
                id: 'batch-m2-1', num: 'Batch 1',
                units: ['Unit 1 - Measures of Central Tendency', 'Unit 2 - Measures of Dispersion'],
                status: 'Changes Requested', statusPill: 'p-review',
                submittedBy: 'Ravi Kumar', submittedDate: '9 Sep 2026',
                driveName: 'QM101 - Module 2 - Batch 1 - V2',
                driveUrl: 'drive.google.com/drive/folders/m2batch1',
                notes: 'V2 revisions incorporated. Updated slide 14 calculation graph.',
                reviewComment: 'Transition timing needs fixing between histograms. Revise and resubmit.',
                notes_thread: []
              },
              {
                id: 'batch-m2-2', num: 'Batch 2',
                units: ['Unit 3 - Data Visualisation'],
                status: 'In Progress', statusPill: 'p-editing',
                submittedBy: 'Neha Khatri', submittedDate: 'Not submitted yet',
                driveName: 'QM101 - Module 2 - Batch 2',
                driveUrl: '',
                notes: 'Studio shoot scheduled Sep 13. Teleprompter script loaded.',
                reviewComment: '',
                notes_thread: []
              }
            ],
            lessons: [
              {
                id: 'm2l1',
                title: 'L1 - Measures of Central Tendency',
                fullTitle: 'M2 · L1 - Measures of Central Tendency',
                itemTitle: 'Edit Video Revisions (V2)',
                phase: 'Review',
                status: 'Awaiting Review',
                version: 'V2',
                owner: 'Ravi Kumar',
                ownerColor: '#ea7c1e',
                due: 'Sep 12',
                desc: 'V2 revisions incorporated from faculty feedback on mean, median, and mode skewness examples.',
                notes: [
                  { author: 'Ravi Kumar', role: 'Editor', text: 'V2 timeline exported. Updated slide 14 calculation graph.', time: '9 Sep · 3:20 PM', color: '#ea7c1e', init: 'RK' }
                ]
              },
              {
                id: 'm2l2',
                title: 'L2 - Measures of Dispersion',
                fullTitle: 'M2 · L2 - Measures of Dispersion',
                itemTitle: 'Edit Video V1 Rough Cut',
                phase: 'Editing',
                status: 'In Progress',
                version: 'V1',
                owner: 'Ankit Verma',
                ownerColor: '#0891b2',
                due: 'Sep 14',
                desc: 'Editing in progress. V1 rough cut at 60%. Focus on clean transitions between histogram and box plot sections.',
                notes: [
                  { author: 'Ankit Verma', role: 'PRA', text: 'Rough cut assembly 60% done. Waiting for raw audio cleanup.', time: '9 Sep · 5:10 PM', color: '#0891b2', init: 'AV' }
                ]
              },
              {
                id: 'm2l3',
                title: 'L3 - Data Visualisation',
                fullTitle: 'M2 · L3 - Data Visualisation',
                itemTitle: 'Studio Recording Shoot',
                phase: 'Shoot',
                status: 'Scheduled',
                version: '-',
                owner: 'Neha Khatri',
                ownerColor: '#ea7c1e',
                due: 'Sep 13',
                desc: 'Studio shoot booked at IIMB Media Lab with Prof. Sridhar for live Excel demos.',
                notes: [
                  { author: 'Neha Khatri', role: 'PRA', text: 'Studio reserved 2 PM to 5 PM. Teleprompter script loaded.', time: '8 Sep · 1:00 PM', color: '#ea7c1e', init: 'NK' }
                ]
              }
            ]
          },
          m3: {
            id: 'm3',
            num: 'Module 3',
            title: 'Module 3 - Probability',
            shortTitle: 'Module 3',
            status: 'Review',
            statusPill: 'p-review',
            progress: 35,
            progressCol: 'var(--violet)',
            phase: 'Review & Production',
            target: 'Sep 22, 2026',
            team: [
              { name: 'Ankit Verma', role: 'PRA', color: '#0891b2', init: 'AV' },
              { name: 'Ravi Kumar', role: 'Editor', color: '#ea7c1e', init: 'RK' }
            ],
            desc: 'Foundational probability theory, conditional probability, Bayes theorem, and continuous distributions.',
            availableUnits: ['Unit 1 - Basic Probability', 'Unit 2 - Conditional Probability', 'Unit 3 - Bayes Theorem', 'Unit 4 - Probability Distributions'],
            batches: [
              {
                id: 'batch-m3-1', num: 'Batch 1',
                units: ['Unit 1 - Basic Probability', 'Unit 2 - Conditional Probability', 'Unit 3 - Bayes Theorem', 'Unit 4 - Probability Distributions'],
                status: 'Awaiting Review', statusPill: 'p-warning',
                submittedBy: 'Ankit Verma', submittedDate: '10 Sep 2026',
                driveName: 'QM101 - Module 3 - Batch 1 - V1',
                driveUrl: 'drive.google.com/drive/folders/m3batch1',
                notes: 'V1 complete. Covers Normal, Binomial and Poisson distributions with animated visuals. Running time 12m 34s.',
                reviewComment: '',
                notes_thread: []
              }
            ],
            lessons: [
              {
                id: 'm3l1',
                title: 'L1 - Basic Probability',
                fullTitle: 'M3 · L1 - Basic Probability',
                itemTitle: 'Edit Video V1',
                phase: 'Editing',
                status: 'In Progress',
                version: 'V1',
                owner: 'Ravi Kumar',
                ownerColor: '#ea7c1e',
                due: 'Sep 16',
                desc: 'Premiere Pro edit in progress. Custom coin and dice animations being prepared.',
                notes: [
                  { author: 'Ravi Kumar', role: 'Editor', text: 'Started assembly cut today.', time: '10 Sep · 9:15 AM', color: '#ea7c1e', init: 'RK' }
                ]
              },
              {
                id: 'm3l2',
                title: 'L2 - Conditional Probability',
                fullTitle: 'M3 · L2 - Conditional Probability',
                itemTitle: 'Storyboard Submission',
                phase: 'Storyboard',
                status: 'In Progress',
                version: '-',
                owner: 'Ankit Verma',
                ownerColor: '#0891b2',
                due: 'Sep 14',
                desc: 'Slide deck storyboard covering independent events and tree diagrams.',
                notes: [
                  { author: 'Ankit Verma', role: 'PRA', text: 'Drafting storyboard slides in PPT.', time: '8 Sep · 2:30 PM', color: '#0891b2', init: 'AV' }
                ]
              },
              {
                id: 'm3l3',
                title: 'L3 - Bayes\' Theorem',
                fullTitle: 'M3 · L3 - Bayes\' Theorem',
                itemTitle: 'Storyboard Planning',
                phase: 'Storyboard',
                status: 'Scheduled',
                version: '-',
                owner: 'Ankit Verma',
                ownerColor: '#0891b2',
                due: 'Sep 18',
                desc: 'Real-world diagnostic testing examples. Storyboard scheduled after L2 signoff.',
                notes: []
              },
              {
                id: 'm3l4',
                title: 'L4 - Probability Distributions',
                fullTitle: 'M3 · L4 - Probability Distributions',
                itemTitle: 'Review Video V1',
                phase: 'Editing',
                status: 'Awaiting Review',
                version: 'V1',
                owner: 'Ankit Verma',
                ownerColor: '#7c3aed',
                due: 'Sep 11',
                desc: 'V1 complete. Covers Normal, Binomial and Poisson distributions with animated visuals. Running time 12m 34s. Ready for Manager review.',
                notes: [
                  { author: 'Ankit Verma', role: 'PRA', text: 'V1 video uploaded to Drive. Ready for review.', time: '10 Sep · 10:45 AM', color: '#0891b2', init: 'AV' }
                ]
              }
            ]
          },
          m4: {
            id: 'm4',
            num: 'Module 4',
            title: 'Module 4 - Hypothesis Testing',
            shortTitle: 'Module 4',
            status: 'Not Started',
            statusPill: 'p-none',
            progress: 0,
            progressCol: 'var(--text-3)',
            phase: 'Planning',
            target: 'Oct 5, 2026',
            team: [
              { name: 'Unassigned', role: 'PRA', color: '#94a3b8', init: '-' }
            ],
            desc: 'Formulation of null and alternative hypotheses, p-values, and Type I/II decision errors.',
            lessons: [
              {
                id: 'm4l1',
                title: 'L1 - Null & Alternative Hypothesis',
                fullTitle: 'M4 · L1 - Null & Alternative Hypothesis',
                itemTitle: 'Script Preparation',
                phase: 'Planning',
                status: 'Not Started',
                version: '-',
                owner: 'Unassigned',
                ownerColor: '#94a3b8',
                due: 'Sep 25',
                desc: 'Faculty lecture notes received. Scriptwriting scheduled to start next week.',
                notes: []
              },
              {
                id: 'm4l2',
                title: 'L2 - Type I & II Errors',
                fullTitle: 'M4 · L2 - Type I & II Errors',
                itemTitle: 'Script Preparation',
                phase: 'Planning',
                status: 'Not Started',
                version: '-',
                owner: 'Unassigned',
                ownerColor: '#94a3b8',
                due: 'Sep 30',
                desc: 'Script outlining error matrix and significance levels.',
                notes: []
              }
            ]
          },
          m5: {
            id: 'm5',
            num: 'Module 5',
            title: 'Module 5 - Regression Analysis',
            shortTitle: 'Module 5',
            status: 'Not Started',
            statusPill: 'p-none',
            progress: 0,
            progressCol: 'var(--text-3)',
            phase: 'Planning',
            target: 'Oct 20, 2026',
            team: [
              { name: 'Unassigned', role: 'PRA', color: '#94a3b8', init: '-' }
            ],
            desc: 'Linear and multiple regression models, R-squared interpretation, and residual diagnostics.',
            lessons: [
              {
                id: 'm5l1',
                title: 'L1 - Simple Linear Regression',
                fullTitle: 'M5 · L1 - Simple Linear Regression',
                itemTitle: 'Outline & Syllabus',
                phase: 'Planning',
                status: 'Not Started',
                version: '-',
                owner: 'Unassigned',
                ownerColor: '#94a3b8',
                due: 'Oct 10',
                desc: 'Course outline draft in review by subject matter expert.',
                notes: []
              }
            ]
          },
          m6: {
            id: 'm6',
            num: 'Module 6',
            title: 'Module 6 - Advanced Topics',
            shortTitle: 'Module 6',
            status: 'Pending Scope',
            statusPill: 'p-none',
            progress: 0,
            progressCol: 'var(--text-3)',
            phase: 'Pending Scope',
            target: 'Nov 2026',
            team: [
              { name: 'Unassigned', role: 'PRA', color: '#94a3b8', init: '-' }
            ],
            desc: 'Optional advanced electives: Time Series Analysis, Logistic Regression, and Non-parametric tests.',
            lessons: [
              {
                id: 'm6l1',
                title: 'L1 - Time Series & Forecasting',
                fullTitle: 'M6 · L1 - Time Series & Forecasting',
                itemTitle: 'Curriculum Proposal',
                phase: 'Scope',
                status: 'Pending Scope',
                version: '-',
                owner: 'Unassigned',
                ownerColor: '#94a3b8',
                due: 'Oct 25',
                desc: 'Under review with faculty committee.',
                notes: []
              }
            ]
          }
        };

export const ROLES = {
          Manager: { name: 'Malhar', initials: 'PM', color: 'var(--accent)', greet: 'Good morning, Priya 👋' },
          PRA: { name: 'Ankit Verma', initials: 'AV', color: '#0891b2', greet: 'Good morning, Ankit 👋' },
          Editor: { name: 'Ravi Kumar', initials: 'RK', color: '#ea7c1e', greet: 'Good morning, Ravi 👋' },
        };

