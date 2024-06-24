import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from "antd";
import { NavbarProps } from "./types";
import { MoonFilled } from "@ant-design/icons";
const Navbar = ({toggleTheme}:NavbarProps) => {
  return (
    <>
      <div className="navbar">
        <div className="items">
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Button onClick={toggleTheme}><MoonFilled/></Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
