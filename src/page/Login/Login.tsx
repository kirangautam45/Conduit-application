import { Link } from "react-router-dom";
import Home from "../Home/Home";

export const Login = () => {
  return (
    <div>
      <Home />
      <h1>This is Login Page</h1>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/register"}>Register</Link>
    </div>
  );
};
