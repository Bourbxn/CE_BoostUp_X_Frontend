import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ebook from "./pages/Ebook";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import Tasks from "./pages/Tasks";

// TEMP
import Submit from "./pages/Submit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
