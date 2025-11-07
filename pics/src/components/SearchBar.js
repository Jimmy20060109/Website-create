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
    return <div>
        <form onSubmit={handleFormSubimt}>
            <label>Search: </label>
            <input value ={term} onChange={handleChange}/>
            <button type="submit">Search</button>
            </form>
        </div>
}


export default SearchBar;