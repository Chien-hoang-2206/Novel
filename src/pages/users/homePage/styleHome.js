import styled from 'styled-components';

export const ContainerRow = styled.div`
  padding-top: 40px;
`;
export const ContainerRow1Column1 = styled(ContainerRow)`
  display: flex;
  flex-direction: row;
`;
export const ContainerRow1Column2 = styled.div`
  }
`;
export const ContainerRow2 = styled.div`
  width: 100%;  
  height: 660px;
`;
export const ContainerRow4 = styled.div`
  width: 100%;
  text-align: center;  
  margin-left: 5px;
  padding-right: 20px;
`;
export const ContainerCardStar = styled.div`
  margin-left: 10px;
  text-align: right;
  margin-right: 4px;
`;
export const ContainerCardType= styled.div`
  text-align: right;
  margin-right: 4px;
`;
export const ContainerRow4Row2= styled.div`
  border: 2px solid #F7F7F9;
  border-radius: 4px;
  padding-top: 7px;
  padding-bottom: 2px;
`;
export const Box = styled.div`
  background: ##404247;
  position: absolute;
  bottom: 0;
  width: 100%;  
  height:40%;
  @media (max-width: 1000px) {
    padding: 100px 100px;
  }
`;

export const Card = styled.div`
  width: 100%;  
  height: 150px;
  margin-top: 10px;
  &.active {
    color: #15cdfc;
  }

`;
export const CardReading = styled.div`
  width: 100%;  
  height: 100px;
  &.active {
    color: #15cdfc;
  }

`;
export const ImageComicRecommended = styled.img`
  background: blue;
  width:  170px;  
  height: 150px;
`;
export const ImageComicReading = styled.img`
  background: blue;
  width:  80px;  
  height: 80px;
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
