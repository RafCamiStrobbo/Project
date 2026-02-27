# Creating Workspace Promptfiles

Promptfiles (slash commands) let you encode common tasks as reusable Markdown files that you can invoke in chat. This guide focuses on creating **workspace promptfiles** by hand.

## File Location

Workspace promptfiles must be placed in:
- `.github/prompts/` folder in your workspace root

You can configure additional locations using the `chat.promptFilesLocations` setting.

## File Naming

Promptfiles use the `.prompt.md` extension:
- Example: `.github/prompts/review-code.prompt.md`
- The filename becomes the default slash command name

## File Format

### Front-matter (Optional YAML Header)

```yaml
---
name: your-command-name
description: A short description of what this prompt does
---
```

Both fields are optional:
- `name`: The command name used after typing `/` in chat. If omitted, the filename is used.
- `description`: A brief explanation of the prompt's purpose.

### Body (Markdown)

After the front-matter, write your prompt instructions in Markdown:

```markdown
You are an expert code reviewer. Please review the selected code for:
- Code quality and best practices
- Potential bugs or security issues
- Performance optimizations

Provide specific, actionable feedback.
```

## Using Variables

Reference built-in variables with `${variableName}` syntax:

**Workspace variables:**
- `${workspaceFolder}` - Full path to workspace
- `${workspaceFolderBasename}` - Workspace folder name

**Selection variables:**
- `${selection}` - Currently selected text
- `${selectedText}` - Same as selection

**File context variables:**
- `${file}` - Current file path
- `${fileBasename}` - Current filename
- `${fileDirname}` - Current file's directory
- `${fileBasenameNoExtension}` - Filename without extension

**Input variables:**
- `${input:variableName}` - Captured from chat input
- `${input:variableName:placeholder}` - With placeholder text

## Referencing Files

Use Markdown links with relative paths (relative to the promptfile location):

```markdown
Follow the guidelines in [our style guide](../../docs/style-guide.md).
Review the implementation in [../src/main.ts](../src/main.ts).
```

## Referencing Tools

Reference agent tools using `#tool:<tool-name>` syntax:

```markdown
Use #tool:githubRepo to search the repository for similar implementations.
```

## Complete Example

File: `.github/prompts/create-component.prompt.md`

```markdown
---
name: create-component
description: Scaffold a new React component with TypeScript
---

Create a new React component in the directory: ${fileDirname}

Component name: ${input:componentName:ComponentName}

Requirements:
- Use TypeScript with proper types
- Include JSDoc comments
- Follow our [style guide](../../docs/STYLE.md)
- Add basic unit tests

Place the component in: ${workspaceFolder}/src/components/${input:componentName}
```

## Usage

After creating the promptfile, invoke it in chat by typing:
```
/your-command-name
```

The slash command list appears when you type `/` in the chat input.

## Tips

- Be specific about what the prompt should accomplish
- Include expected output format in your instructions
- Use variables to make prompts flexible and reusable
- Reference other workspace files instead of duplicating content
- Keep the description concise for easy identification in the command list
