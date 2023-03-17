import { Button } from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import { NavBar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Login.css';
import React from 'react';

export const Login = () => {
  return (
    <>
      <NavBar />
      <div className="loginWrapper">
        <h1 className="login"> Sign In</h1>
        <Link to={'/register'} className="link">
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
