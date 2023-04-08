import { Icon } from "@iconify/react";
import "./Navbar.css";
import { useState } from "react";
import {
  BtnSearch,
  Navbar,
  NavbarContainer,
  NavBtnLink,
  NavLogo,
  NavLogoPage,
  NavMenuIcon,
  NavSearch,
  NavSearchContainer,
  NavSearchInput,
  NavSelect,
} from "./narBarElements";
import LoginModal from "../../../pages/users/LoginModal/LoginModal";
function NarBar() {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };
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
              <NavBtnLink onClick={handleLoginClick}>
                Đăng nhập
              </NavBtnLink>
            </li>
          </ul>

    
        </NavbarContainer>
      </Navbar>
            {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </>
  );
}

export default NarBar;
