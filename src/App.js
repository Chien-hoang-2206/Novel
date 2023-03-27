import React from "react";
import HomePage from "./pages/users/homePage";
import NavBar from "./parts/user/navBar";
import TypesPage from "./pages/users/typesPage";
import Footer from "./parts/user/footer";
import ChartPage from "./pages/users/chartPage/chartPage";
import {
  Routes,
  Route
} from 'react-router-dom';
import { Parallax } from "react-parallax";
import WelcomePage from "./pages/users/welcomePage";
function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<WelcomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="types" element={<TypesPage />} />
        <Route path="/charts" element={<ChartPage />} />
      </Routes>
    </>
  );
}
export default App;
