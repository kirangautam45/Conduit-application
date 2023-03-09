import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter/slice";
import { counter } from "../store/counter/selector";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counter);



  return (
    <div className="wrapper">
      <button className="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="button"> {count}</span>
      <button
        className="button"
        onClick={() => {
          dispatch(increment());
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
export default Counter;
