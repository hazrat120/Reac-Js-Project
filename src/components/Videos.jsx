import { Link } from "react-router-dom";
import classes from "../style/Videos.module.css";
import Video from "./pages/Video";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
    </div>
  );
}
