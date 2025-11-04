import './AnimalShow.css';
import {useState} from "react";
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import cow from './svg/cow.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
const svgMap = {
    bird: bird,
    cat: cat, 
    dog, // short cut for dog: dog,
    gator,
    cow,
    horse,
    heart
}
function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    var len = clicks * 10;
    if (clicks * 10 > 200) {
        len = 200;
    }

    return<div className = "animal-show" onClick={handleClick}>
        <img className="animal" src={svgMap[type]} alt="animals" />
        <img 
        className="heart" 
        src={heart} 
        alt="heart" 
        style={{width:5 + len + 'px', height:5 + len + 'px'}}
        />
        </div>;
}

export default AnimalShow;