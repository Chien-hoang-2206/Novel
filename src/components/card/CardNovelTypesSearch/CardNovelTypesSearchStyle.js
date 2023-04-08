import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerCard = styled.div`
  width: 45%;  
  height: 20vh;
  margin-bottom: 3vh;
  margin-right: 4vh;
`;
export const ImgNovel = styled.img`
  width: 100%;  
  height: 90%;
 background-size: cover;
`;
export const LinkRoute = styled(Link)`
  color: #000;
  height: 100%;
  display: flex;
  align-items: left;
  text-decoration: none;
  font-weight: bold;
  curson: pointer;
  &.hover {
    color: #15cdfc;
  }
`;
export const ImageComicRecommended = styled.img`
  width:  90px;  
  height: 120px;
`;
export const ContainerCardType= styled.div`
  text-align: right;
  margin-right: 4px;
  max-height: 2vh;
`;
export const ContainerCardStar = styled.div`
  margin-left: 6px;
  text-align: right;
  margin-right: 4px;
  font-size: 10px;
`;
export const ContainerRowContent = styled.div`
  height: 8.5vh;
  overflow: hidden;

`;
export const ContainerRowInfo = styled(Col)`
  margin-left: -17px;
`;
export const Chapter = styled.div`
  max-width: 80%;
  margin-left: -2vh;
`;