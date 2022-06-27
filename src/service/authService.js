import jwtDecode from "jwt-decode";
export const currentUser = () => {
  const token = window.localStorage.getItem("token");
  if (token) return jwtDecode(token);
};

const authService = { currentUser };
export default authService;
