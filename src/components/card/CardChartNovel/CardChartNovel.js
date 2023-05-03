import React from "react";
import { Introtext } from "../../TextField/TestComponents";
import { BtnAuthLink, BtnLink } from "../../../pages/users/chartPage/ListChart/ListChartStyle";

function CardChartNovel(props) {
  const idNovel = props.id;
  const contentNovel = props.content;
  const index = props.index + 1;
  console.log(index);
  return (
    <div className="box-list">
      <div className="image-novel-chart">
        <div className="img-shadow-novel-chart" />
        <img className="img-novel-chart" src={props.image} />
        {index === 1 ? (
          <img className="flag1" src="/Flag.png" />
        ) : index === 2 ? (
          <img className="flag2" src="/flag2.png" />
        ) : index === 3 ? (
          <img className="flag3" src="/flag3.png" />
        ) : (
          <img className="flag3" src="/flag4.png" />
        )}
        <div className="num"> {index} </div>
      </div>

      <div className="info-novel-chart">
        <BtnLink to={`/novel/${props.id}`}>
          <h4> {props.nameComic} </h4>
        </BtnLink>

        <div className="row-intro">
          <Introtext>
            <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
          </Introtext>
        </div>

        <div className="row-2-chart">
          <BtnAuthLink className="row-auth">
            <i style={{ marginRight: "3px" }} class="fa-solid fa-user"></i>
            {props.auth}
          </BtnAuthLink>
          <div className="row-read">
            <i
              style={{ marginRight: "3px" }}
              class="fa-solid fa-book-open-reader"
            ></i>
            {props.numRead}
          </div>

          <BtnAuthLink className="row-type">
            <div className="type-chart">{props.type1} </div>
            <div style={{ marginLeft: "20px" }} className="type-chart">
              {props.type2}{" "}
            </div>
          </BtnAuthLink>
        </div>
      </div>
    </div>
  );
}

export default CardChartNovel;
