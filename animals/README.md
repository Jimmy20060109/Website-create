# 🐾 Animals — React State Practice

A tiny React app to practice state. Click “Add Animal” to append a random animal card, then click an animal to grow its heart. Perfect for getting comfortable with React’s state update patterns. 💙

---

## ✨ What You Can Do
- ➕ Add random animal cards
- 🖱️ Click an animal to “like” it
- 💓 Heart grows as likes increase (per card)

## 🎯 Learning Goals
- Manage list state with `useState([])` and immutability: `setAnimals([...animals, newItem])`
- Use component‑local state for independent behavior (`AnimalShow` has its own `clicks`)
- Handle events and update state: `onClick` → `setState(prev => prev + 1)`

## 🧠 Key Patterns

Add a new animal (list state, immutable update) — `src/App.js`:

```jsx
const [animals, setAnimals] = useState([]);

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

const handleClick = () => {
  setAnimals([...animals, getRandomAnimal()]);
  // Tip: to avoid stale closures use: setAnimals(prev => [...prev, getRandomAnimal()])
};
```

Grow the heart (component‑local state) — `src/AnimalShow.js`:

```jsx
const [clicks, setClicks] = useState(0);

const handleClick = () => {
  setClicks(c => c + 1); // functional update
};

const size = Math.min(5 + clicks * 10, 205);
// inline style drives heart size
<img className="heart" src={heart} style={{ width: size, height: size }} />
```

## 🚀 Run Locally

Prerequisites: Node.js ≥ 18

```bash
npm install
npm start
```

Open http://localhost:5173 and start clicking!

## 🗂️ Structure

```
src/
  App.js          # Add animals and render the list
  AnimalShow.js   # Per‑card heart with local state
  AnimalShow.css  # Basic layout and heart position
  svg/            # Animal & heart icons
```

## 🧭 Ideas to Extend
- 💫 Animate the heart (CSS scale / transition)
- 🔁 Toggle like/unlike or cap max size
- 🧮 Show total likes across all cards
- 🧱 Masonry/grid layout for the animal list

Happy learning! 🧪⚛️
