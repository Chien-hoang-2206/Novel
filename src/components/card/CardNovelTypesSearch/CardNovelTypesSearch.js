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
    <ContainerCard>
      <Row>
        <Col sm={4} style={{ Height: "15vh" }}>
          <ImgNovel src="image/demoImg.webp" />
        </Col>

        <ContainerRowInfo sm={8}>
          <Row style={{ maxHeight: "5vh" }}>
            <Col sm={7} style={{ maxHeight: "4vh" }}>
              <LinkRoute to="/novel">
                <Heading2> {props.nameComic}</Heading2>
              </LinkRoute>
            </Col>
          </Row>

          <Row>
            <ContainerRowContent>
              <Content>{props.content}</Content>
            </ContainerRowContent>
          </Row>
          <Row>
            <Col>
              <AuthName> {props.auth}</AuthName>
            </Col>
            <Col>
              <ContainerCardStar>
                {props.numStar}
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
              </ContainerCardStar>
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Chapter >
                <Nomal>Chương: 102</Nomal>
              </Chapter>
            </Col>
            <Col sm={5}>
              <Button
                size="small"
                variant="outlined"
                color="error"
                style={{ maxHeight: "3vh" }}
              >
                <TypesText>{props.type2}</TypesText>
              </Button>
            </Col>
          </Row>
        </ContainerRowInfo>
      </Row>
    </ContainerCard>
  );
}
CardNovelTypesSearch.defaultProps = {
  nameComic: "Tieu de truyen",
  type1: "The loai 1",
  type2: "The loai 2",
  type3: "The loai 3",
  content:
    "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss",
  auth: "Alibaba",
  numStar: "4",
};
export default CardNovelTypesSearch;
