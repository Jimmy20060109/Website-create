# 📸 Pics — Unsplash Image Search

A finished React app that searches and displays photos from Unsplash. Type a keyword and instantly get a responsive grid of images. Fast, simple, and polished. ✨🔍

## ✨ Features
- 🔎 Search photos by keyword (Unsplash API)
- 🧱 Masonry‑style grid via CSS `columns`
- 🖼️ Rounded image cards with border + shadow
- ⚡ Built with React 19, Vite, Axios

## 🚀 Get Started
Prerequisite: Node.js ≥ 18
```bash
npm install
npm start
```
Open the dev server URL shown in the terminal (default `http://localhost:5173`).

## 🔑 API
- Uses Unsplash Search Photos endpoint.
- Quick start works out of the box with a sample `Client-ID` in `src/api.js`.
- For your own key, create `.env` and set `VITE_UNSPLASH_ACCESS_KEY=your_key`, then update `src/api.js` to read from the env if desired.

## 🗂️ Structure
- `src/App.js` — app state and search flow
- `src/api.js` — Axios request to Unsplash
- `src/components/SearchBar.js` — term input + submit
- `src/components/ImageList.js` — responsive image grid
- `src/components/ImageShow.js` — single image card

## 🙏 Credits
- Photos by Unsplash • Tooling: Vite, React, Axios 🎉
