import Cooike from "js-cookie";

const getCookie = (name) => {
  return Cooike.get(name);
};

export default getCookie;
