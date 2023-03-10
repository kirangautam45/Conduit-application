import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
      <h1>This is Register Page</h1>
      <Link to={"/"}>Home </Link>
      <br />
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Register;
