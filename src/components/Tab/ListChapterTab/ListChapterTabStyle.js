import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export const Row1 = styled.div`
  position: relative;
`;
export const ColButton = styled.div`
  position: absolute;
  top: 9px;
  right: 0;
  float: right;
`;
export const ColSearch = styled.div`
  position: absolute;
  top: 10px;
  right: 7vh;
  float: right;
`;
export const LinkChapter = styled(Link)`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: gray;
  text-decoration: none;
  align-items: center;
  width:40px;
  height: 40px;
  background: rgb(255, 198, 111);
  &:hover{
  color: #fff;
    
  }
`;

export const Chapter = styled.div`
  display: flex;
  padding: 5px 5px;
`;
export const ChapterEdit = styled.div`
  display: flex;
  padding-right: 3rem;
  padding-left: 1rem;
`;

export const ContainerColAuth = styled(Col)``;
export const ColAuthFixed = styled.div`
  position: sticky;
  top: 0;
  z-index: 990;
  left: 30;

  bottom: 20vh;
  background: rgb(247, 245, 240);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;
export const InfoCol2 = styled.div`
  border: 1px solid RGB(194 192 187);
  background: rgb(247, 245, 240);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 17vh;
`;
export const Col2Row2 = styled(Col)`
  min-height: 15vh;
  font-size: 15px;
  margin: 2vh auto;
`;
