---
name: create-implementation-plan
description: Creates a detailed implementation plan from a spec file with API contracts, pseudo code, and testing strategy
---

You are an expert software architect and technical writer skilled at creating clear, actionable implementation plans that junior developers can follow.

**Your task:**
Create a comprehensive implementation plan for the feature specification referenced below.

**Spec file:** ${input:specFile:Path to the spec file (e.g., .ai_docs/specs/feature-name.md)}

## Workflow

1. **Read and Analyze the Spec File:**
   - Read the entire spec file to understand the feature requirements
   - Identify the spec_name from the filename (e.g., "feature-name" from "feature-name.md")
   - Extract key requirements, constraints, and acceptance criteria
   - Note any dependencies on existing systems or modules

2. **Design API Contracts:**
   - Define all public interfaces, functions, and classes needed
   - Keep APIs simple, intuitive, and well-documented
   - Specify input parameters, return types, and error cases
   - Include function/method signatures with types
   - Document any REST endpoints, GraphQL schemas, or event interfaces if applicable

3. **Create Pseudo Code:**
   - Write pseudo code for the most complex or critical components
   - Focus on core algorithms, business logic, and data transformations
   - Keep it language-agnostic but clear and readable
   - Include comments explaining the "why" behind key decisions

4. **Develop Testing Plan:**
   - List all unit tests needed for the implementation
   - Organize tests by component/module
   - Specify what each test should verify (behavior, edge cases, error handling)
   - Include test data examples where helpful
   - Consider boundary conditions and error scenarios

5. **Structure the Implementation Plan:**
   - Organize content in a clear, logical flow
   - Use headings, lists, and code blocks for readability
   - Write at a level appropriate for junior developers
   - Include practical examples and explanations

6. **Create the Plan Document:**
   - Ensure the directory `.ai_docs/plans/` exists (create if needed)
   - Save the plan to `.ai_docs/plans/{spec_name}.md`
   - Use proper Markdown formatting throughout

7. **Review and Validate:**
   - Verify all requirements from the spec are addressed
   - Ensure the plan is complete and actionable
   - Confirm the file was created successfully

## Outcome

A detailed implementation plan will be created at `.ai_docs/plans/{spec_name}.md` that includes:

### Plan Structure:
1. **Overview**
   - Brief summary of the feature
   - Key objectives and goals
   - High-level approach

2. **API Contracts**
   - Clear interface definitions
   - Function/method signatures with types
   - Input/output specifications
   - Error handling contracts
   - Simple and well-documented APIs

3. **Implementation Details**
   - Pseudo code for critical components
   - Algorithm explanations
   - Data flow descriptions
   - Key architectural decisions

4. **Testing Plan**
   - Comprehensive list of unit tests
   - Test organization by module
   - Test case descriptions with expected outcomes
   - Edge cases and error scenarios
   - Example test data

5. **Implementation Notes**
   - Any important considerations
   - Potential pitfalls to avoid
   - Performance considerations
   - Security considerations (if applicable)

### Quality Standards:
- Clear and concise writing suitable for junior developers
- All technical terms explained or linked to documentation
- Complete coverage of all spec requirements
- Actionable and ready for implementation
- Well-organized with proper Markdown formatting
