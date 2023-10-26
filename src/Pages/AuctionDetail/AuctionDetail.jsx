/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { PageTitle } from "../../Components/PageTitle/PageTitle";
import "./AuctionDetail.css";
import auction_toyota from "../../Assets/auction-toyota.jpg";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { CustomLabel } from "../../Components/CustomLabel/CustomLabel";

export const AuctionDetail = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleClickTab = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <PageTitle pageTitle="Ô tô Toyota đã qua sử dụng" />
      <div className="auction-info">
        <div className="image-area">
          <img className="product-img" src={auction_toyota} alt="" />
        </div>
        <div className="info-area">
          <div className="time-area">
            <span>11 giờ</span>
            <span>:</span>
            <span>11 phút</span>
            <span>:</span>
            <span>11 giây</span>
          </div>
          <div className="detail-info">
            <table>
              <tr>
                <th>
                  <CustomLabel label="Mã tài sản:" />
                </th>
                <td>OC123456</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Thời gian mở đăng ký:" />
                </th>
                <td>10/10/2023 08:00:00</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Thời gian kết thúc đăng ký:" />
                </th>
                <td>20/10/2023 08:00:00</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Giá khởi điểm:" />
                </th>
                <td>300.000.000 VNĐ</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Phí đăng ký:" />
                </th>
                <td>500.000 VNĐ</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Bước giá:" />
                </th>
                <td>5.000.000 VNĐ</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Tiền đặt cược:" />
                </th>
                <td>60.000.000 VNĐ</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Tên chủ tài sản:" />
                </th>
                <td>Đỗ Thị Ánh Dương</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Thời gian bắt đầu đấu giá:" />
                </th>
                <td>21/10/2023 09:00:00</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Thời gian kết thúc đấu giá:" />
                </th>
                <td>21/10/2023 09:30:00</td>
              </tr>
            </table>
          </div>
          <CustomButton
            name="Đăng ký tham gia đấu giá"
            height="45px"
            width="100%"
          />
        </div>
      </div>
      <div className="auction-description">
        <div className="tabs">
          <button
            className={`tab-item ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleClickTab("tab1")}
          >
            Mô tả tài sản
          </button>
          <button
            className={`tab-item ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleClickTab("tab2")}
          >
            Thông tin đấu giá
          </button>
          <button
            className={`tab-item ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleClickTab("tab3")}
          >
            Tài liệu liên quan
          </button>
        </div>
        <div className="tab-content">
          <div
            id="tab1"
            style={{ display: activeTab === "tab1" ? "block" : "none" }}
          >
            <h1>MÔ TẢ TÀI SẢN</h1>
          </div>
          <div
            id="tab2"
            style={{ display: activeTab === "tab2" ? "block" : "none" }}
          >
            <h2>Thông tin tổ chức đấu giá</h2>
            <div>
              <label htmlFor="">Tổ chức đấu giá tài sản</label>
              <span>Công ty đấu giá hợp danh An Thuận Phát</span>
            </div>
            <div>
              <label htmlFor="">Đấu giá viên</label>
              <span>Phạm Huy Hiệu</span>
            </div>
            <div>
              <label htmlFor="">Địa chỉ</label>
              <span>Đông Hưng - Thái Bình</span>
            </div>
          </div>
          <div
            id="tab3"
            style={{ display: activeTab === "tab3" ? "block" : "none" }}
          >
            {" "}
            <h1>THÔNG TIN LIÊN QUAN</h1>
          </div>
        </div>
      </div>
    </>
  );
};
