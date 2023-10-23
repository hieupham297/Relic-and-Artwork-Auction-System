import { AuctionCard } from "../../Components/AuctionCard/AuctionCard";
import "./AuctionList.css";

export const AuctionList = () => {
  return (
    <>
      <div className="page-title">
        <h1>Danh sách đấu giá</h1>
      </div>
      <div className="auction-list-main">
        <div className="filter-section">
          <h1>FILTER AREA</h1>
        </div>
        <div className="items-section">
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
        </div>
      </div>
    </>
  );
};
