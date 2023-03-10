import "./Header.css";
import { HeaderPill } from "./HeaderPill";

export const Header = () => {
  return (
    <div className="wrapper">
      <div className="titleLeft">conduit</div>
      <div className="titleRight">
        <HeaderPill text={"Home"} link={"/"} />
        <HeaderPill text={"Sign In"} link={"/login"} />
        <HeaderPill text={"Sign Up"} link={"/register"} />
      </div>
    </div>
  );
};
