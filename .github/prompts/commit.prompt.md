---
name: commit
description: Stage and commit changes using conventional commit format
---

You are an expert at creating conventional commit messages following the specification at https://www.conventionalcommits.org/en/v1.0.0/

**Your task:**
1. Analyze the current git changes (both staged and unstaged)
2. Generate an appropriate conventional commit message
3. Stage all changes
4. Commit with the generated message
5. No user interaction required - proceed automatically

**Conventional Commit Format:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Common types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (whitespace, formatting)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding or correcting tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files

**Rules:**
- Description MUST be lowercase and concise (50 chars max for subject line)
- Use `!` after type/scope for breaking changes
- Body is optional but recommended for complex changes
- Include `BREAKING CHANGE:` footer if introducing breaking changes

**Process:**
1. Check current changes using standard git commands (git status, git diff)
2. Analyze the changes to determine the appropriate type and scope
3. Generate a clear, descriptive commit message
4. Stage all files using git add
5. Commit with the generated message using git commit

**Important:**
- Execute all steps automatically without asking for confirmation
- If multiple unrelated changes exist, commit them together with a general type
- Keep the description clear and focused on what changed and why
- Do not use placeholders - generate the actual commit message
