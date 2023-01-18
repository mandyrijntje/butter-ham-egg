import './App.css';
import Box from './Box.js';
import Game from './Game.js';
import Header from './Header.js';
import Result from './Result.js';
import Scoreboard from './ScoreBoard.js';

import {useEffect, useState} from 'react';



function App() {

  const numberOfBoxes = () => (new Array(9)).fill(null);


  const [boxes, setBoxes] = useState(numberOfBoxes());
  const [winner, setWinner] = useState(null); //no winner at start of game
  const [userScore, setUserScore] = useState(0); 
  const [computerScore, setComputerScore] = useState(0); 

  const validLines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  const resetBoxes = () => {
    var newBoxes = boxes;
    newBoxes = (new Array(9)).fill(null);
    setBoxes([...newBoxes]);
    setWinner(null);
  };




  const userTurnToPlay = boxes.filter(box => box !== null).length % 2 === 0; 


  const playAndMarkPlayedBoxes = (index, symbol) => {

    if (userTurnToPlay && boxes[index] === 'o'){
      alert('illegal move');
      return;
      }
    if (userTurnToPlay && boxes[index] === 'x'){
      alert('its my kaas');
      return;
    }
      

  

    var newBoxes = boxes; //make a new array of boxes to mark the 'clicked index' box with an X or O

    newBoxes[index] = symbol; //put an 'x' or 'o' in array, at the index of clicked box

    setBoxes([...newBoxes]); //passing the new array as arg in the useState fn, so it can be reused
  }

  const gameCannotContinue = (boxes.filter(box => box === null)).length === 0;

  function handleBoxClick(index) {

    if(winner !== null){
      return;
    }
    
    if (userTurnToPlay) {
      playAndMarkPlayedBoxes(index, 'x'); // using play function to mark player choice with x
    }

    //check if tie

    if (gameCannotContinue){
      setWinner('t');
      return;
    }
  }


  useEffect (() => {

    //computer wait after user plays
    setTimeout(() => {

    const winningLine = (a, b, c) => {
      return validLines
        .filter(eachValidLine => {
          const eachValidLineSymbols = eachValidLine.map(index => boxes[index]); //mapping each index of valid line, to show as the current symbol in that index position in the 'state box' array 
          
          return JSON.stringify([a,b,c].sort()) === JSON.stringify(eachValidLineSymbols.sort()); //check if sorted index strings match one symbol

        });
    };

    const emptyIndexes = boxes
      .map((box, index) => box === null ? index : null)
      .filter(indexVal => indexVal !== null); //the indexes of all spots not yet taken by user or computer

    const userWins = winningLine('x', 'x', 'x').length > 0;

  
    const computerWins = winningLine('o', 'o', 'o').length > 0;

    if(winner !== null){
      return;
    }


    if (userWins) {
      setWinner('x');
      setUserScore(userScore + 10);
      return;
    }

    if (computerWins) {
      setWinner('o');
      setComputerScore(computerScore + 10);
      return;
    }

    if (gameCannotContinue){
      setWinner('t');
      return;
    }

    const computerPlaysTurn = index => {
      playAndMarkPlayedBoxes(index, 'o'); // computer plays with o. Fn will be used with either winning or random index
    }

    if(userTurnToPlay){
      return;
    }
    //first computer tries to win

    const computerWinningCombo
    = winningLine('o', 'o', null); // show all possible computer wins
  
  if (computerWinningCombo.length > 0) { //if there is a possible win for computer

    const computerWinIndex
    = computerWinningCombo[0].filter(index => boxes[index] === null)[0]; //take first winning combo (what we want), and filter where the box at that index is null, take the first result. This is the index we need the computer to put o!

    computerPlaysTurn(computerWinIndex);
    
    return;
  }
    
    //if no win, computer blocks

    const blockUserCombo
      = winningLine('x', 'x', null);

    if (blockUserCombo.length > 0) {
      const computerBlockIndex = blockUserCombo[0].filter(index => boxes[index] === null)[0];

      computerPlaysTurn(computerBlockIndex);
      
      return;
    }


    //if no block, try to put second O at a good position

    const computerSecondInARow
      = winningLine('o', null, null);

    if (computerSecondInARow.length > 0) {
      const secondMoveIndex = computerSecondInARow[0].filter(index => boxes[index] === null)[0];
      computerPlaysTurn(secondMoveIndex);
      return;
    }

    //if nothing, random position

    const randomBoxChosenByComputer 
    = emptyIndexes[Math.round(Math.random()*emptyIndexes.length)]; // choose a random index from the empty boxes, number can never be greater than length of empty index array

    computerPlaysTurn(randomBoxChosenByComputer); //invoking const fn to mark field with 0
    }, 500);
  }, [boxes]);

  return (
    <main>
      <Header />
      <Scoreboard 
        userscore = {userScore }
        computerscore = {computerScore }
        buttonreset = {resetBoxes}
      />
      <Game>
        {boxes.map((box, index) => 

        <Box 
        x = {box === 'x' ? 1: 0 }
        o = {box === 'o' ? 1: 0 }

        onClick = {()=> handleBoxClick(index)} 

        />
        )
       }
      </Game>
      {!!winner && winner !== null &&(
        <Result 
        win = {winner === 'x' ? 1: 0 }
        tie = {winner === 't' ? 1: 0 }
        />
      )}

    </main>
  );
}

export default App;
