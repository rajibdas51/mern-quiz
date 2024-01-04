import React from 'react';
import '../styles/result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';
/*----import actions----*/
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';

const Result = () => {
  const dispatch = useDispatch();

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
            <span className='bold'>{10}</span>
          </div>
          <div className='flex'>
            <span>Total Questions : </span>
            <span className='bold'>{10}</span>
          </div>
          <div className='flex'>
            <span>Total Attempts : </span>
            <span className='bold'>{3}</span>
          </div>
          <div className='flex'>
            <span>Total Earned Points : </span>
            <span className='bold'>{7}</span>
          </div>
          <div className='flex'>
            <span>Quiz Result</span>
            <span className='bold'>{'Passed '}</span>
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
