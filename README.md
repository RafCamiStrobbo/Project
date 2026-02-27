# GitProTime Project

This project contains workspace promptfiles and documentation for efficient Git workflow automation using AI-powered tools.

## Project Structure

```
Project/
├── .ai_docs/
│   └── promptfile.md          # Documentation on creating workspace promptfiles
├── .github/
│   └── prompts/
│       ├── commit.prompt.md   # Conventional commit automation prompt
│       └── readme.prompt.md   # README generation prompt
├── DEVLOG.md                  # Development log and project notes
└── README.md                  # This file
```

## Workspace Promptfiles

This project includes custom workspace promptfiles located in [.github/prompts/](.github/prompts/). These promptfiles enable slash commands in GitHub Copilot Chat for common development tasks.

### Available Prompt Files

| Prompt File | Command | Description |
|-------------|---------|-------------|
| [commit.prompt.md](.github/prompts/commit.prompt.md) | `/commit` | Stages and commits changes using conventional commit format |
| [readme.prompt.md](.github/prompts/readme.prompt.md) | `/readme` | Creates or updates the README.md file with project information |

### Prompt File Descriptions

#### 1. commit.prompt.md
**Purpose:** Automates the Git commit process with conventional commit messages

This promptfile handles the complete Git commit workflow automatically without user interaction:
- Analyzes current git changes (staged and unstaged)
- Generates appropriate conventional commit messages following the specification at https://www.conventionalcommits.org/
- Stages all changes
- Commits with the generated message

**Supported commit types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Test additions or corrections
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes

**Usage:** Simply type `/commit` in GitHub Copilot Chat to automatically stage and commit your changes.

#### 2. readme.prompt.md
**Purpose:** Creates or updates the README.md file with relevant project information

This promptfile automates README generation by:
1. Analyzing the project structure
2. Finding all prompt files in the project
3. Understanding the purpose of each prompt file
4. Generating a comprehensive README with:
   - Current project structure
   - List of all prompt files
   - Detailed description of each prompt file's purpose

**Usage:** Type `/readme` in GitHub Copilot Chat to generate or update the README.md file.

## Documentation

The [.ai_docs/promptfile.md](.ai_docs/promptfile.md) file contains comprehensive documentation on how to create workspace promptfiles manually, including:
- File location and naming conventions
- Front-matter configuration (name, description)
- Using variables (workspace, selection, file context, input)
- Referencing files and tools
- Complete examples

## Getting Started

1. Ensure you have GitHub Copilot enabled in VS Code
2. Open the workspace in VS Code
3. Use the `/commit` command to automatically commit changes
4. Use the `/readme` command to update this README file

## Contributing

When adding new promptfiles:
1. Place them in [.github/prompts/](.github/prompts/) with the `.prompt.md` extension
2. Include front-matter with `name` and `description` fields
3. Follow the guidelines in [.ai_docs/promptfile.md](.ai_docs/promptfile.md)
4. Update this README using the `/readme` command

## Resources

- [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)
- [VS Code Prompt Files Documentation](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
