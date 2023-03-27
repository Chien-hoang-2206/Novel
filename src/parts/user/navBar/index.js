import { Icon } from "@iconify/react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import {
  BtnSearch,
  HH,
  Navbar,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavBtnSearch,
  NavLink,
  NavLogo,
  NavLogoPage,
  NavMenu,
  NavMenuIcon,
  NavSearch,
  NavSearchContainer,
  NavSearchInput,
  NavSelect,
} from "./narBarElements";
import { SpaceBar } from "@mui/icons-material";
import { Nav } from "react-bootstrap";
function NarBar() {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showSearch = () => {
    if (window.innerWidth <= 967) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  };
  window.addEventListener("resize", showSearch);
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavLogo to="/home" onClick={closeMobileMenu}>
            <NavLogoPage src="image/LogoPage.png"></NavLogoPage>
          </NavLogo>

          {search && (
            <NavSearchContainer>
              <NavSearch>
                <NavSelect>
                  <option value="1">Tên</option>
                  <option value="2">Tóm tắt</option>
                </NavSelect>
                <NavSearchInput name="firstName" />
                  <BtnSearch to="/search">
                    <Icon icon="material-symbols:search-rounded" />
                  </BtnSearch>
              </NavSearch>
            </NavSearchContainer>
          )}

          <NavMenuIcon onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </NavMenuIcon>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavBtnLink to="/types" onClick={closeMobileMenu}>
                {" "}
                Thể loại
              </NavBtnLink>
            </li>
            <li>
              <NavBtnLink to="/charts" onClick={closeMobileMenu}>
                Bảng Xếp Hạng
              </NavBtnLink>
            </li>
            <li>
              <NavBtnLink to="/login" onClick={closeMobileMenu}>
                Đăng nhập
              </NavBtnLink>
            </li>
          </ul>

          {/* {search &&   
          


          } */}
          {/* <NavMenu>
        
          <NavLink href="/charts">Bảng xếp hạng</NavLink>
        </NavMenu> */}
          {/* <NavSearch>
            <NavSelect>
                <option value="1">Tên truyện</option>
                <option value="2">Tóm tắt</option>
            </NavSelect>
            <NavSearchInput name="firstName" />
            <NavBtnSearch>
            <NavBtnSearch to="/search"><Icon icon="material-symbols:search-rounded" /></NavBtnSearch>
            </NavBtnSearch>
        </NavSearch>

        
        <NavBtn>
          <NavBtnLink to="/login">Đăng nhập</NavBtnLink>
          <NavBtnLink to="/register">Đăng ký</NavBtnLink>
        </NavBtn> */}
        </NavbarContainer>
      </Navbar>
    </>
  );
}

export default NarBar;
