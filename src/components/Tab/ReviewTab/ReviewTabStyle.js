import styled from "styled-components";
import Row from "react-bootstrap/Row";
export const Note = styled.div`
  padding: 2vh;
  border: 1px solid gray;
  border-radius: 5px;
  background: #faeab1;
`;
export const NoteText = styled.div`
  margin: auto;
  width: 90%;
`;
export const UserEditNote = styled.div`
  border: 1px solid rgb(250,234,177);
  border-radius: 4px;
  background: rgb(250,234,177);
  max-height: 33vh;
  margin-bottom: 14vh;
  padding: 1.5vh 3vh;
`;
export const R1Note = styled(Row)`
  background: white;
  margin-bottom: 1vh;
`;
export const NumverSlide = styled.div`
  position: absolute;
  top: 88px;
  right: 330px;
  max-height: 10px;
`;
export const ContainerInputText = styled.div`
  height: 120%;
  max-height: 20vh;
  width: 105%;
  margin-left: -3vh;
  margin-top: 1vh;
  border: 9px solid  rgb(250,234,177);

`;
export const InputText = styled.div`
  padding-left: 3vh;

`;
export const ButtonAdd = styled.div`
  position: "absolute",
    top: "50px",
    left: "50px",
    width: 2rem;
    height: 3rem;
`;
export const BtnAddReview  = styled.button`
  
    backgroundColor: "#4CAF50",
    color: "white",

`;
