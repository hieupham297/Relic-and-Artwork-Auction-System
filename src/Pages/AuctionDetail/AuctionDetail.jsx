/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { PageTitle } from "../../Components/PageTitle/PageTitle";
import "./AuctionDetail.css";
import thieu_nu_mua_thu from "../../Assets/thieu-nu-mua-thu.jpg";
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
          <img className="product-img" src={thieu_nu_mua_thu} alt="" />
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
            <table className="info-table">
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
            width="380px"
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
            <table className="info-table">
              <tr>
                <th>
                  <CustomLabel label="Tên" />
                </th>
                <td>Thiếu nữ mùa thu</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Kích thước" />
                </th>
                <td>50 x 60cm</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Chất liệu" />
                </th>
                <td>Sơn dầu</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Năm sáng tác" />
                </th>
                <td>2022</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Họa sỹ" />
                </th>
                <td>Nguyễn Văn Cường</td>
              </tr>
            </table>
          </div>
          <div
            id="tab2"
            style={{ display: activeTab === "tab2" ? "block" : "none" }}
          >
            <table className="info-table">
              <tr>
                <th>
                  <CustomLabel label="Tổ chức đấu giá tài sản" />
                </th>
                <td>Công ty đấu giá hợp danh An Thuận Phát</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Đấu giá viên" />
                </th>
                <td>Phạm Huy Hiệu</td>
              </tr>
              <tr>
                <th>
                  <CustomLabel label="Địa chỉ" />
                </th>
                <td>Đông Hưng - Thái Bình</td>
              </tr>
            </table>
          </div>
          <div
            id="tab3"
            style={{ display: activeTab === "tab3" ? "block" : "none" }}
          >
            {" "}
            <span>Hiện chưa có tài liệu nào được đăng tải</span>
          </div>
        </div>
      </div>
    </>
  );
};
