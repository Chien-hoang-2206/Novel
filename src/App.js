import React from "react";
import HomePage from "./pages/users/homePage";
import NavBar from "./parts/user/navBar";
import TypesPage from "./pages/users/typesPage";
import Footer from "./parts/user/footer";
import ChartPage from "./pages/users/chartPage/chartPage";
import { Parallax } from "react-parallax";
function App() {
  let componentPage;
  switch (window.location.pathname) {
    case "/home":
      componentPage = <HomePage />;
      break;
    case "/types":
      componentPage = <TypesPage />;
      break;
    case "/charts":
      componentPage = <ChartPage />;
      break;
    default:
    // do nothing
  }
  return (
    <>
      <NavBar />
      <Parallax strength={1200} >{componentPage}</Parallax>
      <Parallax strength={600}>
        <div style={{height:"50px"}}></div>
        <Footer/>
      </Parallax>
    </>
  );
}
export default App;
