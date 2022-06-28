import React, { Fragment, useEffect } from "react";
import "../css/error.css";
import "../css/star.css";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
const Error = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(userSelector);
  useEffect(() => {
    if (!error) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <Fragment>
      <div id="notfound" className="bg-app bg-cover z-20">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
