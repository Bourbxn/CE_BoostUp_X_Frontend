import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
import Loading from "./Loading";
import Layout from "../components/Layout";
import Planet from "../components/Home/Planet";
import RocketJet from "../pictures/homeImage/Rocket.png";
import Top3Card from "../components/Home/Top3Card";
import { NavLink } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const userQuery = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return userQuery.user ? (
    <Layout>
      <div className="text-center relative mt-40 z-10 hero">
        <div className="hero-content">
          <div className="max-w-xl space-y-5">
            <h1 className="text-white md:text-5xl text-xl font-semibold">
              Practice C Programing
            </h1>
            <h1 className="text-white md:text-4xl text-lg font-semibold">
              In 1 Week
            </h1>
            <button className="btn btn-outline btn-success my-5">
              <NavLink to="/tasks">GET START</NavLink>
            </button>
          </div>
        </div>
      </div>
      <Planet />
      <div className="rocketJet">
        <img src={RocketJet} alt="" />
      </div>
      <div className="relative lg:-top-100">
        <div className="text-white font-bold text-center">
          <h1 className="md:text-5xl text-xl">Top 3 ranking</h1>
        </div>
      </div>
      <div className="relative lg:-top-64 ">
        <Top3Card />
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};

export default Home;
