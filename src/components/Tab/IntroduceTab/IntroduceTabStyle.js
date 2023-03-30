import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export const ContainerTab1 = styled(Row)`
`
export const Col1 = styled(Col)`
`;
export const Row1 = styled(Row)`

`;

export const Row2 = styled.div`
  border-top: 1px solid RGB(194 192 187);
  padding-left: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1vh;
  min-height: 6vh;
`;
export const Container2 = styled.div`
  display: flex;
  min-width: 70%;
  height: 70%;
`;

export const Row2Icon = styled.div`
  display: flex;
  width: 18vh;
  margin-right: 2px;
  font-size: 25px;
`;
export const Row3 = styled(Row2)`
    border-bottom: 1px solid RGB(194 192 187);
`;

export const Col2 = styled(Col)`

  margin-left: 5vh;
  width: 30%;
  background: rgb(247,245,240);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;
export const Col2Row2 = styled(Col)`
  min-height: 15vh;
  display: inline;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin: 1vh auto;
`;
export const NewChapterLink = styled(Link)`
  margin-top: 1vh;
  text-decoration: none;
`;


export const InfoCol2 = styled.div`
border-bottom: 1px solid RGB(194 192 187);

`;
