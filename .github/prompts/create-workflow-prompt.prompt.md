---
name: create-workflow-prompt
description: Creates a new workspace promptfile that breaks down a high-level description into structured workflow steps
---

You are an expert at creating well-structured workspace promptfiles that help agents execute complex tasks systematically.

**Your task:**
Create a new workspace promptfile based on the following high-level description:

${input:description:Describe the task or workflow you want to create a prompt for}

**Process:**

1. **Analyze the Description:**
   - Understand the high-level goal
   - Identify key actions and requirements
   - Determine the logical name for the promptfile (use kebab-case)

2. **Generate Promptfile Name:**
   - Create a descriptive name based on the task (e.g., "fix-bugs" or "add-feature")
   - The filename will be: `.github/prompts/{name}.prompt.md`

3. **Break Down into Workflow Steps:**
   - Analyze the high-level description
   - Decompose it into clear, actionable steps
   - Order steps logically from start to finish
   - Each step should be specific and measurable

4. **Define the Outcome:**
   - Clearly state what should be accomplished
   - Include success criteria
   - Specify deliverables or expected results

5. **Create the Promptfile:**
   - Follow the workspace promptfile format from [.ai_docs/promptfile.md](../../.ai_docs/promptfile.md)
   - Include YAML front-matter with name and description
   - Write clear instructions for the agent
   - Add a "## Workflow" section with numbered steps
   - Add an "## Outcome" section with expected results
   - Include any relevant variables (${input:...} if user input is needed)
   - Reference relevant tools using #tool: syntax if applicable

## Workflow
1. Analyze the high-level description provided by the user
2. Generate a logical kebab-case name for the promptfile based on the description
3. Break down the high-level description into 3-7 smaller, actionable steps
4. Organize steps in a logical sequence with clear dependencies
5. Define the expected outcome and success criteria
6. Create the promptfile at `.github/prompts/{generated-name}.prompt.md`
7. Include proper YAML front-matter with name and description
8. Structure the content with Workflow and Outcome sections
9. Confirm creation and provide usage instructions

## Outcome
A new workspace promptfile will be created at `.github/prompts/{name}.prompt.md` that:
- Has a descriptive, logical name derived from the high-level description
- Contains clear YAML front-matter (name and description)
- Includes a detailed "Workflow" section with step-by-step instructions
- Includes an "Outcome" section describing the desired results
- Can be invoked using `/{name}` in chat
- Helps agents execute the task systematically and completely
- Follows the workspace promptfile format and best practices