import "./AuctionCard.css";
import sampleImg from "../../Assets/thieu-nu-mua-thu.jpg";
import { CustomButton } from "../CustomButton/CustomButton";
export const AuctionCard = () => {
  return (
    <>
      <div className="auction-card-main">
        <div className="auction-time">
          <div id="grey-label">Thời gian đấu giá</div>
          <div id="black-label">10/10/2023 14:40:00</div>
        </div>
        <div className="auction-item">
          <img id="auction-image" src={sampleImg} alt="" />
          <div id="auction-item-name">Toyota alibaba đã qua sử dụng</div>
        </div>

        <div className="info">
          <div>
            <span id="grey-label">Trạng thái: </span>{" "}
            <span id="status-label">Chưa diễn ra</span>{" "}
          </div>
          <div>
            <span id="grey-label">Giá khởi điểm: </span>{" "}
            <span id="black-label">300.000.000 VND</span>{" "}
          </div>
        </div>

        <CustomButton
          name="Chi tiết"
          height="40px"
          width="100px"
          route="detail"
        />
      </div>
    </>
  );
};

export const HorizontalAuctionCard = () => {
  return (
    <>
      <div className="horizontal-card-main">
        <div id="item-image">
          <img src={sampleImg} alt="" />
        </div>
        <div id="item-info">
          <div id="auction-item-name">
            Đấu giá nghệ thuật - Tác phẩm Việt tại Italy
          </div>
          <div>
            <div style={{ marginBottom: "5px" }}>
              <span id="grey-label">Trạng thái: </span>{" "}
              <span id="status-label">Chưa diễn ra</span>{" "}
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span id="grey-label">Giá khởi điểm: </span>{" "}
              <span id="black-label">300.000.000 VND</span>{" "}
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span id="grey-label">Thời gian diễn ra: </span>{" "}
              <span id="black-label">03/11/2023 10:00:00</span>{" "}
            </div>
          </div>

          <CustomButton
            name="Chi tiết"
            height="40px"
            width="100px"
            route="detail"
          />
        </div>
      </div>
    </>
  );
};
