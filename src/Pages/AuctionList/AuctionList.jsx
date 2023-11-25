/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { AuctionCard } from "../../Components/AuctionCard/AuctionCard";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { PageTitle } from "../../Components/PageTitle/PageTitle";
import { Pagination } from "../../Components/Pagnition/Pagnition";
import "./AuctionList.css";
import { searchFunction, filterByStatus } from "../../Utils/function";

const ITEM_PER_PAGE = 6;
export const AuctionList = () => {
  const sampleData = require("../../Data/data.json");
  const [currentPageData, setCurrentpageData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchData] = useState([]);
  const [statusFilters, setStatusFilters] = useState({
    all: true,
    upcoming: false,
    ongoing: false,
    completed: false,
  });

  const handlePageChange = (page, newData) => {
    setDataLoaded(false);
    setTimeout(() => {
      setCurrentpageData(newData);
      setDataLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    const filterDataByStatus = filterByStatus(statusFilters, sampleData.data);
    const search = searchFunction(searchTerm, filterDataByStatus);

    setSearchData(search);
  }, [searchTerm, statusFilters]);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = ITEM_PER_PAGE;
    const initialData = searchedData.slice(startIndex, endIndex);
    handlePageChange(1, initialData);
  }, [searchedData]);

  // console.log(currentPageData);
  return (
    <>
      <PageTitle pageTitle="Danh sách đấu giá" />
      <div className="auction-list-main">
        <div className="filter-section">
          <div className="search-area">
            <h2>Tìm kiếm</h2>
            <input
              type="text"
              placeholder="Nhập từ khóa ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="date-option">
              <div>
                <label htmlFor="">Từ ngày</label>
                <input type="date" />
              </div>
              <div>
                <label htmlFor="">Đến ngày</label>
                <input type="date" />
              </div>
            </div>
            <CustomButton name="Lọc" height="35px" width="20%" />
          </div>
          <div className="filter-area">
            <h2>Trạng thái tài sản</h2>
            <div className="option">
              <div>
                <input
                  type="checkbox"
                  checked={statusFilters.all}
                  onChange={() =>
                    setStatusFilters({
                      all: true,
                      upcoming: false,
                      ongoing: false,
                      completed: false,
                    })
                  }
                />{" "}
                Tất cả
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={statusFilters.upcoming}
                  onChange={() =>
                    setStatusFilters({
                      all: false,
                      upcoming: !statusFilters.upcoming,
                      ongoing: false,
                      completed: false,
                    })
                  }
                />{" "}
                Sắp diễn ra
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={statusFilters.ongoing}
                  onChange={() =>
                    setStatusFilters({
                      all: false,
                      upcoming: false,
                      ongoing: !statusFilters.ongoing,
                      completed: false,
                    })
                  }
                />{" "}
                Đang diễn ra
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={statusFilters.completed}
                  onChange={() =>
                    setStatusFilters({
                      all: false,
                      upcoming: false,
                      ongoing: false,
                      completed: !statusFilters.completed,
                    })
                  }
                />{" "}
                Đã diễn ra
              </div>
            </div>
          </div>
        </div>
        <div className="items-section-wrapper">
          {dataLoaded ? (
            currentPageData.length > 0 ? (
              <div className="items-section">
                {currentPageData.map((product, index) => (
                  <AuctionCard
                    key={index}
                    auctionStart={product.auctionStart}
                    urlImg={product.urlImg}
                    productName={product.productName}
                    status={product.status}
                    startPrice={product.startPrice}
                    auctionId={product.auctionId}
                  />
                ))}
              </div>
            ) : (
              <p style={{ textAlign: "center" }}>Không có dữ liệu</p>
            )
          ) : (
            <div className="loading-spinner-container">
              <div className="loading-spinner"></div>
              <p>Loading...</p>
            </div>
          )}
          <Pagination
            dataLength={searchedData.length}
            itemPerPage={ITEM_PER_PAGE}
            onPageChange={(page, newData) => handlePageChange(page, newData)}
          />
        </div>
      </div>
    </>
  );
};
