import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderPill } from './component/HeaderPill';
import style from './component/NavBar.module.css';

export const NavBar = () => {
  const PillData = [
    { text: 'Home', link: '/' },
    { text: 'Sign in', link: '/login' },
    { text: 'Sign up', link: '/register' },
  ];

  const loginPillData = [
    { text: 'Home', link: '/', image: '' },
    { text: 'New Article', link: '/editor', image: '' },
    { text: 'Settings', link: '/Setting', image: '' },
    { text: '', link: `username`, image: '' },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.titleLeft}>
        <Link to={'/'} className={style.heading}>
          conduit
        </Link>
      </div>
      <div className={style.titleRight}>
        {PillData.map((data, index) => (
          <HeaderPill key={index} text={data.text} link={data.link} />
        ))}
      </div>
    </div>
  );
};
