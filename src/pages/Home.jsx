import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Planet from "../components/Home/Planet";
import Top3Card from "../components/Home/Top3Card";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
import Loading from "./Loading";
import { useGetTopRankQuery } from "../features/api/userSlice";
import "../css/home.css";

const Home = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetTopRankQuery();
  const dispatch = useDispatch();
  const { err, user } = useSelector(userSelector);
  useEffect(() => {
    if (!err) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return user ? (
    <div className="home-layout">
      <Planet />
      <div className=" text-1">
        Practice C Programing
        <br />
        In 2 Week
        <br />
        <Link to="/Tasks">
          <button className="button-getStart">GET START</button>
        </Link>
      </div>

      <p className="text-2">Top 3 ranking</p>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
