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
  const [showPostNewnovel, setshowPostNewnovel] = useState(true);
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
    if (window.innerWidth <= 800) {
      setSearch(false);
      setshowPostNewnovel(false);
    } else {
      setSearch(true);
      setshowPostNewnovel(true);
    }
  };
  window.addEventListener("resize", showSearch);
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavMenuIcon onClick={handleClick} className="flex items-center">
            <i style={{ fontSize: 18, alignItems: "center" }} className={click ? "fas fa-times" : "fas fa-bars"} />
          </NavMenuIcon>
          <div className="flex w-3/12 items-center">
            <NavLogo to="/home" onClick={closeMobileMenu}>
              <NavLogoPage src="/LogoPage.png"></NavLogoPage>
            </NavLogo>

            <ul className=" items-center  text-base flex nav-menu">
              <li>
                <div className="dropdown ">
                  <NavBtnLink to="/types">
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
                  <NavBtnLink to="/charts/trend" >
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
            </ul>
          </div>
          {showPostNewnovel ?
            <div className="mx-20  flex w-4/12 items-center    justify-center rounded-2xl h-6 px-1 py-1">
              <input className=" text-xs  h-6 w-full pr-8  pl-2 bg-white  rounded-2xl border-transparent  relative " placeholder="Tìm kiếm" name="SearchValue" />

              <Link to="/search" className="relative right-7 " > <Icon icon="material-symbols:search-rounded" /> </Link>
            </div>
            : (
              <div className=" flex  w-9/12 items-center   px-2 justify-end  rounded-2xl h-6  py-1">
                <input className=" text-xs  h-6 w-full pr-8  pl-2 bg-white  rounded-2xl border-transparent  relative " placeholder="Tìm kiếm" name="SearchValue" />
                <Link to="/search" className="relative right-7 " > <Icon icon="material-symbols:search-rounded" /> </Link>
              </div>
            )
          }

          {click &&
            <div className="nav-menu active">
              <div>
                <li>
                  <NavBtnLink className="px-2" to="/home" onClick={closeMobileMenu}>Trang Chủ</NavBtnLink>
                </li>
                {loggedIn ? (
                  <li>
                    <NavBtnLink to="post-novel/profile" onClick={closeMobileMenu} >
                      <p >{username}</p>
                    </NavBtnLink>
                  </li>
                ) : (
                  <li>
                    <NavBtnLink className="px-2" to="/login" onClick={closeMobileMenu}>Đăng nhập</NavBtnLink>
                  </li>
                )}
              </div>
            </div>
          }

          {showPostNewnovel &&
            <div className="flex">

              {loggedIn ? (
                <div className="flex">
                  <NavBtnLink to="/post-novel" >
                    Đăng Truyện
                  </NavBtnLink>
                  <div className="dropdown-profile px-2 ">
                    <NavAfterLogin>
                      <p >{username}</p>
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
                </div>
              ) : (
                // Nếu isLogin là false, hiển thị nút đăng nhập
                <div className="flex">
                  <li>
                    <NavBtnLink to="/post-novel" onClick={handleLoginClick} >
                      Đăng Truyện
                    </NavBtnLink>
                  </li>
                  <li>
                    <NavBtnLink className="px-2" onClick={handleLoginClick}>Đăng nhập</NavBtnLink>
                  </li>
                </div>
              )}
            </div>
          }

        </NavbarContainer>
        {showLoginModal && <LoginModal onClose={handleCloseModal} />}
      </Navbar>
    </>
  );
}

export default NarBar;
