import React from "react";
import { FormMadal, FormModal, ModalStyle, TranspaentContainer } from "./LoginModalStyle";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Login from "../loginPage";
import SignUp from "../SignUpPage/SignUp";

function LoginModal({ onClose }) {
  return (
    <div>
        <TranspaentContainer>

        <FormModal>
        <span  className="close" onClick={onClose}>&times;</span>
        <Tabs
          defaultActiveKey="login"
          id="uncontrolled-tab-example"
          className="mb-6"
          fill
          style={{ height: "7vh", border: "none"  }}
        >
          <Tab eventKey="login" title="Đăng nhập">
            <Login />
          </Tab>
          <Tab eventKey="signup" title="Đăng ký">
            <SignUp />
          </Tab>
        </Tabs>
        </FormModal>
        </TranspaentContainer>

    </div>
  );
}

export default LoginModal;
