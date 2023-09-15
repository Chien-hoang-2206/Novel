import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LinkRouteContinue,
} from "./CardReadingStylel";
import { LinkRoute } from "../../../utils/style";
const CardHomeReading = (props) => {
  const chapterID = props.chapterID;
  const novelname = props.nameComic;
  const Idnovel  = props.id;
  let  accID = props.accountID;
 
  return (
    <div className="flex px-3  md:px-2 my-2 md:mt-2   " >
      <div className="w-1/6   h-5/6 md:h-5/6 flex items-center">
        <img alt='img' className="w-3/4 h-3/5 md:h-full  md:w-full flex object-fill rounded-md " src={props.image} />
      </div>
      <div className="w-5/6 px-1 h-16  md:ml-2  ">
        <LinkRoute to={`/novel/${ Idnovel }`}>
          <p className="text-base">{ novelname }</p>
        </LinkRoute>
        <dic className="flex my-3 ">
          <LinkRoute className="w-3/4">
            <p className="text-xs "> Đã đọc: {props.chaperReading}/{props.chaperNum} </p>
          </LinkRoute>
          <LinkRouteContinue className="w-2/4 text-center" to={`/novel/chapter/${chapterID}`} 
            state={{ novelname, Idnovel, accID }}
            >
          <p className="text-xs">  Đọc tiếp </p>
          </LinkRouteContinue>
        </dic>
      </div>
    </div>
  );
};

CardHomeReading.defaultProps = {
  nameComic: "Tieu de truyen",
  chaperReading: "302",
  image: "image/demoImg.webp",
  chaperNum: "2222",
};
export default CardHomeReading;
