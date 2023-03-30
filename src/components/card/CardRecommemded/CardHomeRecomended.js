import { memo } from "react";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import React from "react";
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
} from "./CardHomeRecomendedStyle";
import { AuthName, Heading2, Content } from "../../TextField/TestComponents";
import { Link } from "../../../utils/style";
function CardHomeRecomended(props) {
  return (
    <div>
      <ContainerCard>
        <Container>
          <Row>
            <Col sm={2}>
              <ImageComicRecommended src="image/demoImg.webp" />
            </Col>
            <Col sm={10}>
              <ContainerRowInfo>
              <Row>
                <Col sm={4}>
                  <Link>
                    <Heading2> {props.nameComic}</Heading2>
                  </Link>
                  </Col>
                <Col sm={8}>
                  <ContainerCardType>
                    <Button size="small" variant="outlined" color="error">
                      {props.type2}
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      style={{ marginLeft: "10px" }}
                      color="error"
                    >
                      {props.type3}
                    </Button>
                  </ContainerCardType>
                </Col>
              </Row>
              
              <Row>
              <ContainerRowContent>  
                <Content>
                 {props.content}
                </Content>
                </ContainerRowContent>
              </Row>
              <Row>
                <Col>
                  <AuthName>  {props.auth}</AuthName>
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
              </ContainerRowInfo>
            </Col>
          </Row>
        </Container>
      </ContainerCard>
    </div>
  );
}

CardHomeRecomended.defaultProps = {
  nameComic: "Tieu de truyen",
  type1: "The loai 1",
  type2: "The loai 2",
  type3: "The loai 3",
  content: "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss",
  auth: "Alibaba",
  numStar: "4",
};
export default memo(CardHomeRecomended);
