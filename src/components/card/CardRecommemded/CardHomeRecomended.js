import { memo } from "react";
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
  return (
    <ContainerCard>
      <Row>
        <Col sm={2}>
          <ImageComicRecommended src={props.image} />
        </Col>
        <Col sm={10}>
          <ContainerRowInfo>
            <Row style={{ maxHeight: "25px" }}>
              <Col sm={6} style={{ maxHeight: "10px" }}>
                {/* <LinkRoute to="/novel"> */}
                <LinkRoute to={`/novel/${props.id}`}>
                  <Heading2> {props.nameComic}</Heading2>
                </LinkRoute>
              </Col>
              <Col
                sm={6}
                style={{
                  maxHeight: "22px",
                  justifyContent: "end",
                  display: "flex",
                }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  style={{ maxHeight: "4vh", marginRight: "1vh" }}
                >
                  {props.type1}
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  style={{ maxHeight: "25px" }}
                >
                  {props.type2}
                </Button>
              </Col>
            </Row>

            <Row>
              <ContainerRowContent>
                <Content>
                  <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
                </Content>
              </ContainerRowContent>
            </Row>
            <Row style={{ marginTop: "3px" }}>
              <Col>
                <AuthNameCard> {props.auth}</AuthNameCard>
              </Col>
              <Col></Col>
            </Row>
          </ContainerRowInfo>
        </Col>
      </Row>
    </ContainerCard>
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
    "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss",
  auth: "Alibaba",
};
export default memo(CardHomeRecomended);
