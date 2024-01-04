import React, { useEffect } from 'react';
import '../styles/result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
/*----import actions----*/
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from '../helper/helper';

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(result);
  });
  const totalPoints = queue.length * 2;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 2);
  const flag = flagResult(totalPoints, earnPoints);
  function onRestart() {
    dispatch(resetAllAction);
    dispatch(resetResultAction);
    return (
      <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
          <div className='flex'>
            <span>Username</span>
            <span className='bold'>Rajib das</span>
          </div>
          <div className='flex'>
            <span>Total Quiz Points : </span>
            <span className='bold'>{totalPoints || 0}</span>
          </div>
          <div className='flex'>
            <span>Total Questions : </span>
            <span className='bold'>{queue.length || 0}</span>
          </div>
          <div className='flex'>
            <span>Total Attempts : </span>
            <span className='bold'>{attempts || 0}</span>
          </div>
          <div className='flex'>
            <span>Total Earned Points : </span>
            <span className='bold'>{earnPoints || 0}</span>
          </div>
          <div className='flex'>
            <span>Quiz Result</span>
            <span
              style={{ color: `${flag ? '#04e374' : '#d0174c'}` }}
              className='bold'
            >
              {flag ? 'Passed ' : 'failed'}
            </span>
          </div>
        </div>

        <div className='start'>
          <Link className='btn' to={'/'} onClick={onRestart}>
            Restart
          </Link>
        </div>

        <div className='container'>
          {/* result table */}
          <ResultTable></ResultTable>
        </div>
      </div>
    );
  }
};

export default Result;
