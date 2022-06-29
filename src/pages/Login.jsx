import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Fragment } from "react";
import Starfall from "../components/Login/Starfall";
import Input from "../components/Login/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import setCookie from "../hook/setCookie";
import getCookie from "../hook/getCookie";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import "../css/star.css";
const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND}/auth/user/login`,
      data
    );
    if (res.status === 200) {
      const token = res.data.accessToken;
      setCookie("token", token);
      const user = jwtDecode(token);
      dispatch(setCredentials({ ...user }));
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (getCookie("token")) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <Fragment>
      <div className="starLogin absolute z-10"></div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-8 z-20">
        <div className="flex space-x-4 font-bold">
          <h1 className="md:text-5xl text-4xl text-white pt-3">CEBOOSTUP</h1>
          <h1 className="md:text-7xl text-6xl text-red-600">X</h1>
        </div>
        <div className="flex flex-row w-full max-w-2xl overflow-hidden shadow rounded-2xl">
          <Starfall />
          <div className="flex flex-col flex-auto p-8 bg-gray-100 divide-y divide-black text-center">
            <div className="pb-4 text-2xl font-semibold text-black">SignIn</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-4 space-y-5 text-lg font-medium "
            >
              <div className="flex">
                <FontAwesomeIcon
                  icon={faUser}
                  className={`icon-login-form ${
                    errors.username ? "bg-red-600 " : "bg-gray-900 "
                  } `}
                />
                <Input
                  type="text"
                  placeholder="Username"
                  register={{ ...register("username") }}
                  className=""
                />
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faKey}
                  className={`icon-login-form ${
                    errors.password ? "bg-red-600" : "bg-gray-900 "
                  }`}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  register={{ ...register("password") }}
                  className=""
                />
              </div>
              <button className="w-full p-2  text-white bg-green-600 rounded-lg hover:border-transparent font-semibold">
                <FontAwesomeIcon icon={faRightFromBracket} />
                &nbsp;Login
              </button>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="text-black text-xl w-1/2  px-3 py-2 rounded-md border-blue-500 border-2 hover:text-white hover:bg-blue-500"
                  onClick={() => {
                    window.open("https://discord.gg/3yB8hshx8q");
                  }}
                >
                  <FontAwesomeIcon icon={faDiscord} />
                  &nbsp;Discord
                </button>
                <button
                  type="button"
                  className="text-black text-xl w-1/2  md:px-3 py-2 rounded-md border-orange-600 border-2 hover:text-white hover:bg-orange-600"
                  onClick={() => {
                    window.open("https://www.instagram.com/ceboostup_x");
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  &nbsp;Instagram
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
