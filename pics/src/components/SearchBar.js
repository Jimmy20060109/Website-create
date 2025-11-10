import './SearchBar.css';
import {useState} from 'react';

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');
    const handleFormSubimt = (event) => {
        event.preventDefault();
        // never do this
        //onSubmit(document.querySelector('input').value)
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }
    return <div className="search-bar">
        <form onSubmit={handleFormSubimt}>
            <label>Enter Search Term</label>
            <input value ={term} onChange={handleChange}/>
            <button type="submit">Submit</button>
            </form>
        </div>
}


export default SearchBar;