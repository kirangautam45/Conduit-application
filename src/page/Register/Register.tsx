import React from "react";
import { Button } from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import { NavBar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import style from "./Register.module.css";

const Register = () => {
  return (
    <>
      <NavBar />
      <div className={style.loginWrapper}>
        <h1 className={style.login}> Sign In</h1>
        <Link className={style.link} to={"/login"}>
          <p className={style.registerLink}>Have an account? </p>
        </Link>
        <div>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button />
        </div>
      </div>
    </>
  );
};
export default Register;
