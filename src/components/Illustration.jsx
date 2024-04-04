import image from "../assets/images/signup.svg";
import classes from "../style/Illustration.module.css";

export default function Illustration() {
  return (
    <>
      <div className={classes.illustration}>
        <img src={image} alt="Signup" />
      </div>
    </>
  );
}
