import image from "/src/assets/images/3.jpg";
import classes from "/src/style/Video.module.css";

const Video = () => {
  return (
    <a href="quize.html">
      <div className={classes.video}>
        <img src={image} alt="video title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
