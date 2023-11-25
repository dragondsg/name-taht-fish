import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from 'react';
import { Images } from "../../assets/Images";

export function FunctionalApp() {
  const [fishes, setFishes] = useState([
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
  ]);
  
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const allAnswers = {
    correctCount: correctAnswersCount,
    incorrectCount: incorrectAnswersCount,
    totalCount: correctAnswersCount + incorrectAnswersCount,
    answersLeft: fishes.map((fish) => fish.name)
  };
  const playingGame = fishes.length > 0;
  
  function incrementAnswersCount (bool: Boolean) {
    if (bool) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    } else {
      setIncorrectAnswersCount(incorrectAnswersCount + 1);
    }
  }
  
  function removeFirstFish () {
    setFishes(fishes.slice(1));
  }
  
  return (
    <>
      { playingGame && <FunctionalScoreBoard answers={allAnswers} />}
      { playingGame && <FunctionalGameBoard inputProps={{
        handleQuizOutput: incrementAnswersCount,
        currentFish: fishes,
        setFish: removeFirstFish,
      }}/>}
      { !playingGame && <FunctionalFinalScore answers={allAnswers} />}
    </>
  );
}
