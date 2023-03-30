import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const ContainerCard = styled.div`
`;


export const RowTitle = styled(Row)`
  max-height: 6vh;
`;
export const RowAuth= styled(Row)`
  max-height: 6vh;
`;
export const RowType = styled(Row)`
  max-height: 12vh;
  margin-top: 2vh;
`;
export const RowIntro = styled(Row)`
  max-height: 17vh;
  border-radius: 5px;
  margin: 1vh auto;
  padding: 1.1vh 1vh;
  border: 1px solid rgb(214,214,214);
`;
export const RowInfo = styled(Row)`
  margin-top: 2vh;
`;
export const ColAuth = styled(Col)`
`;
export const ColInfo = styled(Col)`
  max-height: 10vh;
  max-width: 20vh;

`;
export const RowStar = styled(Row)`
  max-height: 8vh;
`;
export const ContainerStar = styled.div`
  padding: 0rem 2rem;
  display: flex;
`;
export const ContainerStarIcon = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  font-size: 1.5rem;
  text-align: center;
`;
export const ReviewText = styled.div`
  padding: 0rem 1rem;
  font-size: 25px;
`;
export const ButtonContainer = styled.div`
display:flex;
padding: 1vh 2vh;
`;
export const RowNav = styled(Row)`
  height: 10vh;
  padding-top: 1vh;
`;
export const BtnRead = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 30px;
  background-color: RGB(201 183 67);
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  max-height: 5vh;
  &:hover {
    background-color: rgb(183, 138, 40);
    color: #fff;
  }
`;
export const BtnBookmark = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 30px;
  max-height: 5vh;
  margin-left: 5vh;
  color: gray;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    background-color:RGB(94 89 77);
    color: #fff;
  }
`;
