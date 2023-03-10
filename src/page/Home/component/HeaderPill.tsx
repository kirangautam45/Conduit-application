import { Link } from "react-router-dom";
import "./Header.css";

declare type PillType = {
  text: string;
  link: string;
};

export const HeaderPill = ({ text, link, }: PillType) => {
  return (
    <div className="pillText">
      <Link to={link} className="link">
        {" "}
        {text}
      </Link>
    </div>
  );
};
