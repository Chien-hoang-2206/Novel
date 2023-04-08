import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heading2 } from "../../TextField/TestComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardReading, ContainerRow, ContentCardHomeReading, ImageComicReading } from "./CardReadingStylel";
import {  LinkRoute } from "../../../utils/style";
const CardHomeReading = (props) => {
  return (
    <div>
      <CardReading>
        <Row>
          <Col sm={2}>
            <ImageComicReading src={props.image} />
          </Col>
          <Col sm={10}>
          <ContainerRow>
            <Row>
              <LinkRoute>
                <Heading2>{props.nameComic}</Heading2>
              </LinkRoute>
            </Row>
            <Row>
                <LinkRoute>
                  <ContentCardHomeReading>Đã đọc chương:   {props.chaperReading}/{props.chaperNum}</ContentCardHomeReading>
                </LinkRoute>
            </Row>
          </ContainerRow>
          </Col>
        </Row>
      </CardReading>
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
