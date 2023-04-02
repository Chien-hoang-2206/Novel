import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
export const ImageBanner = styled.div`
  font-family: "Roboto", sans-serif;
  height: 90vh;
  border: none;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;
export const TransparentBanner = styled.div`
  margin-top: 100px;
  height: 90vh;
  border: none;
  background-image: linear-gradient(0deg, #fff, 85%, transparent);
  width: 100%;
`;
export const ContainerPageContent = styled.div`
  border-radius: 15px;
  width: 90%;
  margin-inline: auto;
  padding: 5vh;
  background-color: #fff;
  border: 3px solid gray;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  @media (max-width: 1370px) {
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerInfo = styled.div`
  height: 60vh;
`;
export const ContainerTabs = styled(Col)`
  height: 140vh;
`;

export const ContainerTab1 = styled(Row)``;
export const Col1 = styled(Col)``;
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
  border-radius: 10px;
  margin-left: 5vh;
  width: 30%;
  background: rgb(247, 245, 240);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

export const NewChapterLink = styled(Link)`
  margin-top: 1vh;
  text-decoration: none;
`;

