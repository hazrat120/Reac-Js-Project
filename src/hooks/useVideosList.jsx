import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideosList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasmore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      //database related works
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videosQuery = query(
        videosRef,
        limitToFirst(9),
        orderByKey(),
        startAt("" + page)
      );
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(videosQuery);
        setLoading(false);

        console.log(snapshot.val());

        if (snapshot.exists) {
          setVideos(Object.values(snapshot.val()));
        } else {
          setHasmore(false);
        }
      } catch (err) {
        // console.log(err);
        setLoading(false);
        setError(err.message);
      }
    }

    fetchVideos();
  }, [page]);

  return { loading, error, videos, hasMore };
}
