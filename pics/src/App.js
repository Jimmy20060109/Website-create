import {useState} from "react";
import SearchBar from './components/SearhBar';
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
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
    </div>
}

export default App;