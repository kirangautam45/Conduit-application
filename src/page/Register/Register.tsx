import React from 'react';
import { Button } from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import { NavBar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import style from './Register.module.css';

const Register = () => {
  return (
    <>
      <NavBar />
      <div className={style.registerWrapper}>
        <h1 className={style.register}> Sign In</h1>
        <Link className={style.link} to={'/login'}>
          <p className={style.loginLink}>Have an account? </p>
        </Link>
        <form>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <div className={style.btn}>
            <Button name={'Sign Up'} />
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
