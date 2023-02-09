import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navabar = () => {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>

      {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
      {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};

export default Navabar

// npm i bootstrap sass formik yup react-router-dom react-icons 
// npm i react-modal sweetalert2 react-bootstrap react-toastify react-loader-spinner axios