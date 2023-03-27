import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import { Heading2, Content } from "../../TextField/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardReading, ImageComicReading, NavLink } from "./CardReadingStylel";
const CardHomeReading = () => {
  return (
    <div>
      <CardReading>
        <Row>
          <Col sm={3}>
            <ImageComicReading src="image/demoImg.webp" />
          </Col>
          <Col sm={9}>
            <Row>
              <NavLink>
                <Heading2>Tiêu đề truyện</Heading2>
              </NavLink>
            </Row>
            <Row>
              <Col>
                <NavLink>
                  <Content>Đã đọc chương: 302</Content>
                </NavLink>
              </Col>
              <Col>
                <Button size="small" variant="outlined" color="info">
                  Đọc tiếp
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardReading>
    </div>
  );
};

export default CardHomeReading;
