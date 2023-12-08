import "./styles/game-board.css";
import { useState } from 'react';

type Tprops = {
  handleQuizOutput: (arg:boolean)=>void,
  currentFish: {name: string, url:string}
}

export function FunctionalGameBoard( {handleQuizOutput, currentFish}:Tprops ) {
  const [fishInput, setFishInput] = useState('');
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e)=>{
        e.preventDefault();
        handleQuizOutput(fishInput == currentFish.name);
        setFishInput('');
      }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text"
        value={fishInput}
        name="fish-guess"
        onChange={(e)=>{
          setFishInput(e.target.value);
        }}/>
        <input type="submit" />
      </form>
    </div>
  );
}
