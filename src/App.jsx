import Profile from "./assets/components/Profile";
import LoadingSpinner from "./assets/components/LoadingSpinner";
import { useContext } from "react";
import PelisContext from "./context/PelisContext";
import { Container } from "@mui/material";
import NavBar from "./assets/components/ends/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Begin from "./assets/components/Begin";
import Home from "./assets/components/Home";

function App() {
  const { isAuthenticated, isLoading } = useContext(PelisContext);
  if (isLoading) return <LoadingSpinner />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Begin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Begin" element={<Begin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
