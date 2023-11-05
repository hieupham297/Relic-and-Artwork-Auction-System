import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../LoginModal/LoginModal";

export const Navbar = () => {
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
          <SpanNavLink navLinkName="Các cuộc đấu giá" route="/auction-list" />
          <SpanNavLink navLinkName="Tin tức" route="/news" />
          <SpanNavLink navLinkName="Giới thiệu" route="/about" />
          <SpanNavLink navLinkName="Liên hệ" route="/contact" />
        </div>
        <Search />
        <span
          className="avatar-icon material-symbols-outlined"
          onClick={openLoginModal}
        >
          account_circle
        </span>
      </div>
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        closeModal={closeLoginModal}
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
