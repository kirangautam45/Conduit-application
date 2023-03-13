import { Link } from "react-router-dom";
import "./component/Header.css";
import { HeaderPill } from "./component/HeaderPill";

export const Header = () => {
  const PillData = [
    { text: "Home", link: "/" },
    { text: "Sign in", link: "/login" },
    { text: "Sign up", link: "/register" },
  ];
  return (
    <div className="wrapper">
      <div className="titleLeft">
        <Link to={"/"} className="heading">
          conduit
        </Link>
      </div>
      <div className="titleRight">
        {PillData.map((data, index) => (
          <HeaderPill key={index} text={data.text} link={data.link} />
        ))}
      </div>
    </div>
  );
};
