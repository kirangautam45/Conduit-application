import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Register = () => {
  return (
    <div>
      <Home />
      <h1>This is Register Page</h1>
      <Link to={"/"}>Home </Link>
      <br />
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Register;
