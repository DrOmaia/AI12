AI12 - AI for University Teaching in 12 Days
=============================================

AI12 is a free, self-paced, English-only course (30-45 minutes a day for 12 days)
that teaches university faculty in Saudi Arabia to use AI tools such as Gemini,
ChatGPT and Claude with skill and judgment, and ends with each learner building a
personal "digital teaching twin": a voice profile, a task skill, an agent
specification, a test report and a one-page twin card, all for their own use and
never student-facing. The site is plain HTML, CSS and JavaScript with no build
step, no server, no external scripts and no analytics. Progress is saved only in
the learner's own browser.


PUBLISH IT ON GITHUB PAGES (free)
---------------------------------
You need a free GitHub account. The repository must be PUBLIC for free Pages.

1. Sign in at https://github.com and click "New repository".
2. Repository name: AI12. Choose "Public".
   Leave "Add a README", ".gitignore" and "license" UNCHECKED. Click "Create repository".
3. On the new empty repository page, click "uploading an existing file".
4. Open the course folder on your computer. Select the site files and folders
   (see the list below) and drag them into the browser window.
   Drag the CONTENTS of the folder, so that index.html sits at the top level of the
   repository, not inside another folder.
5. Wait for the uploads to finish. Write a commit message such as "Initial release"
   and click "Commit changes".
   (If the browser refuses a large upload, upload the folders js, assets in
   separate batches.)
6. Go to Settings > Pages.
   Under "Build and deployment", set Source to "Deploy from a branch".
   Set Branch to "main" and folder to "/ (root)". Click Save.
7. Wait one to three minutes. Reload the Pages settings screen. A green box shows
   your address:
       https://YOUR-USERNAME.github.io/AI12/
8. Open the address and check: the home page loads, a Day 1 quiz works, a cheat
   sheet prints, and the certificate page says "locked".

Optional: to show a "Star on GitHub" link, open js/app.js, set
   const REPO_URL = "https://github.com/YOUR-USERNAME/AI12";
and upload the changed file again.


UPLOAD THESE
------------
index.html, lesson.html, lab.html, skill.html, twin.html, glossary.html,
review.html, cheatsheet.html, notes.html, certificate.html, setup.html,
README.txt, and the folders: assets (css, fonts) and js (including js/days).


DO NOT UPLOAD THESE (working files, not part of the site)
---------------------------------------------------------
tools/            validation scripts
.claude/          assistant configuration
CLAUDE.md         project brief
START-HERE.md     author's instructions


UPDATING LATER
--------------
Open the repository, click "Add file" > "Upload files", drag in the changed files
(same names replace the old ones) and commit. The site refreshes within minutes.
Refresh your browser with Ctrl+F5 to see changes.


PRIVACY
-------
The site makes no network calls other than loading its own files. Learners can
back up or reset their progress from setup.html.
