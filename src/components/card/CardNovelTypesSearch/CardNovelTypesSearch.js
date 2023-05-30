import { memo } from "react";
import React from "react";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
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
  ImgNovel,
  Chapter,
  RowContent,
} from "./CardNovelTypesSearchStyle.js";
import {
  AuthName,
  Heading2,
  Content,
  Nomal,
  TypesText,
} from "../../TextField/TestComponents";
import { Height } from "@mui/icons-material";
import { TypesDeleteText } from "../../TextField/TestComponents";
function CardNovelTypesSearch(props) {
  return (
    <div className=" flex w-11/12 justify-center my-2  md:w-5/12 md:mr-8 md:mb-4 " >
      <div className=" w-24 h-28 flex items-center justify-center" >
        <img className="w-24 h-28 rounded-md shadow-md" src={props.imageNovel || "image/demoImg.webp" } alt="" />
      </div>

      <div className="w-9/12 ml-2"  >
        <Row style={{ maxHeight: "60px" }}>
          <LinkRoute to={`/novel/${props.id}`}>
            <Heading2> {props.nameComic}</Heading2>
          </LinkRoute>
        </Row>

        <Row>
          <ContainerRowContent>
            <RowContent>
              <Content>{props.content}</Content>
            </RowContent>
          </ContainerRowContent>
        </Row>
        <Row>
          <Chapter >
            <i class="fa-solid fa-list"></i>
            <Nomal>Chương: 102</Nomal>
          </Chapter>

        </Row>
      </div>
    </div>
  );
}
CardNovelTypesSearch.defaultProps = {
  nameComic: "Tieu de truyen",
  type: "The loai 1",
  type2: "The loai 2",
  type3: "The loai 3",
  content:
    "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss",
  auth: "Alibaba",
  numStar: "4",
  id: "22",
};
export default CardNovelTypesSearch;
