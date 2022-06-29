import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteComponent from "./Route";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./features/auth/authSlice";
import { fetchUser } from "./features/auth/authSlice";
import AppLayout from "./components/AppLayout";

const App = () => {
  const { error, user } = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <AppLayout>
        {user && <Navbar />}
        <RouteComponent />
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
