import styled from "styled-components"

export const Link = styled.a`
  color: #767C88;
  display: flex;
  margin-top: 2px;
  align-items: left;
  text-decoration: none;
  font-weight: bold;
  heigh: 100%;
  curson: pointer;

  &.active {
    color: #15cdfc;
  }
`;