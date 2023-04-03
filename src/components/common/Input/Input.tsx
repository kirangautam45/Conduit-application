import React from 'react';
import './Input.css';

declare type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, type, onChange, name }: InputProps) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      autoComplete=""
    />
  );
};
export default Input;
