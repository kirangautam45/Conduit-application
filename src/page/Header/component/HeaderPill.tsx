import { useLocation, Link } from "react-router-dom";
import "./Header.css";

declare type PillTypeProps = {
  text: string;
  link: string;
};

export const HeaderPill = ({ text, link }: PillTypeProps) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <div className="pillText">
      <Link to={link} className={`${isActive ? "active" : "link"}`}>
        {text}
      </Link>
    </div>
  );
};
