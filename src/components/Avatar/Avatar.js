import React from "react";
import "./avatar.css";
import { TextCenter } from "../TextField/TestComponents";
import User from "../../assets/user.png"
const Avatar = ({ src, alt }) => {

  return (
    <div className="avatar-container">
      <img className="avatar-img" src={ src|| User } alt={alt} />
      <TextCenter>Huyền Linh</TextCenter>
    </div>
  );
};

export default Avatar;