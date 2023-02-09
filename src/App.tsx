import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navabar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import About from "./routes/About";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
      </Routes>
    </>
  );
}

export default App;
/* import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api/auth/signin", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: "Batman@gmail.com",
        password: "123456aA!",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;


//AVATAR// HOW TO USE THE TOKEN //VALIDATIONS
//DEPLOYMENT */