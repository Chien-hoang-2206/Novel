import React from "react";
import HomePage from "./pages/users/homePage";
import TypesPage from "./pages/users/typesPage";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import WelcomePage from "./pages/users/welcomePage";
import NavBar from "./parts/user/navBar";
import Footer from "./parts/user/footer";
import chartsPage from './pages/users/loginPage/index';
import Test2 from "./pages/test2";
function App() {
  
  return (
    <>
    {/* <Test2/> */}
    <BrowserRouter>
    <NavBar/> 
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="types" element={<TypesPage />} />
        <Route path="/charts" element={<chartsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
