import styled from "styled-components";
export const ButtonTransparent = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  color: gray;
  margin: 0.1rem 0.2rem;
  padding: 0vh 2px;
  font-weight: bold;
  &:hover {
    color: #fff;
    background: rgba(87, 84, 85, 0.79);
    border: 2px solid rgb(105, 99, 99);
  }
`;
