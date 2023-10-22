import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <NavLink to="homepage">
          <Logo />
        </NavLink>
        <div className="menu-list">
          <NavLink to="homepage">Trang chủ</NavLink>
          <NavLink to="auction-list">Các cuộc đấu giá</NavLink>
          <NavLink to="news">Tin tức</NavLink>
          <NavLink to="about">Giới thiệu</NavLink>
          <NavLink to="contact">Liên hệ</NavLink>
        </div>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
