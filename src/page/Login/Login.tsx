import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';

import { NavBar } from '../Navbar/Navbar';
import style from './Login.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loginUserSelector } from '../../store/login/selector';
import { loginUser } from '../../store/login/slice';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isError, isLoading, isSuccess } =
    useAppSelector(loginUserSelector);
  useEffect(() => {
    if (isError) {
      <>unaccepted error occurs</>;

      if (isSuccess ) {
        navigate('/');
      }
    }
  }, [isError, isLoading, isSuccess, navigate,]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  return (
    <>
      <NavBar />
      <div className={style.loginWrapper}>
        <h1 className={style.login}> Sign In</h1>
        <Link to={'/register'} className={style.link}>
          <p className={style.registerLink}>Need an account? </p>
        </Link>
        <form className={style.center} onSubmit={onSubmit}>
          <Input
            placeholder="Email"
            type="email"
            name={'email'}
            onChange={onChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name={'password'}
            onChange={onChange}
          />
          <div className={style.btn}>
            <Button name={'Sign In'} />
          </div>
        </form>
      </div>
    </>
  );
};
