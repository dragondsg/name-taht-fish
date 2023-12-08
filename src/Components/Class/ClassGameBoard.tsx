import { Component } from "react";
import "./styles/game-board.css";

type Tprops = {
  handleQuizOutput: (arg:boolean) => void,
  currentFish: {name: string, url:string},
}

export class ClassGameBoard extends Component <Tprops> {
  state = {
    fishInput: ''
  };
  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={this.props.currentFish.url} alt={this.props.currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleQuizOutput(this.state.fishInput == this.props.currentFish.name);
        this.setState({
          fishInput: ''
        });
      }}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text"
          name="fish-guess"
          value={this.state.fishInput}
          onChange={(e)=>{
            this.setState({fishInput: e.target.value});
        }}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
