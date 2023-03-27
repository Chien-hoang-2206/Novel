import styled from 'styled-components';
export const ContainerCard = styled.div`
  width: 800px;  
  height: 150px;
  margin-top: 10px;
  &.active {
    color: #15cdfc;
  }
`;
export const ImageComicRecommended = styled.img`
  background: blue;
  width:  170px;  
  height: 150px;
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
export const ContainerCardType= styled.div`
  text-align: right;
  margin-right: 4px;
`;
export const ContainerCardStar = styled.div`
  margin-left: 10px;
  text-align: right;
  margin-right: 4px;
`;