import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';

import { NavBar } from '../Navbar/Navbar';
import style from './Login.module.css';

export const Login = () => {
  return (
    <>
      <NavBar />
      <div className={style.loginWrapper}>
        <h1 className={style.login}> Sign In</h1>
        <Link to={'/register'} className={style.link}>
          <p className={style.registerLink}>Need an account? </p>
        </Link>
        <div>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
        </div>
        <div className={style.btn}>
          <Button name={'Sign In'} />
        </div>
      </div>
    </>
  );
};
