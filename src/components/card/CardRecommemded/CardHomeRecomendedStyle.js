import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerCard = styled.div`
  width: 97%;  
  height: 170px;
  margin-left: 20px;
  margin-right: 30px;
  padding: 20px 5px;
  border-radius :5px;
  &:hover{
    transition: 0.2s ;
    border: 1px solid rgb(95, 189, 211,0.9);
    background: #FFFFCC;
    transform: translateX(-5px);
    box-shadow:  7px 7px 15px #b3b3b3,
    -7px -7px 15px #ffffff;

  }
`;
export const LinkRoute = styled(Link)`
  color: #000;
  height: 100%;
  display: flex;
  align-items: left;
  text-decoration: none;
  font-weight: bold;
  curson: pointer;
  &:hover {
    color: #15cdfc;
  }
`;
export const ImageComicRecommended = styled.img`
  width:  90px;  
  height: 120px;
  object-fit: fill;
  border-radius: 5px;
    border: 2px solid rgb(95, 189, 211,0.9) ;
  box-shadow: 0 5px 10px rgb(95, 189, 211,0.9);
`;
export const ContainerCardType= styled.div`
  text-align: right;
  margin-right: 4px;
  max-height: 6px;
`;
export const ContainerCardStar = styled.div`
  margin-left: 10px;
  text-align: right;
  margin-right: 4px;
`;
export const ContainerRowContent = styled.div`
  height: 70px;
  overflow: hidden;

`;
export const ContainerRowInfo = styled.div`
  margin-left: -10px;
`;