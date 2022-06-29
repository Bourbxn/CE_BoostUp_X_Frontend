import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Submit from "./pages/Submit";
import Ranking from "./pages/Ranking";
import Profile from "./pages/Profile";
import Guide from "./pages/Guide";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

const HomeRoute = () => {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  );
};

const TaskRoute = () => {
  return (
    <ProtectedRoute>
      <Tasks />
    </ProtectedRoute>
  );
};

const SubmitRoute = () => {
  return (
    <ProtectedRoute>
      <Submit />
    </ProtectedRoute>
  );
};

const RankingRoute = () => {
  return (
    <ProtectedRoute>
      <Ranking />
    </ProtectedRoute>
  );
};

const GuideRoute = () => {
  return (
    <ProtectedRoute>
      <Guide />
    </ProtectedRoute>
  );
};

const ProfileRoute = () => {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
};
const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={HomeRoute()} />
      <Route path="/task" element={TaskRoute()}>
        <Route path=":id" element={SubmitRoute()} />
      </Route>
      <Route path="/ranking" element={RankingRoute()} />
      <Route path="/profile" element={ProfileRoute()} />
      <Route path="/guide" element={GuideRoute()} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouteComponent;
