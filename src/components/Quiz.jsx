import React, { useEffect } from 'react';
import Questions from './Questions';
/* import redux store*/
import { UseSelector, useSelector } from 'react-redux';
const Quiz = () => {
  useEffect(() => {
    // console.log(state);
  });
  // previous button event handler
  const onPrev = () => {
    console.log('on previous click');
  };
  // next button event handler
  const onNext = () => {
    console.log('on next click');
  };
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}
      <Questions />
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>
          Prev
        </button>{' '}
        <button className='btn next' onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
