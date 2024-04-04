import classes from "../style/Answer.module.css";
import CheckBox from "./CheckBox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="Test answer" />
    </div>
  );
}
