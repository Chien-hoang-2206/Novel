import React from "react";
import "./avatar.css";
import { TextCenter } from "../TextField/TestComponents";

const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar-container">
      <img className="avatar-img" src={src} alt={alt} />
      <TextCenter>Huyền Linh</TextCenter>
    </div>
  );
};

export default Avatar;