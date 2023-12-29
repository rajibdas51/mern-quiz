import React from 'react';

const Quiz = () => {
  const onPrev = () => {
    console.log('on previous click');
  };
  const onNext = () => {
    console.log('on next click');
  };
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}

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
