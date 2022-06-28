import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
import Loading from "./Loading";
import { useGetTopRankQuery } from "../features/api/usersSlice";
import "../css/home.css";
import Layout from "../components/Layout";
import Mars from "../pictures/homeImage/Mars.png";
import Pluto from "../pictures/homeImage/Pluto.png";
import Jupiter from "../pictures/homeImage/Jupiter_real.png";
import Neptune from "../pictures/homeImage/Naptune.png";
import Saturn from "../pictures/homeImage/Saturn.png";
import Mercury from "../pictures/homeImage/Mercury.png";
import Rocket from "../pictures/homeImage/cloundWithRocket.png";
import Star from "../pictures/homeImage/star.png";
const Home = () => {
  const rankQuery = useGetTopRankQuery();
  const dispatch = useDispatch();
  const userQuery = useSelector(userSelector);
  useEffect(() => {
    if (!userQuery.error && !userQuery.loading) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return userQuery.user ? (
    <Layout>
      <div>
        <div className="text-center relative mt-40 z-10 hero">
          <div className="hero-content">
            <div className="max-w-md">
              <h1 className="text-white md:text-3xl text-xl font-semibold">
                Practice C Programing
              </h1>
              <button className="btn btn-outline btn-success my-5">
                GET START
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="saturns">
            <img src={Saturn} />
          </div>
          <div className="mercury">
            <img src={Mercury} />
          </div>
          <div className="jupiter">
            <img src={Jupiter} />
          </div>
          <div className="mars">
            <img src={Mars} />
          </div>
          <div className="pluto">
            <img src={Pluto} />
          </div>
          <div className="neptune">
            <img src={Neptune} />
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};

export default Home;
