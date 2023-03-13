import "./Header.css";
import { HeaderPill } from "./HeaderPill";

export const Header = () => {
  const PillData = [
    { text: "Home", link: "/" },
    { text: "Sign In", link: "/login" },
    { text: "Sign Up", link: "/register" },
  ];
  return (
    <div className="wrapper">
      <div className="titleLeft">conduit</div>
      <div className="titleRight">
        {PillData.map((data) => (
          <HeaderPill text={data.text} link={data.link} />
        ))}
        {/* <HeaderPill text={"Home"} link={"/"} />
        <HeaderPill text={"Sign In"} link={"/login"} />
        <HeaderPill text={"Sign Up"} link={"/register"} /> */}
      </div>
    </div>
  );
};
