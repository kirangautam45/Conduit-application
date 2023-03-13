import { Link } from "react-router-dom";
import { Header } from "../Header/Header";

const Register = () => {
  return (
    <div>
      <Header />
      <h1>This is Register Page</h1>
      <Link to={"/"}>Home </Link>
      <br />
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Register;
