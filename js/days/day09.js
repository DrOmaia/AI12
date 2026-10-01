window.DAYS = window.DAYS || {};
DAYS[9] = {
  "title": "Building a skill",
  "intro": "Yesterday your instructions lived inside one assistant. A skill is the portable version: a small folder of know-how that an AI tool can load only when a task needs it. Today you turn your voice profile into a voice skill and write one task skill for your teaching assistant.",
  "goals": [
    "Explain what a skill is and how it differs from a prompt and from custom instructions.",
    "Write a valid SKILL.md with a clear name and a description that says what it does and when to use it.",
    "Create a voice skill and one task skill for your own teaching assistant, and test both."
  ],
  "plan": {
    "learn": 10,
    "examples": 7,
    "practice": 20,
    "quiz": 5
  },
  "learn": [
    {
      "t": "h",
      "text": "What is a skill?"
    },
    {
      "t": "p",
      "html": "A <b>skill</b> is a folder that packages one procedure. It must contain a file called <code>SKILL.md</code>. It may also contain scripts, reference documents and assets (templates, example files). The AI reads only the short name and description at first, and loads the full instructions when your request matches. This is called <b>progressive disclosure</b>: the tool does not fill its context window with everything at once."
    },
    {
      "t": "steps",
      "items": [
        "<b>Folder:</b> <code>feedback-drafter/</code>. The folder name must equal the skill name.",
        "<b>Required file:</b> <code>SKILL.md</code> with a short header (frontmatter) and Markdown instructions.",
        "<b>Optional:</b> <code>references/</code> (your rubric, style samples), <code>scripts/</code>, <code>assets/</code>."
      ]
    },
    {
      "t": "h",
      "text": "Skill, prompt or custom instructions?"
    },
    {
      "t": "table",
      "head": [
        "Tool",
        "Lives in",
        "Used when"
      ],
      "rows": [
        [
          "<b>Prompt</b>",
          "One chat",
          "You paste it and run it once."
        ],
        [
          "<b>Custom instructions / project instructions</b>",
          "An account or a project",
          "Always applied inside that account or project."
        ],
        [
          "<b>Skill</b>",
          "A portable folder",
          "Loaded on demand when the task matches the description; can be reused across projects and, in tools that support it, across tools."
        ]
      ]
    },
    {
      "t": "p",
      "html": "The SKILL.md format is an open standard that several tools support. Availability differs by tool and by plan, so <b>check your tool's help pages</b>. If your tool has no skills feature, you lose nothing: paste the body of the skill into a Project or Gem as instructions. The Skill Builder has a view for exactly that."
    },
    {
      "t": "h",
      "text": "Anatomy of SKILL.md"
    },
    {
      "t": "prompt",
      "title": "The shape of a skill file",
      "text": "---\nname: feedback-drafter\ndescription: Drafts written feedback comments on a student's draft in my voice, using my rubric. Use when I ask for feedback comments, a feedback summary or a revision plan for a draft I paste in.\n---\n\n# Feedback drafter\n\n## Purpose\n...\n## Steps\n1. ...\n## Output format\n...\n## Boundaries\n..."
    },
    {
      "t": "list",
      "items": [
        "<b>name:</b> lowercase letters, digits and single hyphens (not at the start or end), up to 64 characters, and the same as the folder name.",
        "<b>description:</b> up to 1024 characters. It must say <b>what the skill does</b> and <b>when to use it</b>. This is the text the AI uses to decide whether to load the skill, so vague descriptions mean the skill never triggers.",
        "<b>Body:</b> purpose, steps, output format, boundaries, one or two examples. Keep it short; move long material into reference files."
      ]
    },
    {
      "t": "warn",
      "title": "Boundaries travel with the skill",
      "html": "Every skill you write for your twin repeats its red lines: no student personal data, no grades, no invented facts or references, flag uncertainty, you review the output. A skill that drafts feedback helps you write; it never decides a mark. Only install skills you wrote or have read in full: a skill is instructions, and a careless one can misdirect the AI."
    }
  ],
  "examples": [
    {
      "t": "prompt",
      "title": "Turn your voice profile into a voice skill",
      "text": "Below is my voice profile (style guide) for my teaching assistant. Convert it into a SKILL.md.\n\nRequirements:\n- name: lowercase letters, digits and single hyphens (not at the start or end), up to 64 characters, and the same as the folder name. Suggest: [my-name]-voice.\n- description: under 1024 characters; say what it does (rewrite or draft text in my voice) AND when to use it (whenever I ask for text that students or colleagues will read).\n- Body sections: Purpose, Voice rules (sentence length, tone, vocabulary, phrases I use and avoid), Output format, Boundaries (never invent facts or references; flag uncertainty; do not use student personal data; I review everything), Example (one short before/after).\n- Use only what is in my profile. If something is missing, list it under \"Questions for me\".\n\nMy voice profile:\n[paste your voice profile]",
      "after": "Check that the description states both what and when, that every rule comes from your profile (nothing invented), that the boundaries are present, and that the name follows the format."
    },
    {
      "t": "prompt",
      "title": "Write a task skill from a job you repeat",
      "text": "I repeat this task often: [task, e.g. drafting feedback comments on student drafts / planning a 90-minute lecture / writing MCQs from my slides].\n\nInterview me with up to 6 short questions, one at a time, to learn: the inputs I give, my steps, the output format I want, and what you must never do. Then write a SKILL.md named [task-name] with name, description (what + when), Purpose, Steps, Output format, Boundaries and one example. Reference my voice skill for tone instead of repeating it. Do not include student names, ID numbers or any personal data in the skill.",
      "after": "Read the steps against how you really do the task. Run the skill once on a sample with no personal data and edit the steps that did not match your practice."
    },
    {
      "t": "saudi",
      "title": "Keep skills free of personal data",
      "html": "A skill is a file you may copy, share with colleagues or upload to a tool. Examples inside it must be invented or anonymised. To respect PDPL and your university's rules, keep student data out of your skill files. Check your university's policy on what may be uploaded to AI tools."
    }
  ],
  "tasks": [
    {
      "title": "Twin step 8: write your voice skill",
      "html": "Use the first example prompt with your own voice profile from Days 2 and 3. Then open the <a href=\"skill.html\">Skill Builder</a>, paste or type the fields, and download the generated <code>SKILL.md</code>. If your tool has no skills feature, use the \"paste as custom instructions\" view and add it to your Project or Gem.",
      "check": [
        "My skill name uses lowercase letters, digits and single hyphens (not at the start or end), is up to 64 characters, and matches its folder name.",
        "The description says what the skill does and when to use it.",
        "I tested it on a short paragraph and the result sounded like me, or I edited the rules.",
        "The boundaries section repeats my red lines."
      ]
    },
    {
      "title": "Twin step 9: write one task skill",
      "html": "Pick one job you repeat (feedback drafter or lecture planner are good choices). Use the second example prompt, then build the file in the <a href=\"skill.html\">Skill Builder</a>. Test it on a task that contains no student personal data.",
      "check": [
        "The skill has purpose, steps, output format and boundaries.",
        "It refers to my voice skill instead of copying it.",
        "I ran it once, reviewed the output myself and fixed at least one weak step.",
        "I saved both skills in one folder named for my twin."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What is the one required file in a skill folder?",
      "o": [
        "README.txt",
        "SKILL.md",
        "script.py",
        "assets.zip"
      ],
      "a": 1,
      "why": "A skill needs SKILL.md. Scripts, references and assets are optional."
    },
    {
      "q": "Why does the description matter so much?",
      "o": [
        "It is the answer shown to students",
        "It sets the AI model's price tier",
        "The AI uses it to decide whether to load the skill for your request",
        "It holds the skill's full instructions"
      ],
      "a": 2,
      "why": "Only name and description are read first. A vague description means the skill is not triggered when it should be."
    },
    {
      "q": "Which description is best?",
      "o": [
        "Drafts feedback comments in my voice using my rubric. Use when I paste a student draft and ask for comments.",
        "Feedback tool.",
        "Helps with teaching.",
        "Very good skill for good feedback."
      ],
      "a": 0,
      "why": "It says what the skill does and when to use it, with no vague words."
    },
    {
      "q": "Your tool does not support skills. What is a sensible fallback?",
      "o": [
        "Put student examples in it to make it clearer",
        "Give up on reusable instructions",
        "Paste the skill body into a Project or Gem as instructions",
        "Rename the file to .exe"
      ],
      "a": 2,
      "why": "The skill body is ordinary instructions, so it works as custom or project instructions."
    },
    {
      "q": "What is progressive disclosure?",
      "o": [
        "Loading short descriptions first and the full skill only when needed",
        "Telling students gradually how you used AI",
        "Showing the AI's reasoning step by step",
        "Releasing grades in stages"
      ],
      "a": 0,
      "why": "It keeps the context window free until a skill is actually relevant."
    }
  ],
  "cards": [
    {
      "f": "Skill",
      "b": "A folder with SKILL.md (plus optional scripts, references, assets) that the AI loads when a task matches."
    },
    {
      "f": "SKILL.md header",
      "b": "name (lowercase letters, digits and single hyphens, not at the start or end, up to 64 characters, same as the folder name) and description (max 1024; what it does and when to use it)."
    },
    {
      "f": "Progressive disclosure",
      "b": "The AI reads names and descriptions first and loads full instructions only when needed."
    },
    {
      "f": "Skill vs prompt vs custom instructions",
      "b": "Prompt: one chat. Instructions: always on in an account or project. Skill: portable, loaded on demand."
    },
    {
      "f": "No skills in your tool?",
      "b": "Paste the skill body into a Project or Gem as standing instructions."
    }
  ]
};
