import Cooike from "js-cookie";

const removeCookie = (name) => {
  Cooike.remove(name);
  window.location = "/login";
};

export default removeCookie;
