import React, { Fragment, useEffect } from "react";
import "../css/error.css";
import "../css/star.css";
import Starfall from "../components/Login/Starfall";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
import Loading from "./Loading";
const Error = () => {
  const dispatch = useDispatch();
  const { err, user } = useSelector(userSelector);
  useEffect(() => {
    if (!err) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return user ? (
    <Fragment>
      <div className="starLogin relative z-10"></div>
      <div id="notfound" className="bg-app bg-cover z-0">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Loading />
  );
};

export default Error;
