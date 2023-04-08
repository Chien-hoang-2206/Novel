import React, { useState } from "react";
import "./SignUp.css";
import { Icon } from "@iconify/react";
import { Nomal } from "../../../components/TextField/TestComponents";
function SignUp(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setconfirm_passs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div>
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
        <label htmlFor="password">Password</label>

        <div className="Boxinput">
          <Icon icon="mdi:password" />
          <input
            className="input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <label htmlFor="password"> Xác nhận mật khẩu</label>

        <div className="Boxinput">
          <Icon icon="mdi:password" />
          <input
            className="input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>

        <button className="Sunmit" type="submit">
          Đăng ký
        </button>
      </form>

      <div className="link-orther-su">
        <div className="OR">
          <Nomal>OR</Nomal>
        </div>
        <div className="icon-link-su">
          <i class="fa-brands fa-facebook" style={{ color: "#075ced" }}></i>
          <i
            class="fa-brands fa-google-plus"
            style={{ color: "#ff0505", marginLeft: "3vh" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
