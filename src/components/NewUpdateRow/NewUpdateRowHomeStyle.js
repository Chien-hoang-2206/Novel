import styled from 'styled-components';
export const ContainerRow= styled.div`
  border: 2px solid #F7F7F9;
  border-radius: 5px;
  padding-top: 5px;
  padding-left: 6px;
  padding-bottom: 2px;
`;
export const NavLink = styled.a`
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