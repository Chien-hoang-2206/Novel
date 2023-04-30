import { Icon } from "@iconify/react";
import "./Navbar.css";
import { useState } from "react";
import {
  AvatarWrap,
  BtnSearch,
  NavAfterLogin,
  NavAvatar,
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
import isLoggedIn from "../../../context/isLoggedIn";
import { Link } from "react-router-dom";

function getAvatarFromCookie() {
  const avatarLink = sessionStorage.getItem("avatar");
  return avatarLink;
}

function NarBar() {
  const avaterLink = sessionStorage.getItem("avatar");
  const username = sessionStorage.getItem("username");
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
    const loggedIn = isLoggedIn();

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
            <NavLogoPage src="/LogoPage.png"></NavLogoPage>
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
              <div className="dropdown">
                <NavBtnLink to="/types" onClick={closeMobileMenu}>
                  Thể loại
                </NavBtnLink>
                <div className="dropdown-content">
                  <div className="grid-content">
                    <a href="/home">Tất cả</a>
                    <a href="/home">Huyễn huyền</a>
                    <a href="/home">Tiên hiệp</a>
                    <a href="/home">Khoa Huyễn</a>
                    <a href="/home">Đô thị</a>
                    <a href="/home">Huyễn Nghi</a>
                    <a href="/home">Kỳ Ảo</a>
                    <a href="/home">Kiếm hiệp</a>
                    <a href="/home">Đồng nhân</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown-bxh">
                <NavBtnLink to="/charts/trend" onClick={closeMobileMenu}>
                  Bảng Xếp Hạng
                </NavBtnLink>
                <div className="dropdown-content">
                  <div className="grid-content">
                    <a href="/home">Tất cả</a>
                    <a href="/home">Huyễn huyền</a>
                    <a href="/home">Tiên hiệp</a>
                    <a href="/home">Khoa Huyễn</a>
                    <a href="/home">Đô thị</a>
                    <a href="/home">Huyễn Nghi</a>
                    <a href="/home">Kỳ Ảo</a>
                    <a href="/home">Kiếm hiệp</a>
                    <a href="/home">Đồng nhân</a>
                  </div>
                </div>
              </div>
            </li>
            {loggedIn ? (
              // Nếu isLogin là true, hiển thị avatar của người dùng
              <div className="dropdown-profile">
                <NavAfterLogin>
                  <AvatarWrap to="/profile" onClick={closeMobileMenu}>
                    <NavAvatar src={avaterLink}></NavAvatar>
                  </AvatarWrap>
                  <h6 style={{ paddingLeft: "0.7vh" }}>{username}</h6>
                  <div className="dropdown-content-profile">
                    <div className="grid-content">
                      <a href="/post-novel/profile">Hồ sơ</a>
                      <a href="/home">Tủ truyện</a>
                      <a href="/post-novel">Đăng truyện</a>
                      <Link to="/logout">Đăng xuất</Link>
                    </div>
                  </div>
                </NavAfterLogin>
              </div>
            ) : (
              // Nếu isLogin là false, hiển thị nút đăng nhập
              <li>
                <NavBtnLink style={{marginTop: "4vh"}} onClick={handleLoginClick}>Đăng nhập</NavBtnLink>
              </li>
            )}
          </ul>
        </NavbarContainer>
      </Navbar>
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </>
  );
}

export default NarBar;
