import { CustomButton } from "../CustomButton/CustomButton";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const avaImg = require("../../Assets/auction-user-avatar.png");
export const Sidebar = () => {
  const handleLogout = () => {
    window.location.href = "/homepage";
  };
  return (
    <div className="sidebar-main">
      <div style={{ marginLeft: "50px" }}>
        <Logo />
      </div>

      <div className="admin-account">
        <img src={avaImg} alt="" />
        <span>System admin</span>
      </div>
      <div className="sidebar-menu">
        <NavLink
          to="/admin/user-manage"
          className="sidebar-tab"
          activeClassName="active"
        >
          Thống kê người dùng
        </NavLink>
        <NavLink
          to="/admin/approve-auction"
          className="sidebar-tab"
          activeClassName="active"
        >
          Phê duyệt đăng ký đấu giá
        </NavLink>
        <NavLink
          to="/admin/statistic"
          className="sidebar-tab"
          activeClassName="active"
        >
          Thống kê đấu giá
        </NavLink>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        <CustomButton
          name="Đăng xuất"
          width="100px"
          height="40px"
          onClick={() => handleLogout()}
        />
      </div>
    </div>
  );
};
