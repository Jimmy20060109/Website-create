// 1) Import the React and ReactDOM libraries
import React from 'react'; // Library that defines what a component is and how mutiple
// and hown multiple components can be combined together
import ReactDOM from 'react-dom/client';
import App from './App.js';
// Library that knows how to get a component to show up in the browser
// 2) Get a reference to the div with ID root
const el = document.getElementById('root');
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Show the component on the screen
root.render(<App />);