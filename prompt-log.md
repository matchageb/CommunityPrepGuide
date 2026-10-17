# Community Preparedness Guide — Prompt Log
---------------------------------------------------------------------------------------------------
# Task 1 — Sector Selection

## Objective
Select a sector, identify its target users and local challenge, and propose features that address the problem.

## Selected Sector
Disaster Risk Reduction / Climate Change Adaptation

## Local Challenge
Residents need an easy-to-understand household disaster-preparedness checklist to help them prepare for emergencies.

## Target Users
Community residents and households in the local Philippine community.

## Proposed Project
Community Preparedness Guide — “Ready Together”

## Key Features
1. Preparedness Checklist — Helps households track important preparation tasks.
2. Emergency Kit Guide — Provides guidance on essential emergency supplies.
3. Evacuation Reminders — Presents general reminders to help households prepare for evacuation.

## Project Concept
The Community Preparedness Guide, “Ready Together,” is a simple website designed to help residents and households in a local Philippine community prepare for disasters. It addresses the need for clear and accessible household preparedness information through an interactive checklist, an emergency kit guide, and general evacuation reminders.

## Expected Output
A short project concept describing the local problem, proposed solution, target users, and key features.

---------------------------------------------------------------------------------------------------

## Task 2 — Zero-Shot Prompting

### Objective
Observe what GitHub Copilot generates from a basic prompt without examples.

### Exact Prompt
Create a simple webpage for a Community Preparedness Guide that helps residents prepare for disasters.

### Actual Copilot Output
Created the preparedness guide with a household checklist, saved progress, practical planning advice, and Ready.gov resource links. The page opened successfully, and the checklist script passed a syntax check. The browser interaction test was skipped, so reload persistence remains unverified. The generated project files are `index.html`, `style.css`, and `script.js`. The baseline HTML copy is saved in `outputs/task2-zero-shot.html`.

### What Worked
The generated webpage displays a Community Preparedness Guide interface titled “Ready Together.” It includes a navigation menu with sections for getting ready, the checklist, and local resources. The page also has a clear heading and introductory text about household disaster preparedness.

### What Needs Improvement
The checklist interaction and saved progress after reloading the page still need verification. The mobile layout and keyboard accessibility also need testing.

### Next Action / Verification
Preserve the baseline output before applying the structured prompt in Task 3. Test the checklist and verify whether its progress persists after reloading the page.

---------------------------------------------------------------------------------------------------

## Task 3 — Structured Prompting

### Objective
Improve the relevance and functionality of the Community Preparedness Guide using structured prompt components.

### Exact Prompt
Act as a frontend web developer. Improve my Community Preparedness Guide into a responsive single-page website for households in a local Philippine community.

*Context:* Residents need a simple way to learn about household disaster preparedness.

*Requirements:*
1. Include an interactive preparedness checklist with checkboxes.
2. Include an emergency kit guide.
3. Include general evacuation reminders.
4. Use semantic HTML, CSS, and vanilla JavaScript.
5. Make the interface readable on mobile screens.
6. Ensure the checklist works with mouse and keyboard interaction.
7. Do not use external frameworks, backend services, or live hazard data.
8. Use clearly labeled educational information.

*Expected output:* Working frontend code using HTML, CSS, and JavaScript.

*Acceptance criteria:* The checklist can be checked and unchecked, the page is usable on mobile screens, and all interactive controls have appropriate labels.

Review the existing project files before making changes. Explain which files you intend to modify and preserve my original zero-shot baseline in the outputs folder.

### Actual Copilot Output
Updated `index.html` and `style.css` with Philippine-focused household preparedness, an emergency kit guide, evacuation reminders, and responsive layouts. The existing labeled checklist and its mouse, keyboard, and saved-progress behavior in `script.js` remain unchanged. Copilot left `task2-zero-shot.html` untouched as the baseline.

JavaScript syntax, required-content assertions, and file diagnostics passed. The browser interaction check was skipped, so mouse/keyboard behavior and mobile rendering were not verified in-browser.

### What Worked
Compared with Task 2, the updated webpage includes more detailed disaster preparedness features, such as an interactive household checklist, a household emergency kit guide, and local guidance resources. The checklist updates the progress counter when items are checked, making it easier for users to track their preparedness tasks. The webpage also has a clear layout and organized sections.

### What Needs Improvement
Progress persistence after reloading the page still needs verification. Local resource links and contact information should be checked for accuracy and functionality. Mobile responsiveness and keyboard accessibility also needed further testing.

### Next Action / Verification
Compare the structured output with the zero-shot baseline. Test the checklist, mobile layout, and keyboard accessibility.

---------------------------------------------------------------------------------------------------

## Task 4 — Prompting Experiments

### Experiment A — Few-Shot Prompting

#### Objective
Guide Copilot in generating preparedness checklist items by providing examples of the expected format.

#### Exact Prompt
Create preparedness checklist items using this format:

*Example 1*

Item: Emergency flashlight

Category: Emergency Kit

Description: Keep a working flashlight available.

*Example 2*

Item: Drinking water

Category: Emergency Kit

Description: Prepare an appropriate emergency water supply.

Generate four additional general preparedness items using the same format and render them as a checklist.

Use the existing Community Preparedness Guide project as context. Do not modify any project files yet. Show the generated checklist items and explain how they follow the examples.

#### Actual Copilot Output
Saved in `outputs/task4-few-shot-output.md`.

The generated items were:
1. Waterproof document pouch — Emergency Kit.
2. Household emergency contacts — Family Plan.
3. Family meeting place — Evacuation Plan.
4. Pet evacuation supplies — Emergency Kit.

Each item included a short description.

#### What Worked
Copilot generated four additional preparedness checklist items using the requested Item, Category, and Description format. The examples helped guide the structure and consistency of the generated content. The items covered document storage, emergency contacts, a family meeting place, and pet evacuation supplies.

#### What Needs Improvement
The generated items should be reviewed for accuracy, clear wording, and relevance before being added to the website. They have not been confirmed as new items implemented in the actual webpage.

#### Next Action / Verification
Review the four generated items and confirm that they follow the requested format and fit the existing Community Preparedness Guide.

### Experiment B — Role Assignment

#### Objective
Examine the Community Preparedness Guide from the perspective of a frontend accessibility reviewer.

#### Exact Prompt
Act as a frontend accessibility reviewer. Examine the generated Community Preparedness Guide. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

#### Actual Copilot Output
Saved in `outputs/task4-role-assignment-output.md`.

Copilot identified possible accessibility improvements involving text contrast and the reset button's tap target. It also recognized existing accessibility features, including native checkboxes wrapped in labels and a visible keyboard-focus style. No project files were changed during this review.

#### What Worked
Assigning Copilot an accessibility reviewer role focused the analysis on semantic HTML, keyboard access, labels, and visual clarity. It identified possible improvements while recognizing existing accessibility features.

#### What Needs Improvement
The recommended contrast and tap-target improvements still need evaluation. The reset button's actual rendered dimensions were not measured in a browser, so its tap-target concern has not been confirmed through browser testing.

#### Next Action / Verification
Evaluate the recommendations and test the relevant visual and keyboard interactions in the browser if changes are applied.


---------------------------------------------------------------------------------------------------

## Task 5 — Structured Reasoning and Refinement

### Analysis Prompt
Review my Community Preparedness Guide website, “Ready Together,” against the original project requirements.

Check whether:
1. The interactive preparedness checklist works correctly, including checking and unchecking items and updating the progress counter.
2. The HTML uses appropriate semantic elements and accessible labels.
3. The layout remains readable and usable on mobile screens.
4. The JavaScript correctly saves, restores, and resets checklist progress, if these features are implemented.

Identify the two most important implementation issues based on the actual project files. Do not assume an issue exists without evidence from the code.

For each issue:
- Identify the relevant file and code location.
- Explain the problem briefly.
- Recommend the smallest appropriate correction.
- Explain how I can verify the correction in the browser.

Do not rewrite the entire project. Do not use external frameworks, backend services, or live hazard data. Preserve the existing design and keep the Task #2 and Task #3 output files unchanged.

If the existing implementation already meets a requirement, state that clearly. Distinguish issues confirmed from code inspection from behavior that still requires browser testing.

### AI Findings
1. The mobile supporting text was set to `12px` in `style.css`. Copilot recommended increasing it to `14px` in the mobile media query to improve readability.
2. The progress bar maximum was hard-coded to `6` in `index.html`. Copilot recommended setting the maximum dynamically based on the number of checklist items.

Copilot also reported that native labeled checkboxes, keyboard-focus styling, checklist count updates, storage restoration, and reset behavior were implemented. A Node simulation reportedly passed, but actual browser interaction was not performed during that analysis.

### Changes Made
Updated `style.css` by adding a mobile-specific rule inside `@media (max-width: 520px)` to increase checklist supporting text from `12px` to `14px`.

### Verification Status
Tested the website in the browser's mobile device view. The checklist descriptions were readable, the page content fit within the mobile screen, and checking and unchecking items correctly updated the progress counter.

The hard-coded progress bar maximum was identified as a potential issue, but this log does not record a corresponding code change or verification.

### Next Action
Compare the prompting techniques and select the version that best satisfies the original project requirements.

---------------------------------------------------------------------------------------------------

## Task 6 — Final Comparison and Reflection

### Final Comparison Table

| Technique | Observation |
|---|---|
| Zero-Shot Prompting | The initial prompt was simple and provided limited details about the required features. It produced a starting point for the Community Preparedness Guide. |
| Structured Prompting | Adding a role, context, requirements, constraints, expected output, and acceptance criteria gave Copilot clearer instructions for the website. |
| Few-Shot Prompting | Examples guided Copilot in generating four preparedness checklist items with a consistent format. The items still needed review before being added to the website. |
| Role Assignment | Copilot reviewed accessibility and identified possible improvements involving text contrast and the reset button's tap target. These recommendations still needed evaluation. |
| Structured Analysis | Copilot identified mobile text readability and the hard-coded progress bar maximum as potential improvements. The mobile text size was increased, and the mobile layout and checklist counter were tested in the browser. |

---------------------------------------------------------------------------------------------------

### MY Final Reflection

Throughout this activity, I learned that the quality of AI-generated web development output depends on how clearly the prompt describes the requirements.

Zero-shot prompting provided a starting point for the Community Preparedness Guide, while structured prompting gave Copilot clearer instructions about the website's features, technologies, and acceptance criteria. Few-shot prompting demonstrated how examples can guide the format of generated checklist items. Role assignment helped identify possible accessibility improvements, while structured analysis identified potential implementation weaknesses and suggested targeted corrections.

During verification, I increased the checklist supporting text size for mobile screens and tested the website in mobile device view. The checklist counter updated correctly when items were checked and unchecked, and the page content fit within the mobile screen.

This activity taught me that AI recommendations should not automatically be treated as verified solutions. Developers must inspect the generated code, test the website, document the actual results, and preserve earlier outputs for comparison.

For the final prototype, I would select the current Community Preparedness Guide because it includes the structured features and mobile text refinement. I would continue reviewing the remaining recommendations and testing the website before considering all requirements fully verified.
