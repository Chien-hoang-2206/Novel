import React, { useState } from "react";
import HomePage from "./pages/users/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/users/welcomePage";
import NavBar from "./parts/user/navBar";
import Novel from "./pages/users/NovelPage/Novel";
import Table from "./components/Table";
import Login from "./pages/users/loginPage";
import Logout from "./components/Logout/Logout";
import ReadingNovel from "./pages/users/ReadingNovel/ReadingNovel";
import PostNovel from "./pages/users/PostNovel/PostNovel";
import TypesPage from "./pages/users/typesPage";
import InfoAuth from "./pages/users/InfoAuth/InfoAuth";
import NewNovel from "./pages/users/NewNovel/NewNovel";
import MyNovel from "./pages/users/Mynovel/MyNovel";
import MessageAuth from "./pages/users/MessageAuth/MessageAuth";
import WithdrawMoney from "./pages/users/WithdrawMoney/WithdrawMoney";
import EditNovel from "./pages/users/EditNovel/EditNovel";
import ChartPage from "./pages/users/ChartPage/ChartPage";
import ListChart from "./pages/users/ChartPage/Trend/Trend";
import EdiChaptertModel from "./pages/users/EdiChaptertModel/EdiChaptertModel";
import ChatGpt from "./pages/users/ChatGpt/ChatGpt";
import ChatBox from "./pages/users/ChatBox/ChatBox";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [accountID, setaccountID] = useState(
    sessionStorage.getItem("accID") || ""
  );
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage accountID={accountID} />} />
          <Route path="home" element={<HomePage accountID={accountID} />} />
          <Route path="novel/:id" element={<Novel accountID={accountID} />} />
          <Route
            path="novel/chapter/:id"
            element={<ReadingNovel accountID={accountID} />}
          />

          <Route path="types" element={<TypesPage />} />
          <Route path="charts" element={<ChartPage />}>
            <Route path="trend" element={<ListChart />} />
            <Route path="read" element={<ListChart />} />
            <Route path="like" element={<ListChart />} />
            <Route path="bookmark" element={<ListChart />} />
          </Route>

          <Route
            path="post-novel"
            element={<PostNovel accountID={accountID} />}
          >
            <Route path="profile" element={<InfoAuth />} />
            <Route path="post-new-novel" element={<NewNovel accountID={accountID} />}  />
            <Route path="mynovel" element={<MyNovel />}>
              <Route path=":id" element={<EditNovel accountID={accountID} />}>
                <Route path="chapter/:id" element={<EdiChaptertModel/>} />
                <Route path="chapter/add" element={<EdiChaptertModel/>} />
              </Route>
            </Route>
            <Route path="message" element={<MessageAuth />} />
            <Route path="money" element={<WithdrawMoney />} />
          </Route>

          <Route path="logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
