import './App.css';
import Box from './Box.js';
import Game from './Game.js';
import Header from './Header.js';
import {useState} from 'react';

const numberOfBoxes = () => (new Array(9)).fill(null);

function App() {
  
  const [boxes, setBoxes] = useState(numberOfBoxes);

  function handleBoxClick(index) {

    const isUserTurn = 
      boxes.filter((((box => box !== null).length) % 2) === 0);
    
    if (isUserTurn) {

    var newBoxes = boxes; //make a new array of boxes to mark the 'clicked index' box with an X

    newBoxes[index] = 'x'; //put an 'x' in array, at the index of clicked box

    setBoxes([...newBoxes]); //passing the new array as arg in the useState fn, so it can be reused
    }
  }

  return (
    <main>
      <Header />
      <Game>
        {boxes.map((box, index) => 

        <Box 
        x = {box === 'x' ? 10: 0 }
        o = {box === 'o' ? 10: 0 }

        onClick = {()=> handleBoxClick(index)} //passing the index of clicked box to fn, so it can do something with it. In this case, display x

        />
        )
       }
      </Game>
    </main>
  );
}

export default App;
