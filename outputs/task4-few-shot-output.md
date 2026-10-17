## Task #4 – Few-Shot Prompting with Role Assignment

**Technique:** Few-Shot Prompting with Role Assignment

**Exact Prompt:**  
Act as an experienced frontend web developer and UI/UX designer.

Task: Improve my existing Community Preparedness Guide website, “Ready Together,” using few-shot prompting.

Context: The website helps households in a local Philippine community prepare for disasters. Keep the existing design and features while improving the clarity and usability of the preparedness checklist.

Examples of the desired behavior:

- Example 1: When a user checks a preparedness item, the progress counter should update to reflect the completed items.
- Example 2: When a user unchecks an item, the progress counter should decrease accordingly.
- Example 3: Checklist items should have clear, readable labels and be usable with a mouse or keyboard.
Requirements:

1. Review the existing HTML, CSS, and JavaScript before making changes.
2. Preserve the current website content and visual style where possible.
3. Use only HTML, CSS, and vanilla JavaScript.
4. Do not use external frameworks or backend services.
5. Explain which files you plan to modify and why.
6. Preserve the Task #2 baseline and the Task #3 output files in the outputs folder.
7. Do not claim a feature works unless it has been implemented and verified.
Expected output: Improved frontend code and a brief explanation of the changes.

Acceptance criteria: The checklist and progress counter work correctly when items are checked and unchecked, and the controls remain accessible.

**Actual AI Output:**  
Saved in `outputs/task4-few-shot-output.md`.

**Observation:**  
Copilot reviewed the existing HTML, CSS, and JavaScript and reported that the requested checklist behavior was already implemented. It made no code edits. A Node simulation reportedly verified counter updates, saved-state restoration, and reset behavior. Actual browser interaction was not verified because the browser test was skipped.

**Next Action:**  
Manually test the checklist in the browser, including checking and unchecking items, refreshing the page to check saved progress, and testing the reset behavior if available.