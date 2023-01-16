import './App.css';
import Box from './Box.js';
import Game from './Game.js';
import Header from './Header.js';
import {useEffect, useState} from 'react';

const numberOfBoxes = () => (new Array(9)).fill(null);

const validLines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function App() {
  
  const [boxes, setBoxes] = useState(numberOfBoxes);

  const isUserTurn = boxes.filter(box => box !== null).length % 2 === 0; //check number of boxes marked with x or o, if that number%2 === 0. eg. if only user makes x, box number = 1, 1%2 !==0, so not user turn

  function playXorO(index, symbol){
    var newBoxes = boxes; //make a new array of boxes to mark the 'clicked index' box with an X or O

    newBoxes[index] = symbol; //put an 'x' or 'o' in array, at the index of clicked box

    setBoxes([...newBoxes]); //passing the new array as arg in the useState fn, so it can be reused
  }

  function handleBoxClick(index) {
    
    if (isUserTurn) {
      playXorO(index, "x"); // using play function to mark player choice with x
    }
  }

  useEffect (() => {

    const winningLine = (a, b, c) => {
      return validLines
        .filter(eachValidLine => {
          const eachValidLineSymbols = eachValidLine.map(index => boxes[index]); //mapping each index of valid line, to show as the current symbol in that index position in the 'state box' array 
          
          return JSON.stringify([a,b,c].sort()) === JSON.stringify(eachValidLineSymbols.sort()); //check if sorted index strings match one symbol

        });
    }

    const userWins = winningLine("x", "x", "x").length > 0;
    const computerWins = winningLine("o", "o", "o").length > 0;

    if (userWins) {
      alert("I WIN");
    }
    if (userWins) {
      alert("COMPUTER WINS");
    }

    const computerPlaysTurn = index => {
      playXorO(index, "o");// using play function to mark player choice with o, assigned to const to use later
    }

    if(isUserTurn){
      return;
    }
    const emptyIndexes = boxes
    .map((box, index) => box === null ? index : null)
    .filter(indexVal => indexVal !== null); //the indexes of all spots not yet taken by user or computer

    const randomBoxChosenByComputer = 
      emptyIndexes[Math.round(Math.random()*emptyIndexes.length)]; // choose a random index from the empty boxes, number can never be greater than length of empty index array

      computerPlaysTurn(randomBoxChosenByComputer); //invoking const fn to mark field with 0

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
