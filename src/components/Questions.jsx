import React, { useEffect, useState } from 'react';

/* Custom Hook*/
import { useFetchQuestion } from '../hooks/FetchQuestion.js';
import { useDispatch, useSelector } from 'react-redux';
const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(questions);
  }, [checked]);

  function onSelect() {
    setChecked(true);
    // console.log('radio button change');
  }

  if (isLoading) return <h3>Loading....</h3>;
  if (serverError) return <h3>{serverError || 'Unknown Error'}</h3>;

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions?.questions}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type='radio'
              value={false}
              name='options'
              id={`q${i}-option`}
              onChange={() => onSelect()}
            />

            <label className='text-primary' htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check ${checked}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
