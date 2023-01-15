import './App.css';
import Box from './Box.js';
import Game from './Game.js';
import Header from './Header.js';
import {useEffect, useState} from 'react';

const numberOfBoxes = () => (new Array(9)).fill(null);

const winningLines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function App() {
  
  const [boxes, setBoxes] = useState(numberOfBoxes);

  const isUserTurn = boxes.filter(box => box !== null).length % 2 === 0; //check number of boxes marked with x or o, if that number%2 === 0. eg. if only user makes x, box number = 1, 1%2 !==0, so not user turn

  function handleBoxClick(index) {
    
    if (isUserTurn) {

    var newBoxes = boxes; //make a new array of boxes to mark the 'clicked index' box with an X

    newBoxes[index] = 'x'; //put an 'x' in array, at the index of clicked box

    setBoxes([...newBoxes]); //passing the new array as arg in the useState fn, so it can be reused
    }
  }

  useEffect (() => {
    if(isUserTurn){
      return;
    }
    const emptyIndexes = boxes
    .map((box, index) => box === null ? index : null)
    .filter(indexVal => indexVal !== null);
  }, [boxes]);

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
