import { PageTitle } from "../../Components/PageTitle/PageTitle";
import "./Profile.css";
import avatar from "../../Assets/auction-user-avatar.png";
import { useState } from "react";
import { HorizontalAuctionCard } from "../../Components/AuctionCard/AuctionCard";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { Pagination } from "../../Components/Pagnition/Pagnition";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleClickTab = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <PageTitle pageTitle="Thông tin cá nhân" />
      <div className="profile-content">
        <div className="user-info">
          <img id="avatar" src={avatar} alt="" />
          <span id="userName">
            <h2>Ánh Dương</h2>
          </span>
          <table>
            <tr>
              <th>Mã người dùng</th>
              <td>AD0001</td>
            </tr>
            <tr>
              <th>Ngày sinh</th>
              <td>10/05/2002</td>
            </tr>
            <tr>
              <th>Giới tính</th>
              <td>Nữ</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>dtad1005@gmail.com</td>
            </tr>
            <tr>
              <th>Số điện thoại</th>
              <td>0977634227</td>
            </tr>
            <tr>
              <th>Địa chỉ</th>
              <td>Gia Lâm - Hà Nội</td>
            </tr>
          </table>
          <CustomButton name="Đăng xuất" height="40px" width="100px" />
        </div>
        <div className="history-list">
          <div className="tabs-in-profile">
            <button
              className={`tab-item-in-profile ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => handleClickTab("tab1")}
            >
              Đã đăng ký
            </button>
            <button
              className={`tab-item-in-profile ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => handleClickTab("tab2")}
            >
              Đã đăng bán
            </button>
          </div>
          <div className="auction-list">
            <div
              id="tab1"
              style={{ display: activeTab === "tab1" ? "block" : "none" }}
            >
              <HorizontalAuctionCard />
              <HorizontalAuctionCard />
              <HorizontalAuctionCard />
            </div>
            <div
              id="tab2"
              style={{ display: activeTab === "tab2" ? "block" : "none" }}
            >
              <span>Bạn chưa đăng bán sản phẩm nào!</span>
            </div>
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </>
  );
};
