import "./styles/score-board.css";
//  Where the score is presented

type TAllAnswers = {
  correctCount: number,
  incorrectCount: number,
  totalCount: number,
  answersLeft: string[]
};

export function FunctionalScoreBoard( {answers}: {answers: TAllAnswers} ) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {answers.incorrectCount}</div>
      <div id="choices-left">
        {answers.answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {answers.correctCount}</div>
    </div>
  );
}
