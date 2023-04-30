import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heading2 } from "../../TextField/TestComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardReading,
  ChpaetNUm,
  ContainerRow,
  ContentCardHomeReading,
  ImageComicReading,
  LinkRouteContinue,
} from "./CardReadingStylel";
import { LinkRoute } from "../../../utils/style";
import { Link } from "react-router-dom";
const CardHomeReading = (props) => {
  const chapterID = props.chapterID;
  return (
    <div>
      <CardReading>
        <Row>
          <Col sm={2}>
            <ImageComicReading src={props.image} />
          </Col>
          <Col sm={10}>
            <ContainerRow>
              <LinkRoute to={`/novel/${props.id}`}>
                <Heading2>{props.nameComic}</Heading2>
              </LinkRoute>

              <ChpaetNUm>
                <LinkRoute>
                    Đã đọc chương: {props.chaperReading}/{props.chaperNum}
                </LinkRoute>
                <LinkRouteContinue to={`/novel/chapter/${chapterID}`}>
                  {" "}
                  Đọc tiếp{" "}
                </LinkRouteContinue>
              </ChpaetNUm>
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
