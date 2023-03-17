import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/counter/slice';
import { counter } from '../store/counter/selector';
import React from 'react';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counter);

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => dispatch(decrement())}
        type="submit"
      >
        -
      </button>
      <span className="button"> {count}</span>
      <button
        className="button"
        onClick={() => {
          dispatch(increment());
        }}
        type="submit"
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};
export default Counter;
