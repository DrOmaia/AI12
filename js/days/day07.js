window.DAYS = window.DAYS || {};
DAYS[7] = {
  "title": "Integrity, privacy and ethics",
  "intro": "Your students have the same tools you do. Today is about the responsibilities that come with that: designing assessments that still measure learning, writing clear AI-use rules, protecting students' data, and applying Saudi and institutional principles for responsible AI.",
  "goals": [
    "Explain why AI detectors must not be used as sole evidence of misconduct.",
    "Write a clear AI-use statement for an assignment using a five-level scale.",
    "Anonymize data before using AI, and know what must never be pasted.",
    "Apply the SDAIA AI Ethics Principles to your own practice."
  ],
  "plan": {
    "learn": 12,
    "examples": 10,
    "practice": 18,
    "quiz": 5
  },
  "learn": [
    {
      "t": "h",
      "text": "Detectors are not evidence"
    },
    {
      "t": "p",
      "html": "AI-text detectors produce both false positives and false negatives, and research has found that they flag writing by non-native English speakers more often. Light editing easily defeats them. A detector score may prompt a conversation, but it must never be the sole evidence in an academic integrity case. Follow your university's procedures."
    },
    {
      "t": "h",
      "text": "Design assessment for a world with AI"
    },
    {
      "t": "p",
      "html": "Keep the outcome, change how students show it: assess the process as well as the product, add a short conversation, and use local context."
    },
    {
      "t": "fold",
      "title": "Five redesign ideas (open for the full list)",
      "blocks": [
        {
          "t": "list",
          "items": [
            "<b>Assess the process</b>, not only the product: proposals, drafts, reflections, version history.",
            "<b>Add a conversation:</b> a short oral check or viva on submitted work.",
            "<b>Use local and personal context:</b> a Saudi organization students visited, data they collected, class discussions.",
            "<b>Include supervised work</b> for outcomes that must be demonstrated individually.",
            "<b>Teach AI use</b> where it matches the outcome, and ask students to critique AI output."
          ]
        }
      ]
    },
    {
      "t": "h",
      "text": "Be explicit: a five-level scale"
    },
    {
      "t": "p",
      "html": "Students cannot follow rules they cannot see. The <b>AI Assessment Scale</b> (Perkins, Furze, Roe and MacVaugh), widely used in universities, gives each assignment a clear level:"
    },
    {
      "t": "table",
      "head": [
        "Level",
        "What students may do"
      ],
      "rows": [
        [
          "1. No AI",
          "Complete the work without AI, typically in a supervised setting."
        ],
        [
          "2. AI planning",
          "Use AI for brainstorming and planning; the final work is their own."
        ],
        [
          "3. AI collaboration",
          "Use AI to help draft and refine, then critically evaluate and modify its output."
        ],
        [
          "4. Full AI",
          "Use AI throughout, as needed, while directing the work and taking responsibility for it."
        ],
        [
          "5. AI exploration",
          "Use AI creatively to explore or co-design new approaches as part of the task."
        ]
      ]
    },
    {
      "t": "h",
      "text": "Privacy: what never goes into a public AI tool"
    },
    {
      "t": "p",
      "html": "Under the Saudi <b>Personal Data Protection Law (PDPL)</b> and your university's policies, student and staff data is protected. Unless your university has approved a tool for that data, do not paste: names with grades, university IDs, national ID or Iqama numbers, contact details, health or disability information, disciplinary cases, or confidential committee documents. Remove identifying details first, or use aggregated data. Check each tool's data settings (for example, whether your chats may be used to train models) and use university-provided accounts where they exist."
    },
    {
      "t": "saudi",
      "title": "SDAIA AI Ethics Principles",
      "html": "The Saudi Data and AI Authority (SDAIA) sets seven principles: <b>fairness</b>; <b>privacy and security</b>; <b>humanity</b>; <b>social and environmental benefits</b>; <b>reliability and safety</b>; <b>transparency and explainability</b>; and <b>accountability and responsibility</b>. For a faculty member, they translate into: check outputs for bias, protect data, keep a human in charge of decisions about people, verify before relying, tell students when AI was used, and own the result."
    },
    {
      "t": "tip",
      "title": "Your university's policy comes first",
      "html": "Institutions are publishing their own AI guidelines, and they can be stricter than general advice. Where they differ from this course, follow your university."
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "AI-use statement for an assignment",
      "text": "Write a clear AI-use statement for students for this assignment:\n<assignment>\n[Paste the assignment brief]\n</assignment>\nPermitted level: [e.g. Level 2 — AI planning] on the AI Assessment Scale.\nInclude: what is allowed, with examples; what is not allowed, with examples; how students must disclose AI use (a short appendix listing the tool, the purpose, and the prompts used); and the consequence of undisclosed use according to university regulations. Friendly, clear, under 200 words. Provide English and Arabic versions."
    },
    {
      "t": "prompt",
      "title": "Redesign an assignment for authentic learning",
      "text": "Here is an assignment that AI tools can now complete easily:\n<assignment>\n[Paste the assignment]\n</assignment>\nIt measures: [CLO]. Suggest 3 redesigns that still measure this CLO but require students' own thinking, process or local context. For each: what students do, what they submit, how it is graded, and extra marking time for me (low / medium / high)."
    },
    {
      "t": "prompt",
      "title": "Check a text for bias",
      "text": "Review these teaching materials for bias and cultural fit for students in Saudi Arabia:\n<material>\n[Paste case studies, examples or questions]\n</material>\nCheck for stereotypes (gender, nationality, region), examples that assume a non-Saudi context without reason, and anything that may be culturally inappropriate. List each issue with a suggested rewrite. If you find none, say so."
    }
  ],
  "tasks": [
    {
      "title": "Set the AI level for one assignment",
      "html": "Choose an assignment from this term. Decide its level on the scale yourself, then use the example prompt to draft the statement for students.",
      "check": [
        "I chose the level myself, based on what the CLO requires.",
        "The statement gives concrete examples of allowed and not-allowed use.",
        "It explains exactly how students disclose their AI use.",
        "I checked it against my university's AI and integrity policies."
      ]
    },
    {
      "title": "Anonymization drill",
      "html": "Take a real document you might want AI help with (an email thread, a list, a student submission). Make an anonymized copy before any AI use.",
      "check": [
        "I removed names, IDs, contact details and other identifying information.",
        "I checked that small details (a unique case, a rare combination) cannot identify the person.",
        "I reviewed the data and training settings of the AI tool I use."
      ]
    },
    {
      "title": "Twin step 6: write your twin's red lines",
      "html": "Write a short \"Red lines\" section for your teaching assistant, in your own words, in a file called \"Twin v0.1 - red lines\". Start from this list and adapt it: it <b>never handles student personal data</b>; it <b>never assigns grades</b>; it <b>never sends anything</b> on my behalf; it <b>never invents facts or references</b>; it <b>always flags uncertainty</b>; I review every output before use; I disclose AI use where my university's policy requires it (check your university's policy).",
      "check": [
        "My red lines cover data, grades, sending, invented facts, uncertainty, review and disclosure.",
        "Each rule is written as a clear instruction the assistant can follow.",
        "I added at least one rule specific to my course or discipline."
      ]
    }
  ],
  "quiz": [
    {
      "q": "A detector says a student essay is \"92% AI-generated\". What is the right response?",
      "o": [
        "Treat it as a reason to look closer and talk with the student, following university procedures",
        "Give the essay zero immediately",
        "Run a second detector and use the average",
        "Ignore it completely"
      ],
      "a": 0,
      "why": "Detectors are unreliable and can be biased. They are not sufficient evidence on their own."
    },
    {
      "q": "At \"AI planning\" level (level 2), students may…",
      "o": [
        "not use AI at all",
        "use AI for everything",
        "submit AI-written work with a disclosure",
        "use AI for brainstorming and planning, while the final work is their own"
      ],
      "a": 3,
      "why": "Level 2 allows AI for ideas and planning only."
    },
    {
      "q": "Which data can you safely paste into a general AI tool your university has not approved for student data?",
      "o": [
        "A list of students' names and midterm grades",
        "The class's grade distribution, with no names or IDs",
        "A student's email about a health condition",
        "Students' university IDs only"
      ],
      "a": 1,
      "why": "Aggregated, non-identifying data is appropriate. IDs are still identifying."
    },
    {
      "q": "Which of these is one of SDAIA's AI Ethics Principles?",
      "o": [
        "Speed and efficiency",
        "Profitability",
        "Transparency and explainability",
        "Automation first"
      ],
      "a": 2,
      "why": "The seven are: fairness; privacy and security; humanity; social and environmental benefits; reliability and safety; transparency and explainability; accountability and responsibility."
    },
    {
      "q": "An assignment can now be fully completed by AI. The best redesign usually…",
      "o": [
        "adds process, conversation or local context while still measuring the same CLO",
        "bans all devices",
        "doubles the word count",
        "removes the assignment"
      ],
      "a": 0,
      "why": "Redesign keeps the outcome and changes how students demonstrate it."
    }
  ],
  "cards": [
    {
      "f": "AI detectors in integrity cases",
      "b": "Unreliable and can be biased: never the sole evidence."
    },
    {
      "f": "The five levels of the AI Assessment Scale",
      "b": "No AI; AI planning; AI collaboration; Full AI; AI exploration."
    },
    {
      "f": "Data never to paste into an unapproved tool",
      "b": "Names with grades, IDs, national ID/Iqama, contacts, health, disciplinary or confidential committee data."
    },
    {
      "f": "SDAIA's seven AI ethics principles",
      "b": "Fairness; privacy and security; humanity; social and environmental benefits; reliability and safety; transparency and explainability; accountability and responsibility."
    },
    {
      "f": "PDPL",
      "b": "Saudi Personal Data Protection Law: student and staff personal data is protected."
    }
  ]
};
