import classes from "../style/Answer.module.css";
import CheckBox from "./CheckBox";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          className={classes.answer}
          key={index}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
