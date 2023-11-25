import { useState } from "react";
import { Logo } from "../Logo/Logo";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../LoginModal/LoginModal";
import { CurrentTime } from "../CurrentTime/CurrentTime";

export const Navbar = (props) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <>
      <div className="navbar-main">
        <NavLink to="homepage">
          <Logo />
        </NavLink>
        <div className="menu-list">
          <SpanNavLink navLinkName="Trang chủ" route="/homepage" />
          <DropDownMenu />
          <SpanNavLink navLinkName="Tin tức" route="/news" />
          <SpanNavLink navLinkName="Giới thiệu" route="/about" />
          <SpanNavLink navLinkName="Liên hệ" route="/contact" />
        </div>
        <CurrentTime />
        {props.isLoggedIn ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink
              to={`profile/${props.userData.userId}`}
              style={{ textDecoration: "none" }}
            >
              <div className="auth-avatar">
                <img
                  src={`${process.env.PUBLIC_URL}${props.userData.urlAvatar}`}
                  alt=""
                />
                <span>{props.userData.fullName}</span>
              </div>
            </NavLink>
          </div>
        ) : (
          <span
            className="avatar-icon material-symbols-outlined"
            onClick={openLoginModal}
          >
            account_circle
          </span>
        )}
      </div>
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        closeModal={closeLoginModal}
        handleLoginSuccess={props.handleLoginSuccess}
      />
    </>
  );
};

export const SpanNavLink = (props) => {
  return (
    <>
      <div className="nav-link-main">
        <NavLink to={props.route}>{props.navLinkName}</NavLink>
        <div id="underline"></div>
      </div>
    </>
  );
};

export const DropDownMenu = () => {
  return (
    <div className="nav-link-main dropdown">
      <NavLink>Các cuộc đấu giá </NavLink>
      <div id="underline"></div>
      <ul className="dropdown-menu">
        <li>
          <NavLink to="/auction-list" id="dropdown-option">
            Danh sách đấu giá
          </NavLink>
        </li>
        <li>
          <NavLink to="/product-register" id="dropdown-option">
            Đăng bán sản phẩm
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
