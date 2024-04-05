import classes from "../style/Analysis.module.css";
import Question from "./Question";

export default function Analysis() {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correectly</h4>
      <Question />
    </div>
  );
}
