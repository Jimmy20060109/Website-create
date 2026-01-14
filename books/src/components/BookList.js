import {useContext} from 'react';
import BooksContext from '../context/book';
import BookShow from './BookShow'
function BookList() {
    const {books, deleteBookById, editBookById} = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    });
    return <div className="book-list">
        {renderedBooks}
    </div>;
}

export default BookList;
