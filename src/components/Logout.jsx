import removeCookie from "../hook/removeCookie";
const Logout = () => {
  removeCookie("token");
};

export default Logout;
