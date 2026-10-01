window.DAYS = window.DAYS || {};
DAYS[6] = {
  "title": "Working with files and research",
  "intro": "AI becomes far more reliable when it works from <i>your</i> material instead of its memory. Today you learn to upload files and ground answers in them, to use AI in your research workflow without importing its errors, and to respect confidentiality and publisher policies.",
  "goals": [
    "Ask grounded questions about an uploaded document and check the answers.",
    "Build a literature matrix from papers you supply.",
    "Know the limits: long files, scanned PDFs, tables, and invented citations.",
    "Apply publisher and confidentiality rules to AI use in research."
  ],
  "plan": {
    "learn": 11,
    "examples": 9,
    "practice": 18,
    "quiz": 5
  },
  "learn": [
    {
      "t": "h",
      "text": "Grounding: make it answer from your source"
    },
    {
      "t": "p",
      "html": "<b>Grounding</b> means tying the answer to a source you provide. Upload a PDF, Word file, slides or an image, then instruct: answer only from the document, quote or cite the section or page for each point, and say \"not found in the document\" when it is not there. Grounded answers are easier to check and far less likely to be invented."
    },
    {
      "t": "list",
      "items": [
        "<b>Scanned PDFs</b> are images of text. Most tools can read them, but errors are more likely, especially in Arabic. Check key numbers and names.",
        "<b>Tables and charts</b> can be misread. Ask the tool to reproduce the table first, compare it with the original, then analyze.",
        "<b>Very long files</b> may not get equal attention everywhere. Ask about specific sections, or split the work."
      ]
    },
    {
      "t": "tip",
      "title": "Source-grounded tools",
      "html": "Some tools are built to answer only from the sources you add, with citations to the exact passages. Google's <b>NotebookLM</b> is a well-known example, useful for a set of readings or your own course materials. Projects in ChatGPT and Claude also let you attach files that every chat in the project can use."
    },
    {
      "t": "h",
      "text": "AI in your research workflow"
    },
    {
      "t": "table",
      "head": [
        "Helpful",
        "Risky"
      ],
      "rows": [
        [
          "Suggesting search terms and synonyms (English and Arabic)",
          "Asking it to find references from memory"
        ],
        [
          "Summarizing papers you uploaded",
          "Citing a paper you have not read"
        ],
        [
          "Comparing methods and findings across papers you supplied",
          "Trusting numbers it reports without checking the paper"
        ],
        [
          "Improving the language and structure of your own draft",
          "Generating text you present as your own analysis"
        ]
      ]
    },
    {
      "t": "p",
      "html": "<b>Deep research</b> features (available in several tools) run many web searches and compile a report with links. They are useful for a first map of a topic. Treat the report as a list of leads: open the sources, prefer peer-reviewed and official ones, and verify every claim you keep. For scholarly searching, use Google Scholar, the <b>Saudi Digital Library</b>, and the databases your university library subscribes to."
    },
    {
      "t": "warn",
      "title": "Publisher rules and confidentiality",
      "html": "Major publishers do not accept AI tools as authors, and many require you to disclose how AI was used. Check the policy of the journal you target. When you review manuscripts for a journal, do not upload them to AI tools: they are confidential, and many publishers explicitly prohibit it. The same applies to unpublished work shared with you in confidence."
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "Grounded Q&A on an uploaded document",
      "text": "I have attached [document name]. Answer my questions using only this document.\nFor each answer: give the answer in 1–3 sentences, then the section or page it comes from, then a short quote as evidence.\nIf the document does not contain the answer, write \"Not found in the document\" and nothing else.\nMy first question: [question]"
    },
    {
      "t": "prompt",
      "title": "Literature matrix from papers you supply",
      "text": "I have attached [number] papers I have selected. Build a literature matrix using only these papers.\nColumns: Author(s) and year | Research question | Context and sample | Method | Key findings | Limitations | Relevance to my study on [your topic].\nUse the papers' own details; write \"not reported\" when something is missing. After the table, list 3 gaps across these papers that my study could address, and mark them as suggestions for me to evaluate."
    },
    {
      "t": "prompt",
      "title": "Search terms for the library databases",
      "text": "I am starting a literature search on [topic] in [discipline]. Give me: 1) 10 English keywords and synonyms, 2) the equivalent Arabic terms, 3) three Boolean search strings I can paste into a database such as Scopus or the Saudi Digital Library. Do not list any papers.",
      "after": "Notice the last line: it stops the model from inventing references and keeps it on the job it does well."
    },
    {
      "t": "prompt",
      "title": "Turn your slides into a study guide",
      "text": "I have attached my lecture slides for [topic]. Create a 2-page study guide for students using only the content in the slides: key ideas in plain language, a glossary of terms (English with Arabic equivalents), one worked example, and 5 self-check questions with answers at the end. Mark anything you had to infer that is not stated on the slides."
    }
  ],
  "tasks": [
    {
      "title": "Grounded Q&A check",
      "html": "Upload a document you own and that is not confidential (for example, your course syllabus or a published paper). Ask four questions with the grounded Q&A prompt; make one of them about something the document does not contain.",
      "check": [
        "I checked three answers against the document itself.",
        "For the question the document cannot answer, the tool said so (or I noted that it did not).",
        "I noted in my notes one thing the tool got wrong or only partly right, if any."
      ]
    },
    {
      "title": "Optional extra: a literature matrix for your research",
      "html": "Short on time? Skip this task. Otherwise upload just 2 papers you have already chosen and run the literature matrix prompt.",
      "check": [
        "Every row describes a paper I actually supplied.",
        "I spot-checked at least two cells (for example, sample size or method) against the papers.",
        "I checked my target journal's policy on disclosing AI use."
      ]
    },
    {
      "title": "Twin step 5: add a small source folder",
      "html": "Create a folder called \"Twin sources\" with 3 to 5 of your own course files that are safe to share, for example your syllabus, a lecture outline and a style note. No student data, answer keys or confidential files. Upload them to your AI tool and ask: \"Using only these files, summarize my course in five lines and list what is missing.\"",
      "check": [
        "Every file in the folder is mine and safe to share.",
        "The summary matched my files, and I noted what the tool said was missing.",
        "I saved a list of the files in the folder, so I can update them later."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What does \"grounding\" an answer mean?",
      "o": [
        "Making the answer shorter",
        "Turning off the internet",
        "Tying the answer to a source you provide, with references to where it came from",
        "Asking the same question twice"
      ],
      "a": 2,
      "why": "Grounded answers can be checked against the source and are much less likely to be invented."
    },
    {
      "q": "You are reviewing a manuscript for a journal. May you upload it to an AI tool for a summary?",
      "o": [
        "No; manuscripts under review are confidential and many publishers prohibit it",
        "Yes, if the summary is only for you",
        "Yes, if you delete the chat afterwards",
        "Yes, if it is in Arabic"
      ],
      "a": 0,
      "why": "Peer review is confidential. Follow the journal's reviewer guidelines, which usually forbid uploading manuscripts to AI tools."
    },
    {
      "q": "Which is the safest way to use AI for a literature review?",
      "o": [
        "Ask it for the 20 most important papers and cite them",
        "Copy its literature review into your paper",
        "Let a deep research report replace reading",
        "Find papers in scholarly databases, then use AI to summarize and compare the ones you supply"
      ],
      "a": 3,
      "why": "You control the sources; AI helps process them. You still read what you cite."
    },
    {
      "q": "A scanned Arabic PDF is analyzed and one figure looks surprising. What is the best step?",
      "o": [
        "Trust it; the tool read the file",
        "Check the figure against the original page",
        "Ask for a longer analysis",
        "Convert the file to Word"
      ],
      "a": 1,
      "why": "Reading text from images is error-prone, especially numbers and Arabic script. Verify key values."
    },
    {
      "q": "How should you treat a deep research report?",
      "o": [
        "As a finished literature review",
        "As peer-reviewed evidence",
        "As a list of leads: open the sources and verify what you keep",
        "As something to ignore"
      ],
      "a": 2,
      "why": "Deep research speeds up discovery, but its sources vary in quality and its summaries can be wrong."
    }
  ],
  "cards": [
    {
      "f": "Grounding",
      "b": "Tying answers to a source you provide, with a reference or quote for each point."
    },
    {
      "f": "The grounding line to add",
      "b": "\"Use only this document. If it is not there, say 'Not found in the document'.\""
    },
    {
      "f": "NotebookLM",
      "b": "A Google tool that answers from the sources you add, with citations to the passages."
    },
    {
      "f": "Manuscripts you review for a journal",
      "b": "Confidential: do not upload them to AI tools."
    },
    {
      "f": "Deep research report",
      "b": "A list of leads to verify, not a finished literature review."
    }
  ]
};
