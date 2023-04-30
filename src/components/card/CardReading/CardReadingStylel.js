import styled from "styled-components";
import { Content } from "../../TextField/TestComponents";
import { Link } from "react-router-dom";
export const ImageComicReading = styled.img`
  width: 39px;
  object-fit: fill;
  height: 52px;
  margin-top: -2px;
  border-radius: 5px;
  border: 2px solid rgb(95, 189, 211, 0.2);
  box-shadow: 0 2px 4px rgb(95, 189, 211, 0.6);
`;
export const CardReading = styled.div`
  width: 93%;
  height: 72px;
  margin-left: 10px;
  margin-bottom: 8px;
  padding: 10px 0px;
  &:hover {
    transition: 0.5s;
    border: 1px solid rgb(95, 189, 211, 0.9);
    background: #FFFFCC;
  }
`;
export const ContainerRow = styled.div`
  width: 100%;
  height: 50px;
  margin-top: -5px;
  margin-left: -10px;
`;
export const ChpaetNUm = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const LinkRouteContinue = styled(Link)`
    margin-top: -5px;
    margin-left: 28px;
    text-decoration: none;
    font-family: 'Brandon Text';
    font-style: normal;
    font-weight: 420;
    font-size: 14px;
    padding: 1px 10px;
    line-height: 25px;
    &:hover{
      background: rgb(95, 189, 211, 0.9);
      color: #fff;
      border-radius: 5px;
    }
`;
export const ContentCardHomeReading = styled(Content)`
  margin-top: -14px;
`;
