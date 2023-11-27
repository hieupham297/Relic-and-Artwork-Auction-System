import { PageTitle } from "../../Components/PageTitle/PageTitle";
import "./Profile.css";
import { useState, useEffect } from "react";
import { HorizontalAuctionCard } from "../../Components/AuctionCard/AuctionCard";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { Pagination } from "../../Components/Pagnition/Pagnition";
import { useParams } from "react-router-dom";
import {
  findAuctionByBidder,
  findAuctionByOwner,
  findUserById,
} from "../../Utils/function";

export const Profile = (props) => {
  const { userId } = useParams();
  // import data
  const sampleUserData = require("../../Data/userData.json");
  const sampleData = require("../../Data/data.json");

  const [activeTab, setActiveTab] = useState("tab1");
  // type of data
  const [userData, setUserData] = useState("");
  const [auctionForSale, setAuctionForSale] = useState("");
  const [registeredAuction, setRegisteredAuction] = useState("");

  // pagnition tab1 & tab2
  const [currentPageDataTab1, setCurrentpageDataTab1] = useState("");
  const [currentPageDataTab1Loaded, setCurrentpageDataTab1Loaded] =
    useState(false);
  const [currentPageDataTab2, setCurrentpageDataTab2] = useState("");
  const [currentPageDataTab2Loaded, setCurrentpageDataTab2Loaded] =
    useState(false);
  // data load whole page
  const [dataLoaded, setDataLoaded] = useState(false);

  const handlePageChangeTab2 = (page, newData) => {
    setCurrentpageDataTab2Loaded(false);
    setTimeout(() => {
      setCurrentpageDataTab2(newData);
      setCurrentpageDataTab2Loaded(true);
    }, 1000);
  };

  const handlePageChangeTab1 = (page, newData) => {
    setCurrentpageDataTab1Loaded(false);
    setTimeout(() => {
      setCurrentpageDataTab1(newData);
      setCurrentpageDataTab1Loaded(true);
    }, 1000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoaded(false);

        // Fetch user information
        const infoData = await findUserById(userId, sampleUserData.data);
        setUserData(infoData);

        // Fetch registered auction
        const tab1Data = await findAuctionByBidder(userId, sampleData.data);
        setRegisteredAuction(tab1Data);

        // Fetch auctions by owner
        const tab2Data = await findAuctionByOwner(userId, sampleData.data);
        setAuctionForSale(tab2Data);

        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataLoaded(true);
      }
    };

    fetchData();
  }, [userId, sampleUserData.data, sampleData.data]);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = 3;
    const initialData = registeredAuction.slice(startIndex, endIndex);
    handlePageChangeTab1(1, initialData);
  }, [registeredAuction]);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = 3;
    const initialData = auctionForSale.slice(startIndex, endIndex);
    handlePageChangeTab2(1, initialData);
  }, [auctionForSale]);

  if (!dataLoaded) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("isAdmin");

    window.location.href = "/homepage";
  };

  return props.isLoggedIn ? (
    <div key={userId}>
      <PageTitle pageTitle="Thông tin cá nhân" />
      <div className="profile-content">
        <div className="user-info">
          <img
            id="avatar"
            src={`${process.env.PUBLIC_URL}${userData.urlAvatar}`}
            alt=""
          />
          <span id="userName">
            <h2>{userData.fullName}</h2>
          </span>
          <table>
            <tbody>
              <tr>
                <th>Mã người dùng</th>
                <td>{userData.userId}</td>
              </tr>
              <tr>
                <th>Ngày sinh</th>
                <td>{userData.dob}</td>
              </tr>
              <tr>
                <th>Giới tính</th>
                <td>{userData.gender}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <th>Số điện thoại</th>
                <td>{userData.phoneNumber}</td>
              </tr>
              <tr>
                <th>Địa chỉ</th>
                <td>{userData.address}</td>
              </tr>
            </tbody>
          </table>
          <CustomButton
            name="Đăng xuất"
            height="40px"
            width="100px"
            onClick={() => handleLogout()}
          />
        </div>
        <div className="history-list">
          <div className="history-list-header">
            <h2>Thống kê các cuộc đấu giá</h2>
            <select
              name=""
              id=""
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="tab1">Đã đăng ký</option>
              <option value="tab2">Đã đăng bán</option>
            </select>
          </div>
          <div className="auction-list">
            <div
              id="tab1"
              style={{ display: activeTab === "tab1" ? "block" : "none" }}
            >
              {currentPageDataTab1Loaded ? (
                currentPageDataTab1.length > 0 ? (
                  currentPageDataTab1.map((auction, index) => (
                    <HorizontalAuctionCard
                      key={index}
                      productName={auction.productName}
                      status={auction.status}
                      startPrice={auction.startPrice}
                      auctionStart={auction.auctionStart}
                      urlImg={auction.urlImg}
                      auctionId={auction.auctionId}
                    />
                  ))
                ) : (
                  <span>Không có dữ liệu</span>
                )
              ) : (
                <div className="loading-spinner-container">
                  <div className="loading-spinner"></div>
                  <p>Loading...</p>
                </div>
              )}

              <Pagination
                dataLength={registeredAuction.length}
                itemPerPage="3"
                onPageChange={(page, newData) =>
                  handlePageChangeTab1(page, newData)
                }
              />
            </div>
            <div
              id="tab2"
              style={{ display: activeTab === "tab2" ? "block" : "none" }}
            >
              {currentPageDataTab2Loaded ? (
                currentPageDataTab2.length > 0 ? (
                  currentPageDataTab2.map((auction, index) => (
                    <HorizontalAuctionCard
                      key={index}
                      productName={auction.productName}
                      status={auction.status}
                      startPrice={auction.startPrice}
                      auctionStart={auction.auctionStart}
                      urlImg={auction.urlImg}
                    />
                  ))
                ) : (
                  <span>Không có dữ liệu</span>
                )
              ) : (
                <div className="loading-spinner-container">
                  <div className="loading-spinner"></div>
                  <p>Loading...</p>
                </div>
              )}

              <Pagination
                dataLength={auctionForSale.length}
                itemPerPage="3"
                onPageChange={(page, newData) =>
                  handlePageChangeTab2(page, newData)
                }
              />
            </div>
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  ) : (
    <PageTitle pageTitle="PAGE NOT FOUND" />
  );
};
