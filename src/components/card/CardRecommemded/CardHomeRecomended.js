import { memo } from "react";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContainerCard, ImageComicRecommended,NavLink,ContainerCardType, ContainerCardStar} from "./CardHomeRecomendedStyle";
import { AuthName,Heading2,Content } from "../../TextField/Heading";
function CardHomeRecomended() {
  return (
    <div>
      <ContainerCard>
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
                    <Button size="small" variant="outlined" color="error">
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
                  Description about the product: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </ContainerCard>
    </div>
  );
}
export default memo(CardHomeRecomended);
