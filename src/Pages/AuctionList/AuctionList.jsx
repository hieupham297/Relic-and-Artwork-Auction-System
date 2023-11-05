import { AuctionCard } from "../../Components/AuctionCard/AuctionCard";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { PageTitle } from "../../Components/PageTitle/PageTitle";
import { Pagination } from "../../Components/Pagnition/Pagnition";
import "./AuctionList.css";

export const AuctionList = () => {
  return (
    <>
      <PageTitle pageTitle="Danh sách đấu giá" />
      <div className="auction-list-main">
        <div className="filter-section">
          <div className="search-area">
            <h2>Tìm kiếm</h2>
            <input type="text" placeholder="Nhập từ khóa ..." />
            <div className="date-option">
              <span>
                <label htmlFor="">Ngày</label>
                <select name="" id="">
                  <option value="">Chọn</option>
                </select>
              </span>
              <span>
                <label htmlFor="">Tháng</label>
                <select name="" id="">
                  <option value="">Chọn</option>
                </select>
              </span>
              <span>
                <label htmlFor="">Năm</label>
                <select name="" id="">
                  <option value="">Chọn</option>
                </select>
              </span>
            </div>
            <CustomButton name="Lọc" height="30px" width="20%" />
          </div>
          <div className="filter-area">
            <h2>Trạng thái tài sản</h2>
            <div className="option">
              <div>
                <input type="checkbox" /> Tất cả
              </div>
              <div>
                <input type="checkbox" /> Sắp diễn ra
              </div>
              <div>
                <input type="checkbox" /> Đang diễn ra
              </div>
              <div>
                <input type="checkbox" /> Đã diễn ra
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="items-section">
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};
