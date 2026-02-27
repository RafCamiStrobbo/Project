create `.ai_docs/promptfile.md` that explains on how to create a workspace promptfile using the information at this url `https://code.visualstudio.com/docs/copilot/customization/prompt-files`:
- focus ONLY on workspace promptfile
- only name and description in front-matter
- limit to instructions to write it in markdown by hand



create workspace promptfile `/commit` {see `.ai_docs/promptfile.md`} that stages and commits using git:
- no user interaction
- follow convensional commit message described in `https://www.conventionalcommits.org/en/v1.0.0/`

instructions from promptfile.md 
stage commit changes git
no questions for user
convensional commit message described in `https://www.conventionalcommits.org/en/v1.0.0/`


create a new workspace promptfile `/create-workflow-prompt` {see `.ai_docs/promptfile.md`} which contains
- based on a given high level description (given as an argument)
- create a promptfile with a logical name based on description
- translate a given high level description into smaller steps for agents
- include section workflow with a description of steps which are needed to achive a given description
- include section outcome with a desired outcome


/create-workflow-prompt
Create a detailed implementation plan for the given feature (specs file ref will be given as an argument)
- The API contracts should be as simple as possible and well defined.
- Include psuedo code for the most relevant bits.
- Include a testing plan (unit-tests).
- The plans must be stored in `.ai_docs/plans/{spec_name}.md` where spec_name is taken from the file ref argument.
- The plan must be clear for a junior developer and include all nessecary details.
