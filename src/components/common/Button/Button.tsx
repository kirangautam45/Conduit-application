import React from 'react';
import style from './Button.module.css';

declare type ButtonProps = {
  name: string;
};

export const Button = ({ name }: ButtonProps) => {
  return (
    <>
      <button className={style.btn} type="submit">
        <span> {name}</span>
      </button>
    </>
  );
};
