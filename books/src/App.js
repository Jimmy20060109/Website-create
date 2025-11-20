import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        })

        setBooks(updatedBooks);
    };

    const handleCreateBook = (title) => {
        // Bad Code
        //books.push({id:123, title:title});
        //setBooks(books);
        const updatedBooks = [
            ...books,
            {id: Math.round(Math.random() * 9999),
             title: title}
        ];
        setBooks(updatedBooks);

        /**Modify Array when using state
         * Never modify the existing array/object
         * Always create a new array/object
         * Then update the state with the new array/object
         * eg: books.push() is bad
         * eg: books[0] = 'blue'
         */

        /** Another method to update array
         * const updatedBooks = [
         * ... books.slice(0, index) [0, index)
         * , newItem,
         * ... books.slice(index) [index, books.length)
         * ];
         */

        //Removing element in array
        // 1, remove certain element in array
        /*colors = ['green', 'red', 'blue'];

        const removeColor = (colorToRemove) => {
            const updatedColors = colors.filter((color) => {
                return color !== colorToRemove;
            });
            //setColor(updatedColors);
        };
        //2, remove element at certain index
        const removeColorAtIndex = (indexRemove) => {
            const updatedColors = colors.filter((color, index) => {
                return index !== indexRemove;
            });
            // setColor(updatedColors);
        };
        // 3, remove a certain property in object of array
        const users = [
            {name: 'Jimmy', age: 20},
            {name: 'Sara', age: 25},
            {name: 'Tom', age: 30}
        ];
        const removeAgeProperty = (ageRemove) => {
            const updatedUsers = users.filter((user) => {
                return user.age !== ageRemove;
            });
            // setUsers(updatedUsers);
        };


        // update an array
        const updatedUserByAge = (age, newName) => {
            const updatedUser = users.map((user) => {
                if (user.age === age) {
                    return {...user, name: newName};
                }
                return user;
            });
        };
        */


    };
    /**
     index.js
        └─ App
            ├─ BookCreate (onCreate -> App)
            └─ BookList
                └─ BookShow (onDelete/onEdit -> App)
                    └─ BookEdit (onEdit -> App)
     */
    /**
     * Oncreate is a prop we are passing to the BookCreate component
     * handleCreateBook is the function we defined on App.js
     * When the user submits the form in BookCreate component,
     * we will call the onCreate prop which is handleCreateBook function
     */
    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate={handleCreateBook} />
    </div>
}

export default App;