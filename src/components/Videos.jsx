import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../style/Videos.module.css";
import useVideosList from "./../hooks/useVideosList";
import Video from "./pages/Video";

export default function Videos() {
  const { loading, error, videos, hasMore } = useVideosList(0);
  const [page, setPage] = useState(1);

  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quize" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading... </div>}
    </div>
  );
}
