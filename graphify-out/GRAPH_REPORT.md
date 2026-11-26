# Graph Report - wedding_planner_react_app  (2026-11-17)

## Corpus Check
- 24 files · ~2,580 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, (none) 1, .ico 1)

## Summary
- 162 nodes · 267 edges · 9 communities
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `df81db87`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- main.py
- package.json
- index.js
- Header.js
- eslint
- steps
- manifest.json
- Wedding-Planner
- scripts

## God Nodes (most connected - your core abstractions)
1. `Header()` - 13 edges
2. `react` - 10 edges
3. `react-router` - 9 edges
4. `useAuth()` - 9 edges
5. `User` - 8 edges
6. `steps` - 7 edges
7. `register_user()` - 6 edges
8. `login_for_access_token()` - 6 edges
9. `Dashboard()` - 6 edges
10. `HomePage()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `get_user_by_username()` --uses--> `User`  [INFERRED]
  backend/main.py → backend/models.py
- `authenticate_user()` --uses--> `User`  [INFERRED]
  backend/main.py → backend/models.py
- `read_user()` --uses--> `User`  [INFERRED]
  backend/main.py → backend/models.py
- `update_user_budget()` --uses--> `User`  [INFERRED]
  backend/main.py → backend/models.py
- `HomePage()` --calls--> `Header()`  [EXTRACTED]
  frontend/src/pages/HomePage.js → frontend/src/components/Header.js

## Import Cycles
- None detected.

## Communities (9 total, 0 thin omitted)

### Community 0 - "main.py"
Cohesion: 0.10
Nodes (14): authenticate_user(), BudgetUpdate, create_access_token(), create_user(), get_current_user(), get_user_by_username(), login_for_access_token(), read_user() (+6 more)

### Community 1 - "package.json"
Cohesion: 0.08
Nodes (31): browserslist, development, production, dependencies, chart.js@^4.6.1, react@^19.3.0, react-chartjs-2@^5.3.1, react-dom@^19.3.0 (+23 more)

### Community 2 - "index.js"
Cohesion: 0.14
Nodes (17): App(), BudgetWheel(), Dashboard(), Widget(), Login(), BudgetEditOptions(), AuthContext, AuthProvider() (+9 more)

### Community 3 - "Header.js"
Cohesion: 0.25
Nodes (10): CreateAccount(), DropdownItem(), DropdownMenu(), Header(), Navbar(), NavItem(), HomeButton(), CreateAccountPage() (+2 more)

### Community 4 - "eslint"
Cohesion: 0.12
Nodes (15): name, permissions, runs-on, jobs, eslint, name, on, pull_request (+7 more)

### Community 5 - "steps"
Cohesion: 0.20
Nodes (10): SARIF_ESLINT_IGNORE_SUPPRESSED, steps, continue-on-error, env, name, run, uses, with (+2 more)

### Community 6 - "manifest.json"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

### Community 7 - "Wedding-Planner"
Cohesion: 0.29
Nodes (6): Architecture, Free to use easy to learn dashboard for wedding planning, Project Status, Technologies Used, Wedding-Planner, Wire Frames

### Community 8 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, eject, start, test

## Knowledge Gaps
- **2 isolated node(s):** `react-app`, `react-app/jest`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 60 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `index.js` to `package.json`, `Header.js`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **What connects `react-app`, `react-app/jest` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `main.py` be split into smaller, more focused modules?**
  _Cohesion score 0.09841269841269841 - nodes in this community are weakly interconnected._
- **Why does `react-router` connect `Header.js` to `package.json`, `index.js`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07765151515151515 - nodes in this community are weakly interconnected._
- **Should `index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13548387096774195 - nodes in this community are weakly interconnected._
- **Should `eslint` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._