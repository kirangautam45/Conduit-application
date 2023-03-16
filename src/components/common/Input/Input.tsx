import React from "react";
import "./Input.css";

declare type InputProps = {
  placeholder: string;
  type: string;
};

const Input = ({ placeholder, type }: InputProps) => {
  return <input className="input" type={type} placeholder={placeholder} />;
};
export default Input;
