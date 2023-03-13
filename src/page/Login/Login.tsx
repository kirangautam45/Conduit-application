import { Button } from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="loginWrapper">
        <h1 className="login"> Sign In</h1>
        <Link to={"/register"} className="link">
          <p className="registerLink">Need an account? </p>
        </Link>
        <div>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button />
        </div>
      </div>
    </>
  );
};
