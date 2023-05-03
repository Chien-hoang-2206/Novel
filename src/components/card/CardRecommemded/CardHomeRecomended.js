import { memo, useState } from "react";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ContainerCard,
  ImageComicRecommended,
  ContainerCardType,
  ContainerCardStar,
  ContainerRowContent,
  ContainerRowInfo,
  LinkRoute,
} from "./CardHomeRecomendedStyle";
import {
  AuthName,
  Heading2,
  Content,
  AuthNameCard,
} from "../../TextField/TestComponents";


function CardHomeRecomended(props) {
  const contentNovel = props.content;
  const [showType, setShowTypes] = useState(true);
  const showSearch = () => {
    if (window.innerWidth <= 967) {
      setShowTypes(false);
    } else {
      setShowTypes(true);
    }
  };
  window.addEventListener("resize", showSearch);
  return (
    <div className="h-28 my-2 md:my-4 md:h-36 px-2 py-2 rounded-md hover:bg-slate-200 shadow-xl">
      <div className="flex px-1 py-1">
        <div className=" w-1/6 h-5/6 md:h-5/6 flex items-center ">
          <img className="w-20 h-24 md:h-32  md:w-24    flex object-fill rounded-md  " src={props.image} />
        </div>
        <div className="w-5/6 mx-2 md:mx-0  ">
          <div className="flex">
            <div className="w-1/2">
              {/* <LinkRoute to="/novel"> */}
              <LinkRoute to={`/novel/${props.id}`}>
                <p className="text-sm md:text-2xl " > {props.nameComic}</p>
              </LinkRoute>
            </div>
            <div className="w-1/2 flex  justify-end">

              <button className="text-xs px-1 py-0 h-5 rounded-md border-2 border-red-300 hover:bg-red-300 "              >
                {props.type1}
              </button>
              {showType &&
                <button className="text-xs  mx-1 px-1 py-0 h-5 rounded-md border-2 border-red-300 hover:bg-red-300"              >
                  {props.type2}
                </button>
              }
            </div>
          </div>

          <div className=" h-14 md:h-20   overflow-hidden">
            <Content>
              <div className="text-slate-500" dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
            </Content>
          </div>
          <div className="  h-10 overflow-hidden">
            <AuthNameCard> {props.auth}</AuthNameCard>
          </div>
        </div>
      </div>
    </div>
  );
}

CardHomeRecomended.defaultProps = {
  image: "image/demoImg.webp",
  nameComic: "Tieu de truyen",
  id: "0123123213",
  type1: "The loai 1",
  type2: "The loai 2",
  type3: "The loai 3",
  content:
    "Description about the product: Lorem ipsum dolor sit amLoct: Lorem ipsum dolor sit amLorem ict: Lorem ipsum dolor sit amLorem ict: Lorem ipsum dolor sit amLorem ict: Lorem ipsum dolor sit amLorem ict: Lorem ipsum dolor sit amLorem ict: Lorem ipsum dolor sit amLorem irem ipsum dolor sit amet, cLorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, cet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ssDescription about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ssDescription about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss",
  auth: "Alibaba",
};
export default memo(CardHomeRecomended);
