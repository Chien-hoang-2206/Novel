import styled from 'styled-components';

export const ImageComicReading = styled.img`
  background: blue;
  width:  80px;  
  height: 80px;
`;
export const CardReading = styled.div`
  width: 100%;  
  height: 100px;
  &.active {
    color: #15cdfc;
  }
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