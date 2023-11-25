import "./styles/game-board.css";
import { useState, ComponentProps } from 'react';

type Tprops = ComponentProps<"input"> & {
  handleQuizOutput: Function,
  currentFish: {name: string, url:string}[],
  setFish: Function
}

export function FunctionalGameBoard( inputProps: {inputProps: Tprops} ) {
  const {handleQuizOutput, currentFish, setFish} = inputProps.inputProps;

  const nextFishToName = currentFish[0];
  const [fishInput, setFishInput] = useState('');
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e)=>{
        e.preventDefault();
        handleQuizOutput(fishInput == nextFishToName.name);
        setFish();
        setFishInput('');
      }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" value={fishInput} name="fish-guess" onChange={(e)=>{
          setFishInput(e.target.value);
        }}/>
        <input type="submit" />
      </form>
    </div>
  );
}
