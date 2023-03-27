import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardReading,
  ContainerRow,
  ContainerRow1Column1,
  ContainerRow1Column2,
  ContainerRow2,
  ContainerRow4,
  ContainerRow4Row2,
  ContainerUpdate,
  ContaineUpdate,
  ImageComicReading,
  ImageComicRecommended,
  NavLink,
} from "./styleHome";
import {
  AuthName,
  ComicyName,
  Content,
  Heading1,
  Heading2,
} from "../../../components/TextField/Heading";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import NavBar from "../../../parts/user/navBar";
import Footer from "../../../parts/user/footer";
import CardHomeRecomended from "../../../components/card/CardRecommemded/CardHomeRecomended";
import CardHomeReading from "../../../components/card/CardReading/CardHomeReading";
import NewUpdateRowHomeStyle from "../../../components/NewUpdateRow/NewUpdateRowHome";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        {/* Truyen de cu  */}
        <Row>
          <Col sm={8}>
            <Row>
              <ContainerRow1Column1>
                <Col sm={10}>
                  <Heading1>Truyện được đề cử</Heading1>
                </Col>
                <Col sm={3}>
                  <div style={{ marginTop: "10px" }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="inherit"
                      startIcon={
                        <Icon icon="material-symbols:app-registration" />
                      }
                    >
                      Xem tất cả
                    </Button>
                  </div>
                </Col>
              </ContainerRow1Column1>
            </Row>
            <Row>
              <ContainerRow2>
                <CardHomeRecomended />
                <CardHomeRecomended />
                <CardHomeRecomended />
                <CardHomeRecomended />
              </ContainerRow2>
            </Row>
          </Col>
          <Col sm={4}>
            <Row>
              <ContainerRow>
                <Heading1>Đang đọc</Heading1>
              </ContainerRow>
            </Row>
            <Row>
              <ContainerRow1Column2>
                <CardHomeReading />
                <CardHomeReading />
                <CardHomeReading />
                <CardHomeReading />
              </ContainerRow1Column2>
            </Row>
          </Col>
        </Row>

        {/* Moi cap nhat */}

        <ContainerUpdate>
        <Row>
          <Col sm={10}>
            <Heading1>Mới cập nhật</Heading1>
          </Col>
          <Col sm={2}>
            <Button
              size="small"
              variant="contained"
              color="inherit"
              startIcon={<Icon icon="material-symbols:app-registration" />}
            >
              Xem tất cả
            </Button>
          </Col>
        </Row>
        </ContainerUpdate>
        {/* Cac truyen moi cap nhat */}
          <ContainerRow4>
            <Row>
              <Col sm={2}>
                <AuthName>Tên truyện</AuthName>
              </Col>
              <Col sm={2}>
                <AuthName>Thể loại</AuthName>
              </Col>
              <Col sm={4}>
                <AuthName>Chương mới nhất</AuthName>
              </Col>
              <Col>
                <AuthName>Tác giả</AuthName>
              </Col>
              <Col sm={2}>
                <AuthName>Thời gian</AuthName>
              </Col>
            </Row>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
            <NewUpdateRowHomeStyle/>
          </ContainerRow4>

        {/* Phan tich 5 trang web */}
        <hr></hr>
      </Container>
      <Footer />
    </>
  );
}
