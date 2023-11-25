import { useState } from "react";
import { Pagination } from "../../Components/Pagnition/Pagnition";
import { Search } from "../../Components/Search/Search";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import "./AdminApproveAuction.css";

export const AdminApproveAuction = () => {
  const sampleData = require("../../Data/unapprovedAuction.json");

  const [currentPageData, setCurrentpageData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  const handlePageChange = (page, newData) => {
    setDataLoaded(false);
    setTimeout(() => {
      setCurrentpageData(newData);
      setDataLoaded(true);
    }, 1000);
  };
  return (
    <div className="approve-auction-main">
      <Sidebar />
      <div className="page-content">
        <Search />
        <table id="approve-auction-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Loại tài sản</th>
              <th>Tên tài sản</th>
              <th>Tác giả</th>
              <th>Kích thước</th>
              <th>Năm sản xuất</th>
              <th>Thời gian đấu giá</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.data.map((auction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Tranh nghệ thuật</td>
                <td>{auction.productName}</td>
                <td>{auction.artist}</td>
                <td>{auction.size}</td>
                <td>{auction.yearOfComposed}</td>
                <td>{auction.auctionStart}</td>
                <td>
                  <button id="detail-btn">Chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {sampleData.data.length < 10 ? (
          <></>
        ) : (
          <Pagination
            dataLength={sampleData.data.length}
            itemPerPage="10"
            onPageChange={(page, newData) => handlePageChange(page, newData)}
          />
        )}
      </div>
    </div>
  );
};
