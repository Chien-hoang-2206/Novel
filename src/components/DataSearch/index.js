import React from "react";
import "./style.scss";
import { LinkRoute } from "../card/CardRecommemded/CardHomeRecomendedStyle";

const DataSearch = ({ img, title, id }) => {
  return (
    <div className="dataContainer">
      <div className="data my-3 ml-2 h-10">
        <img src={img} alt="" width={30} height={50} />
        <LinkRoute to={`/novel/${id}`}>
          <span className="ml-4">{title}</span>
        </LinkRoute>
        <div />
      </div>
    </div>
  );
};

export default DataSearch;
