import './App.css';
import Box from './Box.js';
import Game from './Game.js';
import Header from './Header.js';
import {useState} from 'react';

const numberOfBoxes = () => (new Array(9)).fill(null);

function App() {
  const [boxes, setBoxes] = useState(numberOfBoxes);

  return (
    <main>
      <Header />
      <Game>
        {boxes.map((box, index) => 
        <Box />
        )
       }
      </Game>
    </main>
  );
}

export default App;
