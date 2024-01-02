import { useEffect, useState } from 'react';
import data from '../database/data';
import { useDispatch } from 'react-redux';
// redux actions
import * as Action from '../redux/question_reducer';
/*fetch-question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /** async function fetch backend data */
    (async () => {
      try {
        const questions = await data;
        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));

          /** dispatch an action */
          dispatch(Action.startExamAction({ question: questions }));
        } else {
          throw new Error('No Question Avalibale');
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  console.log();
  return [getData, setGetData];
};
