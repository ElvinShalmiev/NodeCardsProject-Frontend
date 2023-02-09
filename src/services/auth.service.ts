import axios from "axios";

const baseUrl = "http://localhost:3001/api/auth";

const register = (username: string, email: string, password: string) => {
  return axios.post(baseUrl + "/signup", { username, email, password });
};

const login = (email: string, password: string) => {
  return axios.post(baseUrl + "/signin", { email, password }).then((res) => {
    const token = res.data.accessToken;
    const email = res.data.email;
    const username = res.data.username;
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ email, username, token }));
    }
    return res.data;
  });
};

const logout = () => {
  localStorage.removeItem("token");
};

export { register, login, logout };

const authService = { register, login, logout };
export default authService;
