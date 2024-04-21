import { getDatabase, ref } from "firebase/database";
import { cloneDeep } from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import { useAuth } from "./../../context/AuthContext";
import MiniPlayer from "./../MiniPlayer";
import ProgressBar from "./../ProgressBar";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action?.payload?.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.payload;
    case "answer":
      const questions = cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.payload;
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (questions) {
      dispatch({
        type: "questions",
        payload: questions,
      });
    }
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  // handle when user clicks the prev button to get the prev question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  //submit quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await setCurrentQuestion(resultRef, {
      [id]: qna,
    });
    navigate.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  //calculate parcent of progress
  const parcentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna?.[currentQuestion]?.title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={qna?.[currentQuestion]?.options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            submit={submit}
            prev={prevQuestion}
            progress={parcentage}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
