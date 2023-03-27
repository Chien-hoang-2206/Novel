import { Button } from "@mui/material";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ComicyName, Content } from "../TextField/TestComponents";
import { ContainerRow, NavLink } from "./NewUpdateRowHomeStyle";

const NewUpdateRowHomeStyle = () => {
  return (
    <div>
      <ContainerRow>
        <Row>
          <Col sm={2}>
            <NavLink>
              <ComicyName>Anon int isekai mo jarai</ComicyName>
            </NavLink>
          </Col>
          <Col sm={2}>
            <div style={{ marginLeft: "-80px" }}>
              <Button size="small" variant="outlined" color="error">
                Thể loại 1
              </Button>
            </div>
          </Col>
          <Col sm={4}>
            <div style={{ marginLeft: "-17px" }}>
              <NavLink href="/tap1">
                <Content> Chương 3333: Dương Khai đại chiến cuối cùng </Content>
              </NavLink>
            </div>
          </Col>
          <Col sm={2}>
            {" "}
            <Content>Jushu mukaidai</Content>
          </Col>
          <Col sm={2}>
            {" "}
            <Content>5 phút trước</Content>
          </Col>
        </Row>
      </ContainerRow>
    </div>
  );
};

export default NewUpdateRowHomeStyle;
