import {useState} from "react";
import SearchBar from './components/SearchBar';
import SearchImages from './api'
import ImageList from './components/ImageList'
function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await SearchImages(term);
        console.log(result);
        setImages(result);
    }
    return <div>
        //handle submit is the function we defined on app.js for once the user submits the form
        // onSubmit is the prop we are passing to the search bar component
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
    </div>
}

export default App;