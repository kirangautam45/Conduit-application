import React from "react";
import { useLocation, Link } from "react-router-dom";
import style from "./NavBar.module.css";

declare type PillTypeProps = {
  text: string;
  link: string;
};

export const HeaderPill = ({ text, link }: PillTypeProps) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  const activeClass = isActive ? style.active : style.link;
  return (
    <div className={style.pillText}>
      <Link to={link} className={activeClass}>
        {text}
      </Link>
    </div>
  );
};
