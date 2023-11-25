import { Component } from "react";
import "./styles/score-board.css";

type Tprops = {
  incorrectCount: number,
  correctCount: number,
  answersLeft: string[]
}

export class ClassScoreBoard extends Component <Tprops> {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id="choices-left">
          {this.props.answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
