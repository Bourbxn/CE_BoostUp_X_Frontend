import Cooike from "js-cookie";

const setCookie = (name, value) => {
  Cooike.set(name, value, {
    expires: 7,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default setCookie;
