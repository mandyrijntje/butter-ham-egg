import './App.css';
import Box from './Box.js';
import Game from './Game.js';
import Header from './Header.js';
import {useState} from 'react';

const numberOfBoxes = () => (new Array(9)).fill(null);

function App() {
  
  const [boxes, setBoxes] = useState(numberOfBoxes);

  function handleBoxClick(index) {

    var newBoxes = boxes; //make a new array of boxes to mark the 'clicked index' box with an X

    newBoxes[index] = 'X'; //put an X in array, at the index of clicked box

    setBoxes([...newBoxes]); //passing the new array as arg in the useState fn, so it can be reused

  }

  return (
    <main>
      <Header />
      <Game>
        {boxes.map((box, index) => 

        <Box onClick = {()=> handleBoxClick(index)} //passing the index of clicked box to fn, so it can do something with it. In this case, display x

        />
        )
       }
      </Game>
    </main>
  );
}

export default App;
