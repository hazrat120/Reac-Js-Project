import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAfter,
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
        limitToFirst(6),
        orderByKey(),
        startAfter(String(page))
      );
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(videosQuery);
        setLoading(false);

        if (snapshot.exists && Object.values(snapshot.val())) {
          setVideos((prev) => [...prev, ...Object.values(snapshot.val())]);
        } else {
          setHasmore(false);
        }
      } catch (err) {
        // console.log(err);
        setLoading(false);
        setError(err.message);
      }
    }

    setTimeout(() => {
      fetchVideos();
    }, 1000);
  }, [page]);

  return { loading, error, videos, hasMore };
}
