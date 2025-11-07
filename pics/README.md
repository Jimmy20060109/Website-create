# 📸 Pics — Unsplash‑Powered Image Search

A lightweight image search site built with React + Vite. It integrates the Unsplash API to search for high‑quality photos by keyword. Type a topic and get inspired! 🌅🔍

> The current version has API integration and the search flow working. Image card rendering is in progress (it shows the result count for now). Contributions welcome!

---

## ✨ Features
- 🔍 Search Unsplash photos by keyword
- ⚡️ Vite + React 19 + Axios for a fast DX
- 🧩 Componentized structure: `SearchBar`, `ImageList`, `ImageShow`
- 📱 Planned: responsive masonry layout and lazy loading (WIP)

## 🚀 Getting Started

Prerequisites: Node.js ≥ 18

```bash
npm install
npm start
```


## 🔑 Unsplash API Setup

This project uses Unsplash’s Search Photos endpoint to fetch images.

1) Get an Access Key (recommended):
- Sign in at Unsplash Developers: https://unsplash.com/developers
- Create an app and obtain your `Access Key`

2) Quick start (sample key included):
- `src/api.js` contains a sample `Client-ID` for learning and quick start. For real use, replace it with your own key to avoid quota or permission issues.

3) Use environment variables (safer):
- Create a `.env` file at the project root:

```env
VITE_UNSPLASH_ACCESS_KEY=your_access_key
```

- Update `src/api.js`:

```js
import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: { query: term },
  });
  return response.data.results;
};

export default searchImages;
```

Note: Unsplash Access Keys are intended for public client usage, but environment variables still help manage different environments and reduce accidental misuse.

## 🧭 How It Works

- `src/components/SearhBar.js` (spelling: SearhBar) handles input and submit, and calls `onSubmit(term)`.
- In `src/App.js`:
  - Manage `images` state with `useState` (use `const [images, setImages] = useState([])`).
  - `handleSubmit` calls `searchImages(term)` (see `src/api.js`) and then `setImages(result)`.
  - Pass `images` to `ImageList` for display.
- `src/components/ImageList.js`: currently renders the result count; grid cards are planned.
- `src/components/ImageShow.js`: placeholder for a single image card (to be implemented).

## 🗂️ Project Structure

```
src/
  App.js              # App entry and data flow
  api.js              # Unsplash API wrapper (Axios)
  components/
    SearhBar.js       # Search input + submit (note the spelling)
    ImageList.js      # Image list (shows count for now)
    ImageShow.js      # Single image component (WIP)
```

## 🛠️ Troubleshooting

- Getting “images is undefined” errors?
  - Ensure array destructuring: `const [images, setImages] = useState([])`.
  - Pass the prop as `images={images}` and use a default in the component: `function ImageList({ images = [] }) { ... }`.
- 429 / Rate limits:
  - Use your own Unsplash Access Key.
  - Debounce search to reduce request frequency.
- Network/CORS issues:
  - Ensure your network can reach Unsplash; check DevTools Console and Network tabs.

## 🧭 Roadmap

- ✅ Integrate Unsplash search endpoint
- 🔄 Image cards and grid layout (`ImageShow`/`ImageList`)
- ⏳ Lazy loading and infinite scrolling
- 🧽 Loading/error states and skeletons
- 🧭 Search debounce and history
- 🌗 Theme toggle and accessibility polish

## 🙏 Acknowledgements

- Photos provided by Unsplash: https://unsplash.com
- Tooling and libraries: Vite, React, Axios🎉
