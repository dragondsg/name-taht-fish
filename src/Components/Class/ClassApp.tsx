import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  
  incrementAnswersCount = (bool:boolean) => {
    if (bool) {
      this.setState({
        correctCount: this.state.correctCount + 1
      });
    } else {
      this.setState({
        incorrectCount: this.state.incorrectCount + 1
      });
    }
  };

  render() {
    const currentFish = initialFishes[this.state.correctCount + this.state.incorrectCount];
    const totalCount = this.state.incorrectCount + this.state.correctCount;
    const playingGame = totalCount < initialFishes.length;
    return (
      <>
        {playingGame && <>
          <ClassScoreBoard
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
            answersLeft={initialFishes.slice(this.state.correctCount + this.state.incorrectCount).map((fish) => fish.name)} />
          <ClassGameBoard
            currentFish={currentFish}
            handleQuizOutput={this.incrementAnswersCount}/>
        </>}
        {!playingGame && <ClassFinalScore
          correctCount={this.state.correctCount}
          totalCount={totalCount} />}
      </>
    );
  }
}
