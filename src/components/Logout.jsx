const Logout = () => {
  window.localStorage.removeItem("token");
  window.location = "/login";
};

export default Logout;
