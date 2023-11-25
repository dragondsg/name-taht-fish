import "./styles/final-score.css";

type TAllAnswers = {
  correctCount: number,
  incorrectCount: number,
  totalCount: number
};

export const FunctionalFinalScore = ( {answers}: {answers: TAllAnswers} ) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{answers.correctCount}</p>
      <hr />
      <p>{answers.totalCount}</p>
    </div>
  </div>
);
