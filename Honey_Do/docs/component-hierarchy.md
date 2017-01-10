## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - Sidebar
  * lists

**ListContainer**
 - TasksHeader
 - Tasks

**TaskContainer**
 - TaskOverview
 - Notes
  * NoteList

**SearchContainer**
 - Search
 - Tasks


 ## Routes

 |Path   | Component   |
 |-------|-------------|
 | "/sign-up" | "AuthFormContainer" |
 | "/sign-in" | "AuthFormContainer" |
 | "/home" | "HomeContainer" |
 | "/home/list/:listId" | "TaskContainer" |
 | "/home/listbook/:listbookId/list/:taskId" | "TaskContainer" |
 | "/home/search-results" | "SearchResultsContainer"
 | "/search" | "Search" |
 
