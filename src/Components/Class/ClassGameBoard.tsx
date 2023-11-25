import { Component } from "react";
import "./styles/game-board.css";

type Tprops = {
  handleQuizOutput: Function,
  currentFish: {name: string, url:string}[],
  setFish: Function,
}

export class ClassGameBoard extends Component <Tprops> {
  state = {
    fishInput: '',
  };
  render() {
    const nextFishToName = this.props.currentFish[0];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleQuizOutput(this.state.fishInput == nextFishToName.name);
        this.props.setFish();
        this.setState({
          fishInput: '',
        });
      }}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" value={this.state.fishInput} onChange={(e)=>{
          this.setState({fishInput: e.target.value});
        }}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
