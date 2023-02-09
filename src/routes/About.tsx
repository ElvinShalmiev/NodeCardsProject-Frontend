import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const About = () => {
  const { username } = useContext(AuthContext) ?? "Guest";

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  fetch("http://localhost:3001/api/books/all", {
    headers: { token: token },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return <div>Hello {username}</div>;
};

export default About;