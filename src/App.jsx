import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./features/auth/authSlice";
import { fetchUser } from "./features/auth/authSlice";
import AppLayout from "./components/AppLayout";
import Layout from "./components/Layout";
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
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
              exact
            />
            <Route path="/logout" element={<Logout />} exact />
            <Route path="*" element={<Error />} exact />
          </Routes>
        
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
