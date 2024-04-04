import classes from "../style/Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} {...rest} action="#">
      {children}
    </form>
  );
}
