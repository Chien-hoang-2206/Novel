import styled from "styled-components";
import Modal from "react-modal";

export const FormModal = styled.div`
  background: #fff;
  height: 74%;
  width: 60vh;
  padding: 3vh;
  border: 2px solid black;
  border-radius: 6px;
  position: fixed;
  margin: 15vh 35%;
  z-index: 999;
  opacity: 1;
`
export const TranspaentContainer = styled.div`
  background: rgba(187, 202, 219, 0.44);
  height: 100%;
  width: 100%;
  border-radius: 6px;
  position: absolute;
  z-index: 2000;

`