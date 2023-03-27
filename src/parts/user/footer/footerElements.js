import styled from 'styled-components';
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
export const ContainerFooterColumn = styled.div`
    display: flex;
    flex-direction: row;
    background: blue;
`
export const FooterColumn = styled.div`
  flex-direction: column;
  text-align: center;
  margin-left: 200px;
`;
export const FooterColumnIcon = styled.div`
  flex-direction: column;
  margin-left: 200px;
`;

export const FooterLinkIcon = styled.div`
  flex: 2;
  text-align: center;
  margin-left: 60px;
  margin-bottom: 20px;
`;
export const FooterLink = styled.a`
  color: ##404247;
  font-size: 15px;
  display: flex;
  font-weight: bold;
  color: #8D8F91;
  &:hover {
      color: #blue;
      transition: 200ms ease-in;
  }
`;
export const FooterLinkSmall = styled.a`
  color: ##404247;
  font-weight: bold;
  font-size: 13px;
  color: #8D8F91;
  &:hover {
      color: #blue;
      transition: 200ms ease-in;
  }
`;   
export const Heading = styled.p`
  font-size: 24px;
  color: ##404247;
  font-weight: bold;
`;
export const FooterLogo = styled.img`
  weight: 180px;
  text-align: left;
  height: 210px;
  padding-bottom: 60px;
`;