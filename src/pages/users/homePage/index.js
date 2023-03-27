import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardReading,
  ContainerCardStar,
  ContainerCardType,
  ContainerRow,
  ContainerRow1Column1,
  ContainerRow1Column2,
  ContainerRow2,
  ContainerRow4,
  ContainerRow4Row2,
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
export default function HomePage() {
  return (
    <>
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
                <Card>
                  <Container>
                    <Row>
                      <Col sm={3}>
                        <ImageComicRecommended src="image/demoImg.webp" />
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={4}>
                            <NavLink>
                              <Heading2>Tiêu đề truyện</Heading2>
                            </NavLink>
                          </Col>
                          <Col sm={8}>
                            <ContainerCardType>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                              >
                                Thể loại 1
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                style={{ marginLeft: "10px" }}
                              >
                                Thể loại 2
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                style={{ marginLeft: "10px" }}
                                color="error"
                              >
                                Thể loại 3
                              </Button>
                            </ContainerCardType>
                          </Col>
                        </Row>
                        <Row>
                          <Content>
                            Description about the product: Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </Content>
                        </Row>
                        <Row>
                          <Col>
                            <AuthName>Tác giả</AuthName>
                          </Col>
                          <Col>
                            <ContainerCardStar>
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                            </ContainerCardStar>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Card>
                <Card>
                  <Container>
                    <Row>
                      <Col sm={3}>
                        <ImageComicRecommended src="image/demoImg.webp" />
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={4}>
                            <NavLink>
                              <Heading2>Tiêu đề truyện</Heading2>
                            </NavLink>
                          </Col>
                          <Col sm={8}>
                            <ContainerCardType>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                              >
                                Thể loại 1
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                style={{ marginLeft: "10px" }}
                              >
                                Thể loại 2
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                style={{ marginLeft: "10px" }}
                                color="error"
                              >
                                Thể loại 3
                              </Button>
                            </ContainerCardType>
                          </Col>
                        </Row>
                        <Row>
                          <Content>
                            Description about the product: Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </Content>
                        </Row>
                        <Row>
                          <Col>
                            <AuthName>Tác giả</AuthName>
                          </Col>
                          <Col>
                            <ContainerCardStar>
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                            </ContainerCardStar>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Card>
                <Card>
                  <Container>
                    <Row>
                      <Col sm={3}>
                        <ImageComicRecommended src="image/demoImg.webp" />
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={4}>
                            <NavLink>
                              <Heading2>Tiêu đề truyện</Heading2>
                            </NavLink>
                          </Col>
                          <Col sm={8}>
                            <ContainerCardType>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                              >
                                Thể loại 1
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                style={{ marginLeft: "10px" }}
                              >
                                Thể loại 2
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                style={{ marginLeft: "10px" }}
                                color="error"
                              >
                                Thể loại 3
                              </Button>
                            </ContainerCardType>
                          </Col>
                        </Row>
                        <Row>
                          <Content>
                            Description about the product: Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </Content>
                        </Row>
                        <Row>
                          <Col>
                            <AuthName>Tác giả</AuthName>
                          </Col>
                          <Col>
                            <ContainerCardStar>
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                            </ContainerCardStar>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Card>
                <Card>
                  <Container>
                    <Row>
                      <Col sm={3}>
                        <ImageComicRecommended src="image/demoImg.webp" />
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={4}>
                            <NavLink>
                              <Heading2>Tiêu đề truyện</Heading2>
                            </NavLink>
                          </Col>
                          <Col sm={8}>
                            <ContainerCardType>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                              >
                                Thể loại 1
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                style={{ marginLeft: "10px" }}
                              >
                                Thể loại 2
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                style={{ marginLeft: "10px" }}
                                color="error"
                              >
                                Thể loại 3
                              </Button>
                            </ContainerCardType>
                          </Col>
                        </Row>
                        <Row>
                          <Content>
                            Description about the product: Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </Content>
                        </Row>
                        <Row>
                          <Col>
                            <AuthName>Tác giả</AuthName>
                          </Col>
                          <Col>
                            <ContainerCardStar>
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                              <Icon icon="material-symbols:star" />
                            </ContainerCardStar>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Card>
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
              </ContainerRow1Column2>
            </Row>
          </Col>
        </Row>

        {/* Moi cap nhat */}
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

        {/* Cac truyen moi cap nhat */}
        <Row>
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
            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>

            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>

            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>

            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>

            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>

            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>

            <ContainerRow4Row2>
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
                      <Content>
                        {" "}
                        Chương 3333: Dương Khai đại chiến cuối cùng{" "}
                      </Content>
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
            </ContainerRow4Row2>
          </ContainerRow4>
        </Row>

        {/* Phan tich 5 trang web */}
        <hr></hr>
        <Row>
          <Heading1> Phân tích 5 trang web tương tự</Heading1>
        </Row>
        <Row>
          {/* <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Wattpad</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Truyenyy</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Thichtruyen</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Sstruyen.vn</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="4">
            <h2>jQuery and AJAX is FUN!!!</h2>
<p id="p1">This is some text in a paragraph.</p>
              <Accordion.Header>Dtruyen</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}

        </Row>
      </Container>
    </>
  );
}
