import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerCard = styled(Row)`
  width: 47%;  
  height: 20vh;
  margin-right: 30px;
  margin-bottom: 15px;
`;
export const ImgNovel = styled.img`
  width: 120%;  
  height: 85%;
  margin-top: 5px;
 background-size: cover;
`;
export const LinkRoute = styled(Link)`
  color: #000;
  height: 80%;
  display: flex;
  align-items: left;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
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
  max-height: 2vh;
`;
export const ContainerCardStar = styled.div`
  margin-left: 6px;
  text-align: right;
  margin-top: 2px;
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
`;
export const ContainerRowContent = styled.div`
  height: 60px;
  overflow: hidden;
`;
export const RowContent = styled.div`
  height: 50px;
  overflow: hidden;
`;
export const ContainerRowInfo = styled(Col)`
`;
export const Chapter = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  gap: 5px;
  padding-left: 13px;
  justify-content: flex-start;
`;