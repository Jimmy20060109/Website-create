import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/book';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);



/** React Hooks function, 
 * useState: Allows a component to use state system
 * useEffect: Allows a component to run code at specific points in time
 * useContext: Allows a component to use the context system
 */


/**Custom Hooks
 * functions we write to make reusable bits of logic
 * Usually reuse basic hooks like 'useState', 'useEffect', 'useContext'
 * can do a lot or very little logic
 */
root.render(
    <Provider>
        <App />
    </Provider>
);