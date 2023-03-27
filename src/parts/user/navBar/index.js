import { memo } from "react";
import {
  Nav,
  NavLink,
  NavBtn,
  NavSearch,
  NavBtnLink,
  NavMenu,
  NavLogo,
  NavSelect,
  NavBtnSearch,
  NavSearchInput,
  NavLogoPage,
  NavSearchBar,
} from "./narBarElements";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
function narBar() {
  return (
    <>
      <Nav>
        <NavLogo>
          <NavLink href="/home">
           <NavLogoPage src="image/LogoPage.png" href="/home"></NavLogoPage>
          </NavLink>
        </NavLogo>
        <NavMenu>
          <NavLink href="/types">Thể loại</NavLink>
          <NavLink href="/charts">Bảng xếp hạng</NavLink>
        </NavMenu>
        <NavSearch>
          <NavSearchBar>
            <NavSelect>
                <option value="1">Tên truyện</option>
                <option value="2">Tóm tắt</option>
            </NavSelect>
            <NavSearchInput name="firstName" />
            <NavBtnSearch  to="/search"><Icon icon="material-symbols:search-rounded" /></NavBtnSearch>
          </NavSearchBar>
        </NavSearch>
        <NavBtn>
          <NavBtnLink to="/login">Đăng nhập</NavBtnLink>
          <NavBtnLink to="/register">Đăng ký</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default memo(narBar);
