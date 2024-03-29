/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../Components/PageTitle/PageTitle";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { CustomLabel } from "../../Components/CustomLabel/CustomLabel";
import { LoginModal } from "../../Components/LoginModal/LoginModal";
import "./AuctionDetail.css";
import { findAuctionById } from "../../Utils/function";
import { MessageBox } from "../../Components/MessageBox/MessageBox";
import { formatCurrency } from "../../Utils/function";

export const AuctionDetail = (props) => {
  const sampleData = require("../../Data/data.json");
  const { auctionId } = useParams();
  const [activeTab, setActiveTab] = useState("tab1");
  const [detailData, setDetailData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisteredAuction, setIsRegisteredAuction] = useState(false);

  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);

  // Login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Change tab product info
  const handleClickTab = (tabId) => {
    setActiveTab(tabId);
  };

  // Register Auction
  const handleRegisterAuction = () => {
    setIsMessageSuccess(true);
  };
  const handleCloseMessageSuccess = () => {
    setIsRegisteredAuction(true);
    setIsMessageSuccess(false);
  };

  // Cancel Register Auction
  const handleCancelRegister = () => {
    setIsOpenConfirmation(true);
  };
  const handleCloseConfirmation = () => {
    setIsRegisteredAuction(false);
    setIsOpenConfirmation(false);
  };

  useEffect(() => {
    setDataLoaded(false);
    const fetchData = async () => {
      try {
        const data = await findAuctionById(auctionId, sampleData.data);
        setDetailData(data);
        setDataLoaded(true);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching data:", error);
        setDataLoaded(true); // Set dataLoaded to true to avoid indefinite loading
      }
    };

    fetchData();
  }, [auctionId, sampleData.data]);

  // data loading
  if (!dataLoaded) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div key={auctionId}>
      <PageTitle pageTitle={detailData.productName} />
      <div className="auction-info">
        <div className="image-area">
          <img className="product-img" src={detailData.urlImg} alt="" />
        </div>
        <div className="info-area">
          {detailData.status === "Chưa diễn ra" ? (
            <div className="time-area">
              <span>11 giờ</span>
              <span>:</span>
              <span>11 phút</span>
              <span>:</span>
              <span>11 giây</span>
            </div>
          ) : (
            ""
          )}
          <div className="detail-info">
            <table className="info-table">
              <tbody>
                <tr>
                  <th>
                    <CustomLabel label="Mã tài sản:" />
                  </th>
                  <td>{detailData.productId}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Thời gian mở đăng ký:" />
                  </th>
                  <td>{detailData.registerTimeOpen}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Thời gian kết thúc đăng ký:" />
                  </th>
                  <td>{detailData.registerTimeClose}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Giá khởi điểm:" />
                  </th>
                  <td>{formatCurrency(detailData.startPrice)}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Phí đăng ký:" />
                  </th>
                  <td>{formatCurrency(detailData.registrationFee)}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Bước giá:" />
                  </th>
                  <td>{formatCurrency(detailData.step)}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Tiền đặt cược:" />
                  </th>
                  <td>{formatCurrency(detailData.deposit)}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Tên chủ tài sản:" />
                  </th>
                  <td>{detailData.ownerName}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Thời gian bắt đầu đấu giá:" />
                  </th>
                  <td>{detailData.auctionStart}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Thời gian kết thúc đấu giá:" />
                  </th>
                  <td>{detailData.auctionEnd}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {props.isLoggedIn ? (
            detailData.status === "Chưa diễn ra" ? (
              isRegisteredAuction ? (
                <>
                  <CustomButton
                    name="Huỷ đăng ký tham gia đấu giá"
                    height="45px"
                    width="380px"
                    onClick={() => handleCancelRegister()}
                  />
                  <MessageBox
                    message="Bạn muốn hủy đăng ký đấu giá sản phẩm này?"
                    isOpenMessageBox={isOpenConfirmation}
                    closeMessageBox={handleCloseConfirmation}
                  />
                </>
              ) : (
                <>
                  <CustomButton
                    name="Đăng ký tham gia đấu giá"
                    height="45px"
                    width="380px"
                    onClick={() => handleRegisterAuction()}
                  />
                  <MessageBox
                    message="Đăng ký tham gia đấu giá thành công"
                    isOpenMessageBox={isMessageSuccess}
                    closeMessageBox={handleCloseMessageSuccess}
                  />
                </>
              )
            ) : detailData.status === "Đang diễn ra" ? (
              <span id="auction-alert">Phiên đấu giá đang được diễn ra</span>
            ) : (
              <span id="auction-alert">
                Người đấu giá thành công: Phạm Huy Hiệu
              </span>
            )
          ) : detailData.status === "Chưa diễn ra" ? (
            <CustomButton
              name="Đăng ký tham gia đấu giá"
              height="45px"
              width="380px"
              onClick={() => openLoginModal()}
            />
          ) : detailData.status === "Đang diễn ra" ? (
            <span id="auction-alert">Phiên đấu giá đang được diễn ra</span>
          ) : (
            <span id="auction-alert">
              Người đấu giá thành công: Phạm Huy Hiệu
            </span>
          )}

          <LoginModal
            isLoginModalOpen={isLoginModalOpen}
            closeModal={closeLoginModal}
            handleLoginSuccess={props.handleLoginSuccess}
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
              <tbody>
                <tr>
                  <th>
                    <CustomLabel label="Tên" />
                  </th>
                  <td>{detailData.productName}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Kích thước" />
                  </th>
                  <td>{detailData.size}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Chất liệu" />
                  </th>
                  <td>{detailData.material}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Năm sáng tác" />
                  </th>
                  <td>{detailData.yearOfComposed}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Họa sỹ" />
                  </th>
                  <td>{detailData.artist}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Nguồn gốc" />
                  </th>
                  <td>{detailData.origin}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Mô tả" />
                  </th>
                  <td>{detailData.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            id="tab2"
            style={{ display: activeTab === "tab2" ? "block" : "none" }}
          >
            <table className="info-table">
              <tbody>
                <tr>
                  <th>
                    <CustomLabel label="Tổ chức đấu giá tài sản" />
                  </th>
                  <td>Công ty đấu giá hợp danh HDDM</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Đấu giá viên" />
                  </th>
                  <td>{detailData.ownerName}</td>
                </tr>
                <tr>
                  <th>
                    <CustomLabel label="Địa chỉ" />
                  </th>
                  <td></td>
                </tr>
              </tbody>
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
    </div>
  );
};
