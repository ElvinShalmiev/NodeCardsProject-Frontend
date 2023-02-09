import axios from "axios";

const baseUrl = "http://localhost:3001/api/auth/";

const register = (username: string, email: string, password: string) => {
  return axios.post(baseUrl + "/register", { username, email, password });
};

const login = (email: string, password: string) => {
  return axios.post(baseUrl + "/signin", { email, password }).then((res) => {
    const token = res.data.accessToken;
    if (token) {
      localStorage.setItem("token", token);
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
