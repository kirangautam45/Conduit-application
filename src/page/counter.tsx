import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/counter/slice";

const Counter = () => {
  // const count = useSelector(());

  return (
    <div className="wrapper">
      <button className="button">-</button>
      <span className="button"> count </span>
      <button className="button"> + </button>
    </div>
  );
};
export default Counter;
