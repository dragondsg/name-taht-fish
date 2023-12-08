import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from 'react';
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

export function FunctionalApp() {
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const allAnswers = {
    correctCount: correctAnswersCount,
    incorrectCount: incorrectAnswersCount,
    totalCount: correctAnswersCount + incorrectAnswersCount,
    answersLeft: initialFishes.slice(correctAnswersCount + incorrectAnswersCount).map((fish) => fish.name)
  };
  const playingGame = allAnswers.totalCount < initialFishes.length;
  
  function incrementAnswersCount (bool: boolean) {
    if (bool) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    } else {
      setIncorrectAnswersCount(incorrectAnswersCount + 1);
    }
  }
  
  return (
    <>
      { playingGame && <FunctionalScoreBoard answers={allAnswers} />}
      { playingGame && <FunctionalGameBoard
        handleQuizOutput={incrementAnswersCount}
        currentFish={initialFishes[allAnswers.totalCount]}
      />}
      { !playingGame && <FunctionalFinalScore answers={allAnswers} />}
    </>
  );
}
