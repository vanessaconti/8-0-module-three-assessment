import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <NavLink exact to={"/"}>
        <img
          id="logo"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtPUriEerEgnYgBbGaC29RMGwtSw7IiS7nw&usqp=CAU"
          }
          alt="logo"
        />
      </NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
      <NavLink to={"/people"}>People</NavLink>
      <NavLink to={"/locations"}>Locations</NavLink>
    </nav>
  );
};

export default Navbar;
