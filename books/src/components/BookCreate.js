import {useState, useContext} from 'react';
import BooksContext from '../context/book';

function BookCreate() {

    const {handleCreateBook} = useContext(BooksContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateBook                                                                                                                                                            (title);
        setTitle('');
        console.log(title);
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return<div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
        <label>Title<br/></label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button" type="submit">submit</button>
        </form>
    </div>
}

export default BookCreate;