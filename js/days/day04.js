window.DAYS = window.DAYS || {};
DAYS[4] = {
  "title": "Learning outcomes and course specifications",
  "intro": "Course specifications and learning outcomes take real time, and much of that time goes into wording, alignment and consistency: exactly the language work AI does well. Today you use AI as a drafting partner for course learning outcomes (CLOs), alignment and lecture planning, following the ETEC–NCAAA framework, while every academic decision stays with you and your program.",
  "goals": [
    "Draft measurable CLOs in the three NCAAA learning areas with AI support.",
    "Check CLOs for measurability, level and alignment.",
    "Build an alignment table: CLO, teaching strategy, assessment method.",
    "Turn a weekly topic into a structured lecture plan."
  ],
  "plan": {
    "learn": 12,
    "examples": 12,
    "practice": 16,
    "quiz": 5
  },
  "learn": [
    {
      "t": "saudi",
      "title": "The framework you already work with",
      "html": "ETEC–NCAAA course specification templates (the course specification is template T-104) group course learning outcomes into three learning areas: <b>Knowledge and understanding</b>, <b>Skills</b>, and <b>Values, autonomy and responsibility</b>. Each CLO is mapped to a program learning outcome (PLO), and to the teaching strategies and assessment methods that develop and measure it. Always use your program's approved PLOs and your college's current version of the templates."
    },
    {
      "t": "h",
      "text": "What makes a good CLO"
    },
    {
      "t": "list",
      "items": [
        "<b>Student-centred:</b> describes what the student will be able to do, not what you will teach.",
        "<b>One measurable action verb</b> from the right cognitive level (for example: <i>define</i>, <i>explain</i>, <i>apply</i>, <i>analyze</i>, <i>evaluate</i>, <i>design</i>). Avoid <i>know</i>, <i>understand</i>, <i>be aware of</i>.",
        "<b>Specific content and condition:</b> what, and in what context or with what tools.",
        "<b>Assessable</b> with a method you will actually use in this course.",
        "<b>Right level</b> for the course level: higher-level verbs for advanced courses."
      ]
    },
    {
      "t": "table",
      "head": [
        "Weak CLO",
        "Problem",
        "Stronger CLO"
      ],
      "rows": [
        [
          "Students will understand databases.",
          "\"Understand\" is not measurable; content is vague.",
          "Explain the role of keys and relationships in a relational database."
        ],
        [
          "Learn to analyze and design information systems.",
          "Two verbs, two outcomes; \"learn\" describes the process.",
          "Analyze an organization's information needs using a given case study."
        ]
      ]
    },
    {
      "t": "h",
      "text": "Where AI helps in course design, and where it must not decide"
    },
    {
      "t": "table",
      "head": [
        "AI can draft",
        "You and your program decide"
      ],
      "rows": [
        [
          "Alternative wordings of a CLO",
          "Which outcomes the course must achieve"
        ],
        [
          "A measurability and level check",
          "The mapping of CLOs to approved PLOs"
        ],
        [
          "Suggested teaching strategies and assessments",
          "Assessment weights and policies"
        ],
        [
          "Weekly topic plans and lecture outlines",
          "Final wording submitted to committees"
        ]
      ]
    },
    {
      "t": "warn",
      "title": "Give it your PLOs; never let it invent them",
      "html": "If you ask for alignment without pasting your program's PLOs, the model will invent plausible ones. Always paste the approved list and tell it to use only those codes."
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "Draft CLOs from your course description",
      "text": "Act as a curriculum specialist familiar with the ETEC–NCAAA course specification template.\nCourse: [course code and title], level [year], [credit hours] credit hours.\nCourse description:\n<description>\n[Paste the approved course description]\n</description>\nApproved program learning outcomes (use only these codes):\n<plos>\n[Paste PLO codes and statements]\n</plos>\nTask: Propose 6–8 course learning outcomes across the three learning areas: Knowledge and understanding; Skills; Values, autonomy and responsibility.\nRules: one measurable action verb per CLO; appropriate to the course level; student-centred; each assessable in a typical course.\nFormat: a table with columns: Learning area | CLO code | CLO statement | Aligned PLO code | Suggested assessment method."
    },
    {
      "t": "prompt",
      "title": "Quality-check existing CLOs",
      "text": "Review these course learning outcomes for a [level] course in [discipline].\n<clos>\n[Paste your current CLOs]\n</clos>\nFor each CLO check: (1) one measurable verb, (2) verb level suits the course level, (3) specific content, (4) can be assessed, (5) correct learning area.\nFormat: a table: CLO | Issues found | Improved version. Do not change the meaning of an outcome; flag it if you think the meaning itself needs a decision from me."
    },
    {
      "t": "prompt",
      "title": "Alignment table",
      "text": "Using the CLOs below, build an alignment table for my course.\n<clos>\n[Paste your final CLOs]\n</clos>\nMy assessments this term: [e.g. 2 quizzes, midterm, group project, final exam].\nColumns: CLO | Teaching strategies (2 per CLO, practical for a [class size]-student class) | Which of my assessments measures it | Gap or risk.\nAfter the table, list any CLO that none of my assessments measures well."
    },
    {
      "t": "prompt",
      "title": "Lecture plan for one week",
      "text": "Create a lesson plan for week [n] of [course]: topic \"[topic]\". It supports [CLO code: statement].\nSession: [length] minutes, [number] students, [room type].\nInclude: 1) a 3-minute opening question linked to students' lives in Saudi Arabia, 2) timed segments with the teacher's and students' activities, 3) one active-learning activity, 4) a 5-minute check for understanding, 5) key terms in English with Arabic equivalents.\nFormat: a table with columns Time | Activity | Purpose, then the key terms list."
    }
  ],
  "tasks": [
    {
      "title": "Improve the CLOs of one of your courses",
      "html": "Choose a course you teach. Run the quality-check prompt on its current CLOs, then decide yourself which suggestions to keep.",
      "check": [
        "I pasted my real CLOs (and PLOs where needed) instead of letting the AI invent them.",
        "I accepted, edited or rejected each suggestion myself.",
        "Every final CLO has one measurable verb and belongs to the correct learning area."
      ]
    },
    {
      "title": "Find a gap with the alignment table",
      "html": "Run the alignment prompt with your real assessments.",
      "check": [
        "I produced an alignment table for my course.",
        "I identified at least one CLO that is weakly measured, or confirmed there is none.",
        "I noted one change I will propose to my course coordinator or committee."
      ]
    },
    {
      "title": "Twin step 3: add your standards",
      "html": "Give your teaching assistant the standards you work to. In a document called \"Twin v0.1 - standards\", write: (1) the improved CLOs of the course from task 1, (2) three habits you follow when you write a rubric or assessment, and (3) how you like to give feedback, in about five lines. Use your own words. No student data.",
      "check": [
        "The file contains my real CLOs, not AI-invented ones.",
        "I wrote my own assessment habits and feedback style in my own words.",
        "The document is short enough to paste into a prompt (about one page)."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What are the three learning areas in the current ETEC–NCAAA templates?",
      "o": [
        "Knowledge; cognitive skills; communication and IT",
        "Remember; apply; create",
        "Knowledge and understanding; skills; values, autonomy and responsibility",
        "Theory; practice; research"
      ],
      "a": 2,
      "why": "The current templates use these three learning areas; older templates used five domains."
    },
    {
      "q": "Which CLO is best written?",
      "o": [
        "Evaluate a marketing plan for a local business using given criteria.",
        "Students will learn and apply marketing tools.",
        "Students will understand marketing concepts.",
        "The course covers marketing plans."
      ],
      "a": 0,
      "why": "One measurable verb, specific content and a condition, student-centred."
    },
    {
      "q": "You ask AI to map your CLOs to PLOs but do not paste the PLOs. What is the main risk?",
      "o": [
        "It will refuse",
        "It will answer in the wrong language",
        "It will invent plausible PLOs that are not your program's",
        "Nothing; it knows every program"
      ],
      "a": 2,
      "why": "Missing facts get filled with guesses. Paste the approved list and restrict it to those codes."
    },
    {
      "q": "Which decision should stay with you and your program, not the AI?",
      "o": [
        "The official mapping of CLOs to PLOs and assessment weights",
        "Suggesting active-learning activities",
        "Rewording a CLO more clearly",
        "Listing key terms with Arabic equivalents"
      ],
      "a": 0,
      "why": "AI can propose; official mapping and weights are academic decisions that go through your committees."
    },
    {
      "q": "An alignment table is mainly useful for…",
      "o": [
        "making the specification look longer",
        "choosing textbooks",
        "replacing the course report",
        "spotting outcomes that no assessment really measures"
      ],
      "a": 3,
      "why": "Alignment shows whether each CLO is taught and measured. Gaps are what you fix before the term starts."
    }
  ],
  "cards": [
    {
      "f": "The three NCAAA learning areas",
      "b": "Knowledge and understanding; Skills; Values, autonomy and responsibility."
    },
    {
      "f": "Features of a good CLO",
      "b": "Student-centred, one measurable verb at the right level, specific content, assessable."
    },
    {
      "f": "Verbs to avoid in CLOs",
      "b": "Know, understand, be aware of, learn: they are not directly measurable."
    },
    {
      "f": "Rule for AI-assisted alignment",
      "b": "Paste the approved PLOs and restrict the model to those codes."
    },
    {
      "f": "Alignment table columns",
      "b": "CLO | teaching strategies | assessment method | gap or risk."
    }
  ]
};
