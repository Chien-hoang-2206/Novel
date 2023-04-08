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
import Novel from "./pages/users/NovelPage/Novel";
import Table from "./components/Table";
import Login from "./pages/users/loginPage";
function App() 
{
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<WelcomePage />} />
        <Route path="novel" element={<Novel />} />
        <Route path="types" element={<TypesPage />} />
        <Route path="/charts" element={<chartsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
