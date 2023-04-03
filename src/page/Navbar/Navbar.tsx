import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderPill } from './component/HeaderPill';
import style from './component/NavBar.module.css';
import { useAppSelector } from '../../hooks/store';
import { registerUserSelector } from '../../store/register/selector';
import { loginUserSelector } from '../../store/login/selector';

export const NavBar = () => {
  const { responseRegister } = useAppSelector(registerUserSelector);
  const { responseLogin } = useAppSelector(loginUserSelector);

  const usernameInfo =
    (responseLogin && responseLogin.user && responseLogin.user.username) ||
    (responseRegister &&
      responseRegister.user &&
      responseRegister.user.username);

  const PillData = useMemo(
    () => [
      { text: 'Home', link: '/' },
      { text: 'Sign in', link: '/login' },
      { text: 'Sign up', link: '/register' },
    ],[])

  const loginPillData = useMemo(
    () => [
      { text: 'Home', link: '/', image: '' },
      { text: 'New Article', link: '/editor', image: '' },
      { text: 'Settings', link: '/setting', image: '' },
      {
        text: `${usernameInfo}`,
        link: `/username`,
        image: '',
      },
    ],
    [usernameInfo],
  );

  const [navData, setNavData] = useState(PillData);

  useEffect(() => {
    if (
      (responseLogin && responseLogin.user && responseLogin.user.token) ||
      (responseRegister && responseRegister.user && responseRegister.user.token)
    ) {
      setNavData(loginPillData);
    } else {
      setNavData(PillData);
    }
  }, [PillData, loginPillData, responseLogin, responseRegister]);

  return (
    <div className={style.wrapper}>
      <div className={style.titleLeft}>
        <Link to={'/'} className={style.heading}>
          conduit
        </Link>
      </div>
      <div className={style.titleRight}>
        {navData.map((data, index) => (
          <HeaderPill key={index} text={data.text} link={data.link} />
        ))}
      </div>
    </div>
  );
};
