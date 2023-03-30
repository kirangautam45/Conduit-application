import React, { useEffect, useState } from 'react';
import { Button } from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import { NavBar } from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { registerUserSelector } from '../../store/user/selector';
import { registerUser } from '../../store/user/slice';
import style from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(registerUserSelector);

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    dispatch(registerUser(userData));
  };
  return (
    <>
      <NavBar />
      <div className={style.registerWrapper}>
        <h1 className={style.register}> Sign In</h1>
        <Link className={style.link} to={'/login'}>
          <p className={style.loginLink}>Have an account? </p>
        </Link>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Username"
            type="text"
            onChange={onChange}
            name={'username'}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={onChange}
            name={'email'}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={onChange}
            name={'password'}
          />
          <div className={style.btn}>
            <Button name={'Sign Up'} />
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
