## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - Sidebar


**ListContainer**
- ListIndex
  -ListItems


**TaskContainer**
- TasksHeader
- TaskIndex
 -TaskItems

**SearchContainer**
 - Search
 - Tasks


 ## Routes

 |Path   | Component   |
 |-------|-------------|
 | "/sign-up" | "AuthFormContainer" |
 | "/sign-in" | "AuthFormContainer" |
 | "/home" | "HomeContainer" |
 | "/list/:listId" | "ListContainer" |
 | "/list/:listId/task/| "TaskContainer" |
 | "/search-results" | "SearchResultsContainer"
