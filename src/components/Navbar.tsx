import { NavLink } from "react-router-dom";

const Navabar = () => {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navabar;