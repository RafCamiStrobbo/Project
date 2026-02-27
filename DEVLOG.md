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


/create-workflow-prompt
implement plan that is created by `/create-implementation-plan`:
- file reference of planfile passed as an argument
- make sure the plan is followed exactly as described
- do not cut scope
- do not invent new scope
- practice TDD

# Display clock

- Setup Vitejs project with React, TypeScript and SCSS modules
- Display a clock in h:mm format (24-hour), centered on the screen, in a large font type

## Implementation Complete (2026-02-27)

Successfully implemented the display clock feature following TDD methodology:

**Setup:**
- ✅ Vite + React + TypeScript project initialized
- ✅ SCSS modules support configured
- ✅ Vitest + React Testing Library configured

**Implementation:**
- ✅ `formatTime` utility function with 6 passing tests
- ✅ `Clock` component with 5 passing tests
- ✅ SCSS module styling for centered, large typography
- ✅ App integration with 2 passing tests
- ✅ All 13 tests passing
- ✅ Production build successful
- ✅ No linting errors
- ✅ Dev server running on http://localhost:5173/

**Files Created:**
- `src/utils/formatTime.ts` - Time formatting utility
- `src/utils/formatTime.test.ts` - Unit tests for formatTime
- `src/components/Clock.tsx` - Main clock component
- `src/components/Clock.test.tsx` - Component tests
- `src/components/Clock.module.scss` - Component styles
- `src/App.test.tsx` - Integration tests
- `src/test/setup.ts` - Test configuration
