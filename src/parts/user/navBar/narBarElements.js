import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ColorsPage } from "../../../style/styleColor";
export const Nav = styled.nav`
  background: ${ColorsPage.background};
  height: 50px;
  display: flex;
  padding: 0.5rem calc(100vx - 1000px / 2);
  border-bottom: 2px solid #c2c5cb;
  z-index: 10;
`;

export const NavLogo = styled.nav`
  display: flex;
  flex-grown: 1;
  padding: 0 1rem;
  heigh: 100%;
  curson: pointer;
`;
export const NavLogoPage = styled.img`
  weight: 50px;
  text-align: left;
  height: 40px;
`;
export const NavLink = styled.a`
  color: #767C88;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: bold;
  heigh: 100%;
  curson: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    curson: pointer;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256cel;
  padding: 10px 22px;
  color: #767C88;
  border: none;
  outline: none;
  font-weight: bold;
  curson: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EBFDFF;
    color: #36CCDF;
  }
`;


export const NavSearch = styled.div`
  flex: 7;
  margin-top: 7px;
  }
`;
export const NavSearchBar = styled.div`
  border-radius: 15px;
  border: 3px solid gray;
  curson: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  }
`;
export const NavSelect = styled.select`
  flex-grow: 1;
  font-size: 13px;
  margin-left: 9px;
  border: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EBFDFF;
    color: #36CCDF;
  }
`;

export const NavBtnSearch = styled(Link)`
    flex-grow: 1;
    margin-left: 5px;
    
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #EBFDFF;
      color: #36CCDF;
    }
  }
`;

export const NavSearchInput = styled.input`
    flex-grow: 3;
    font-size: 19px;
    width: 380px;
    border: none;
    border-left: 2px solid gray;
    border-right: 2px solid gray;
`;
