import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export class ClassApp extends Component {
  state = {
    fishes: [
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
    ],
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

  removeFirstFish = () => {
    this.setState({
      fishes: this.state.fishes.slice(1)
    });
  };

  render() {
    const totalCount = this.state.incorrectCount + this.state.correctCount;
    const playingGame = this.state.fishes.length > 0;
    return (
      <>
        {playingGame && <>
          <ClassScoreBoard
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
            answersLeft={this.state.fishes.map((fish) => fish.name)} />
          <ClassGameBoard
            currentFish={this.state.fishes}
            handleQuizOutput={this.incrementAnswersCount}
            setFish={this.removeFirstFish}/>
        </>}
        {!playingGame && <ClassFinalScore
          correctCount={this.state.correctCount}
          totalCount={totalCount} />}
      </>
    );
  }
}
