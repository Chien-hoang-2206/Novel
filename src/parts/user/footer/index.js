import React from "react";
import { memo } from "react";
import {
  FooterLink,
  Heading,
  FooterLogo,
  FooterLinkSmall,
  FooterColumn,
  FooterColumnIcon,
  ContainerFooter,
  FooterContainer,
  TransparentBanner,
  ImageFooter,
} from "./footerElements";
import { Icon } from '@iconify/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer()  {
  return (
    <>
      <ImageFooter>
      <TransparentBanner>
      <ContainerFooter>
        <Row >  
          <Col sm={3} >
            <FooterLogo src="image/LogoPage.png">
            </FooterLogo>
          </Col>
          <Col>
            <Heading>Product</Heading> 
            <FooterLink>Features</FooterLink>
            <FooterLink>Pricing</FooterLink>
          </Col>
          <Col>
            <Heading>Resources</Heading> 
            <FooterLink>Blog</FooterLink>
            <FooterLink>User guides</FooterLink>
            <FooterLink>Wen binars</FooterLink>
          </Col>
          <Col>
            <Heading>Community</Heading> 
            <FooterLink>Developers</FooterLink>
            <FooterLink>User </FooterLink>
          </Col>
          <Col>
            <Heading>Company</Heading> 
            <FooterLink>About us</FooterLink>
            <FooterLink>John us</FooterLink>
          </Col>
          <Col>
            <Heading>Support</Heading> 
            <FooterLink>Help center</FooterLink>
            <FooterLink>Chat support</FooterLink>
          </Col>
        </Row>
        <Row>
          <FooterContainer>
          <Col sm={8}>
            <FooterColumn>
            <FooterLinkSmall>2022 Brand,Inc.</FooterLinkSmall>
            <FooterLinkSmall>~Privacy</FooterLinkSmall>
            <FooterLinkSmall>~Terms</FooterLinkSmall>
            <FooterLinkSmall>~Sitemap</FooterLinkSmall>
            </FooterColumn>
          </Col>
          <Col  sm={4}>
           <FooterColumnIcon>
           <FooterLinkSmall style={{  }} ><Icon icon="ion:logo-twitter" width="30" height="30"/></FooterLinkSmall>
           <FooterLinkSmall><Icon icon="mdi:facebook" width="30" height="30" /></FooterLinkSmall>
           <FooterLinkSmall><Icon icon="ph:youtube-logo-fill" width="30" height="30" /></FooterLinkSmall>
           <FooterLinkSmall><Icon icon="mdi:linkedin" width="30" height="30" /></FooterLinkSmall>
           </FooterColumnIcon>
          </Col>
          </FooterContainer>
        </Row>
      </ContainerFooter>
        </TransparentBanner>
      </ImageFooter>

    </>
  );
};
export default memo(Footer);