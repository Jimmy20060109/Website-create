function ProfileCard({title, handle, image, description}) {
    /*const title = props.title;
    const handle = props.handle;*/
    return (
        <div className = "card">
            <div className = "card-image">
                <figure className = "image is-1by1" >
                    <img src = {image} alt = "logo" />
                </figure>
                <div className = "card-content">
                    <div className = "media-content">
                        <p className = "title is-4">{title}</p>
                        <p className = "subtitle is-6">{handle}</p>
                    </div>
                    <div className = "content">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;