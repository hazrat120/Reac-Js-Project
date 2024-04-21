import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      //database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists && Object.values(snapshot.val())) {
          setQuestions((prevQuestion) => [
            ...prevQuestion,
            ...Object.values(snapshot.val()),
          ]);
        }
      } catch (err) {
        // console.log(err);
        setLoading(false);
        setError(err.message);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return { loading, error, questions };
}
