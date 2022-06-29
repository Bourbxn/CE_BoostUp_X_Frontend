import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Tasks from "./pages/Tasks";
import Submit from "./pages/Submit";
import Ranking from "./pages/Ranking";
import Profile from "./pages/Profile";
import Guide from "./pages/Guide";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/task"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      >
        <Route
          path=":id"
          element={
            <ProtectedRoute>
              <Submit />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/ranking"
        element={
          <ProtectedRoute>
            <Ranking />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guide"
        element={
          <ProtectedRoute>
            <Guide />
          </ProtectedRoute>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouteComponent;
