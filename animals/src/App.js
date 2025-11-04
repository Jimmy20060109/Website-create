import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';
function getRandomAnimal () {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}



function App() {

    // never going to
    // count = 123;
    // if we want to change the count
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        // ['cat']
        // ['cat' 'dog']
        setAnimals([...animals, getRandomAnimal()]);
        // animals.push(getRandomAnimal()) => modify the state directly not work
    };

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className="app">
            <button style={{color:'blue'}}onClick = {handleClick}>Add Animal
            </button>
            <div className="animals-list">{renderAnimals}</div>
        </div>
    );
}

export default App;