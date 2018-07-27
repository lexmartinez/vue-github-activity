# vue-github-activity Change Log

All notable changes to this project will be documented in this file.

## v2.1.1 - `Mia`

- **[FIX]** Event list overflow handling on Firefox

## v2.1.0 - `Uma`

- **[FIX]** Bundling issues (style sheet minify & travisCI fix)
- **[ADD]** Format tools implementation
- **[ADD]** New event types supported:
   - PullRequestReviewCommentEvent
   - PublicEvent
   - CommitCommentEvent

## v2.0.0 - `Riley`

- **[FIX]** Scope styles removed for external styling customization
- **[FIX]** Event Detail Component
- **[ADD]** Events Handling Improvement:
   - PushEvent
   - PullRequestEvent
   - CreateEvent
   - DeleteEvent
   - WatchEvent
   - IssuesEvent
   - ForkEvent
- **[DEL]** Removed Generic GithubEvent Component

## v1.0.1

- **[FIX]** Responsive feed behaviour
- **[ADD]** `package.json` keywords
- **[ADD]** `CHANGELOG.md` file added

## v1.0.0 - `MVP`

- **[INIT]** Initial Component Implementation
- **[INIT]** Basic Events Handling:
    - WatchEvent
    - PushEvent
    - ForkEvent
    - CreateEvent
    - IssuesEvent
    - IssueCommentEvent