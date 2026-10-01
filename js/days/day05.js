window.DAYS = window.DAYS || {};
DAYS[5] = {
  "title": "Assessment, rubrics and feedback",
  "intro": "Writing good questions, clear rubrics and useful feedback is some of the most time-consuming work in teaching. AI can multiply your output here, and it can also produce wrong answer keys and generic feedback. Today you learn to use it for assessment with a verification habit built in.",
  "goals": [
    "Generate multiple-choice questions with plausible distractors and verify them.",
    "Build an analytic rubric aligned to a CLO.",
    "Draft specific feedback on anonymized student work, then edit it.",
    "Use aggregated results to draft the analysis in a course report."
  ],
  "plan": {
    "learn": 12,
    "examples": 12,
    "practice": 16,
    "quiz": 5
  },
  "learn": [
    {
      "t": "h",
      "text": "Questions: quantity is easy, quality is your job"
    },
    {
      "t": "p",
      "html": "AI can write twenty questions in seconds. The real value comes when you specify the CLO, the cognitive level, and the misconceptions the distractors should reflect, then check every item. Tag each question with the CLO it measures; that makes your course report easier later."
    },
    {
      "t": "warn",
      "title": "Solve every question yourself",
      "html": "AI-generated answer keys are sometimes wrong, and some items end up with two defensible answers or none. Before any question reaches students, answer it yourself without looking at the key."
    },
    {
      "t": "h",
      "text": "Rubrics"
    },
    {
      "t": "p",
      "html": "An <b>analytic rubric</b> scores several criteria separately (for example: analysis, use of evidence, structure, language), each with performance levels and descriptors. AI drafts rubrics quickly; your job is to make each descriptor observable (what you would actually see in the work) and to make the levels clearly different from each other."
    },
    {
      "t": "h",
      "text": "Feedback on student work"
    },
    {
      "t": "steps",
      "items": [
        "<b>Remove identity first:</b> delete names, IDs and anything that identifies the student before pasting.",
        "<b>Give the rubric and the task</b>, so the feedback is tied to your criteria, not generic praise.",
        "<b>Ask for specific, actionable feedback:</b> one strength with evidence, two improvements with a concrete next step.",
        "<b>Edit before sending.</b> You decide the grade; AI drafts the words. Students deserve to know feedback reflects your judgment."
      ]
    },
    {
      "t": "saudi",
      "title": "Course reports",
      "html": "At the end of term, the NCAAA course report asks you to analyze results and CLO achievement and to propose improvements. Paste <b>aggregated</b> numbers only (averages, grade distribution, percentage of students reaching each CLO target) and ask AI to draft the analysis and an action plan. Never paste individual students' grades."
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "Multiple-choice questions tied to a CLO",
      "text": "Write 5 multiple-choice questions for [course], measuring this CLO: \"[CLO code: statement]\".\nLevel: at least 3 questions at the \"apply\" or \"analyze\" level.\nRules: 4 options; exactly one correct answer; each wrong option reflects a real student misconception about [topic]; no \"all/none of the above\"; options similar in length; no grammatical clues.\nFormat for each: the question, options A–D, the correct letter, a one-line explanation of why each wrong option is wrong, and the cognitive level."
    },
    {
      "t": "prompt",
      "title": "Analytic rubric",
      "text": "Create an analytic rubric for this assignment:\n<assignment>\n[Paste the assignment brief]\n</assignment>\nIt measures: [CLO codes and statements].\nCriteria: 4–5, each linked to a CLO. Levels: Excellent, Good, Satisfactory, Needs improvement, with points [e.g. 4/3/2/1].\nEvery descriptor must describe something observable in the student's work. Make adjacent levels clearly different.\nFormat: a table. Then write the same rubric in Arabic."
    },
    {
      "t": "prompt",
      "title": "Feedback draft on anonymized work",
      "text": "You are helping me write feedback. I decide the grade; you draft the words.\n<rubric>\n[Paste the rubric]\n</rubric>\n<student_work>\n[Paste the work with name and ID removed]\n</student_work>\nWrite feedback addressed to the student (\"you\"): one specific strength with a short quote from the work as evidence; two improvements, each with one concrete next step; one encouraging closing sentence. Maximum 150 words. Do not suggest a grade."
    },
    {
      "t": "prompt",
      "title": "Course report analysis from aggregated results",
      "text": "Draft the results analysis section of an NCAAA course report for [course], [term].\nAggregated data (no student-level data):\n<data>\nEnrolled: [n]; completed: [n]; grade distribution: A [%], B [%], C [%], D [%], F [%]\nCLO achievement (target: [e.g. 70% of students reach a score of 70% or more]):\nCLO1 [x%], CLO2 [x%], CLO3 [x%] …\nChanges made this term: [ … ]\n</data>\nWrite: 1) a short interpretation of the results, 2) CLOs below target with possible reasons (label them as hypotheses for me to confirm), 3) three concrete improvement actions for next term with responsible person and timing."
    }
  ],
  "tasks": [
    {
      "title": "Five verified questions",
      "html": "Generate 5 MCQs for one of your CLOs with the example prompt, then verify every item.",
      "check": [
        "I answered every question myself before looking at the key.",
        "I fixed or removed any question with a wrong key, two correct answers, or a clue.",
        "Each kept question is tagged with its CLO and cognitive level."
      ]
    },
    {
      "title": "A rubric you would actually use",
      "html": "Build a rubric for a real assignment this term, then test it on one piece of anonymized past work.",
      "check": [
        "Each criterion links to a CLO.",
        "I rewrote at least one vague descriptor into something observable.",
        "I removed all identifying information before pasting any student work."
      ]
    },
    {
      "title": "Twin step 4: add your feedback and rubric standards",
      "html": "Add to \"Twin v0.1 - standards\": your rubric from task 2 (without any student work) and a short feedback style note. Then ask your AI tool to write feedback comments on one invented paragraph, or a fully anonymised one only if your university's policy allows uploading student work to this tool, using only your standards. The comments are drafts for you to review. The assistant does not grade.",
      "check": [
        "The rubric and feedback note are saved in my standards file.",
        "The draft comments follow my rubric and sound like me.",
        "I changed or rejected at least one comment, and I made the final judgement myself."
      ]
    }
  ],
  "quiz": [
    {
      "q": "AI generated 10 MCQs with an answer key. What must you do before using them?",
      "o": [
        "Solve each question yourself and fix flawed items",
        "Nothing; the key is generated with the questions",
        "Ask the AI to confirm the key",
        "Shuffle the options"
      ],
      "a": 0,
      "why": "Keys can be wrong, and items can have two answers or clues. Only your own check catches this reliably."
    },
    {
      "q": "What makes a good distractor (wrong option)?",
      "o": [
        "It is obviously silly",
        "It is much longer than the correct answer",
        "It reflects a real student misconception",
        "It says \"all of the above\""
      ],
      "a": 2,
      "why": "Misconception-based distractors separate students who understand from those who do not."
    },
    {
      "q": "Before pasting a student's essay to draft feedback, you should…",
      "o": [
        "remove names, IDs and any identifying details",
        "add the student's ID so feedback is personal",
        "translate it into English",
        "paste the whole class's essays at once"
      ],
      "a": 0,
      "why": "Student work is personal data. Anonymize first, and follow your university's rules on approved tools."
    },
    {
      "q": "A good rubric descriptor is…",
      "o": [
        "\"Shows excellent understanding\"",
        "\"Good work\"",
        "\"Tries hard\"",
        "\"Supports each claim with at least one relevant, cited source\""
      ],
      "a": 3,
      "why": "Observable descriptors let you and students see exactly what earns each level."
    },
    {
      "q": "For the course report, what data should you paste into an AI tool?",
      "o": [
        "The full grade sheet with names",
        "Aggregated results: averages, distributions, CLO achievement percentages",
        "Students' IDs only, without names",
        "Nothing; AI cannot help with reports"
      ],
      "a": 1,
      "why": "Aggregated data is enough for analysis and protects students' privacy. IDs are still identifying."
    }
  ],
  "cards": [
    {
      "f": "First rule for AI-generated questions",
      "b": "Solve each one yourself before trusting the key."
    },
    {
      "f": "Analytic rubric",
      "b": "Scores several criteria separately, each with levels and observable descriptors."
    },
    {
      "f": "Four steps for AI-drafted feedback",
      "b": "Anonymize, give rubric and task, ask for specific actionable points, edit before sending."
    },
    {
      "f": "Good distractor",
      "b": "A wrong option based on a real student misconception."
    },
    {
      "f": "Data for course report prompts",
      "b": "Aggregated only: averages, distributions, CLO achievement. Never individual grades."
    }
  ]
};
