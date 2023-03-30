import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerCard = styled.div`
  width: 97%;  
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 30px;
  height: 130px;
`;
export const LinkRoute = styled(Link)`
  color: #767C88;
  heigh: 100%;
  font-size: 2rem;
  width: 80%;
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
`;
export const ContainerCardStar = styled.div`
  margin-left: 10px;
  text-align: right;
  margin-right: 4px;
`;
export const ContainerRowContent = styled.div`
  height: 60px;
  margin-top: -15px;
  margin-bottom: 5px;
`;
export const ContainerRowInfo = styled.div`
  margin-left: -17px;

`;