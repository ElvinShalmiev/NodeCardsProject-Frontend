import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navabar = () => {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && <NavLink to="/register">Register</NavLink>}
      {isLoggedIn && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};

export default Navabar