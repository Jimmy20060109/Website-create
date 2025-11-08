# 🤖 PDAs — Personal Digital Assistant Cards

A minimal showcase built with React + Vite + Bulma, featuring cards for Alexa, Cortana, and Siri. Perfect for practicing components, layout, and local image imports. ✨

## ✨ Features
- Card layout with avatar, title, handle, and description
- Bulma grid (columns) with basic responsiveness
- Reusable `ProfileCard` component
- Local image assets in `src/images`

## 🚀 Quick Start
```bash
npm install
npm start
```
Open the dev server URL shown in the terminal (default `http://localhost:5173`).

## 🧩 Stack
- React 19
- Vite
- Bulma

## 🗂️ Structure
```
src/
  App.js            # Page layout and card list
  ProfileCard.js    # Single card component
  images/           # Local image assets
    alexa.png
    cortana.png
    siri.png
  index.js          # Entry
public/
index.html
```

## 🛠️ Customize
- In `src/App.js`, add or remove `<ProfileCard />` and tweak `title/handle/image/description`.
- Replace or add images under `src/images/`, then import and use them.
- Adjust Bulma class names or inline styles to customize color and layout.
- Duplicate a column to add more cards.

## 📌 Tips
- If the default port is busy, try `npm run preview` to preview the build.
- This project is for learning/demo—extend it into a full app! 🚀
