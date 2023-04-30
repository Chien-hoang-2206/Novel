import {  useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import { Nomal } from "../../../components/TextField/TestComponents";

import axios from "../../../api/axios";
const LOGIN_URL = "/api/accounts/login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(LOGIN_URL, {
        email: email,
        password: pwd,
      })
      .then((response) => {
        if (response.data.user) {
          // Đăng nhập thành công, chuyển hướng đến trang chủ và lưu iduser vào cookies hoặc session
          document.cookie = `userID=${response.data.user._id}`;
          document.cookie = `avatar=${response.data.user.avatarLink}`;
          sessionStorage.setItem('username',response.data.user.name);
          sessionStorage.setItem('accID',response.data.user._id);
          sessionStorage.setItem('avatar',response.data.user.avatarLink);
          window.location.href = '/home'; // Thay đổi đường dẫn tương ứng
          // ReloadNavBar;
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert('Đăng nhập không thành công');
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>

        <div className="Boxinput">
          <Icon icon="ic:baseline-email" />
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <label style={{marginTop:"2vh"}} htmlFor="password">Password</label>

        <div className="Boxinput">
          <Icon icon="mdi:password" />
          <input
            className="input"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>

        <button className="submit" type="submit">
          Login
        </button>
      </form>
      <button
        className="link-btn"
        // onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>

      <div className="link-orther">
        <div className="OR">
          <Nomal>OR</Nomal>
        </div>
        <div className="icon-link">
          <i class="fa-brands fa-facebook" style={{ color: "#075ced" }}></i>
          <i
            class="fa-brands fa-google-plus"
            style={{ color: "#ff0505", marginLeft: "5vh" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Login;
