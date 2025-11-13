# 📚 React Books

A minimal React + Vite project to manage a list of books. It includes a fast dev setup, optional mock API with JSON Server, and a clean component structure for adding, editing, and listing books. ✨

## 🚀 Features
- ⚡ Vite dev server with instant HMR
- 🧱 React 19 functional components + hooks
- 🌐 Axios available for API calls
- 🧪 ESLint config for consistent code style
- 🗄️ Optional mock backend via `json-server`

## 🧰 Tech Stack
- React 19, ReactDOM 19
- Vite 6
- Axios, JSON Server
- ESLint

## ▶️ Quick Start
1) Install dependencies
```
npm install
```
2) Start the app (dev server on http://localhost:5173)
```
npm start
```
3) Build for production
```
npm run build
```
4) Preview the production build locally
```
npm run preview
```
5) Lint the code
```
npm run lint
```

## 🔌 Optional: Mock API with JSON Server
If you want a quick REST API for development:

1) Create a `db.json` in the project root with initial data:
```json
{
  "books": [
    { "id": 1, "title": "The Pragmatic Programmer" },
    { "id": 2, "title": "Clean Code" }
  ]
}
```
2) Run JSON Server on port 3001
```
npx json-server --watch db.json --port 3001
```
3) Your endpoints (examples)
- GET http://localhost:3001/books
- POST http://localhost:3001/books
- PATCH http://localhost:3001/books/:id
- DELETE http://localhost:3001/books/:id

If you wire Axios to this mock API, set its base URL to `http://localhost:3001` in your data layer/service.

## 📁 Project Structure
```
react/books/
  src/
    App.js
    index.js
    BookCreate.js
    BookEdit.js
    BookList.js
    BookShow.js
  index.html
  vite.config.js
  package.json
```

## 🛠️ Development Notes
- Environment vars: create `.env` files and prefix with `VITE_` (e.g., `VITE_API_BASE_URL`).
- Ports: Vite defaults to 5173. Change with `vite --port 5174` or in `vite.config.js`.
- Axios: keep API calls in a small service module for reuse and testing.

## ✅ Status
This is a starter you can extend into a full CRUD app. PRs and improvements welcome. 🙌
