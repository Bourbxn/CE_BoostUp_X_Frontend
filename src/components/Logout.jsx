const Logout = () => {
  window.localStorage.removeItem("token");
  window.location = "/login";
  return "";
};

export default Logout;
