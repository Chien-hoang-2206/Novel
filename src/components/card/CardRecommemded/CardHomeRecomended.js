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
  LinkRoute,
} from "./CardHomeRecomendedStyle";
import { AuthName, Heading2, Content } from "../../TextField/TestComponents";
function CardHomeRecomended(props) {
  return (
      <ContainerCard>
          <Row> 
            <Col sm={2}>
              <ImageComicRecommended src= {props.image}/>
            </Col>
            <Col sm={10}>
              <ContainerRowInfo>
              <Row style={{ maxHeight:"5vh"}}>
                <Col sm={6} style={{maxHeight:"4vh" }}>
                  <LinkRoute to="/novel">
                    <Heading2> {props.nameComic}</Heading2>
                  </LinkRoute>
                  </Col>
                <Col sm={6} style={{ maxHeight:"5vh", justifyContent: "end" , display: "flex"}}    >
                    <Button   size="small" variant="outlined" color="error" style={{ maxHeight:"4vh" , marginRight: "1vh"}} >
                      {props.type1}
                    </Button>
                    <Button   size="small" variant="outlined" color="error" style={{ maxHeight:"4vh"}} >
                      {props.type2}
                    </Button>
                    {/* <Button
                      size="small"
                      variant="outlined"
                      style={{ marginLeft: "10px" ,maxHeight:"3vh"}}
                      color="error"

                    >
                      {props.type3}
                    </Button> */}
               
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
      </ContainerCard>
  );
}

CardHomeRecomended.defaultProps = {
  image: "image/demoImg.webp",
  nameComic: "Tieu de truyen",
  type1: "The loai 1",
  type2: "The loai 2",
  type3: "The loai 3",
  content: "Description about the product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ss",
  auth: "Alibaba",
  numStar: "4",
};
export default memo(CardHomeRecomended);
