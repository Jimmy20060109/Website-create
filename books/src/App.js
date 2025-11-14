import {useState} from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);
    const handleCreateBook = (title) => {
        // Bad Code
        //books.push({id:123, title:title});
        //setBooks(books);
        const updatedBooks = [
            ...books,
            {id: 123, title: title}
        ];
        setBooks(updatedBooks);

        /**Modify Array when using state
         * Never modify the existing array/object
         * Always create a new array/object
         * Then update the state with the new array/object
         * eg: books.push() is bad
         * eg: books[0] = 'blue'
         */
    };

    /**
     * Oncreate is a prop we are passing to the BookCreate component
     * handleCreateBook is the function we defined on App.js
     * When the user submits the form in BookCreate component,
     * we will call the onCreate prop which is handleCreateBook function
     */
    return <div>
        {books.length}
        <BookCreate onCreate={handleCreateBook} />
    </div>
}

export default App;