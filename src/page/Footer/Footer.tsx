import React from 'react';
//@ts-ignore
import style from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Link
      className={style.footer}
      to={'https://github.com/kirangautam45/Conduit-application.git'}
    >
      <GitHubIcon /> Fork on GitHub
    </Link>
  );
};

export default Footer;
