import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
import Loading from "./Loading";
import Table from "../components/Ranking/Table";

const Ranking = () => {
  const dispatch = useDispatch();
  const userQuery = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return userQuery.user ? (
    <Layout>
      <div className="text-center">
        <h1 className="md:text-3xl text-2xl font-bold text-white">Ranking</h1>
      </div>
      <Table />
    </Layout>
  ) : (
    <Loading />
  );
};

export default Ranking;
