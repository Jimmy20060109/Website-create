import './ImageShow.css';

function ImageShow({image}) {
    return <div className="image-show">
        <img src={image.urls.small} alt={image.description || image.id}/>
    </div>
}

export default ImageShow;
