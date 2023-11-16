import "./AuctionCard.css";
import { CustomButton } from "../CustomButton/CustomButton";
export const AuctionCard = (props) => {
  const imageUrl = `${process.env.PUBLIC_URL}${props.urlImg}`;

  return (
    <>
      <div className="auction-card-main">
        <div className="auction-time">
          <div id="grey-label">Thời gian đấu giá</div>
          <div id="black-label">{props.auctionStart}</div>
        </div>
        <div className="auction-item">
          <img id="auction-image" src={imageUrl} alt="" />
          <div id="auction-item-name">{props.productName}</div>
        </div>

        <div className="info">
          <div>
            <span id="grey-label">Trạng thái: </span>{" "}
            <span id="status-label">{props.status}</span>{" "}
          </div>
          <div>
            <span id="grey-label">Giá khởi điểm: </span>{" "}
            <span id="black-label">{props.startPrice}</span>{" "}
          </div>
        </div>

        <CustomButton
          name="Chi tiết"
          height="40px"
          width="100px"
          route={`/auction-list/detail/${props.auctionId}`}
        />
      </div>
    </>
  );
};

export const HorizontalAuctionCard = (props) => {
  return (
    <>
      <div className="horizontal-card-main">
        <div id="item-image">
          <img src={props.urlImg} alt="" />
        </div>
        <div id="item-info">
          <div id="auction-item-name">{props.productName}</div>
          <div>
            <div style={{ marginBottom: "5px" }}>
              <span id="grey-label">Trạng thái: </span>{" "}
              <span id="status-label">{props.status}</span>{" "}
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span id="grey-label">Giá khởi điểm: </span>{" "}
              <span id="black-label">{props.startPrice}</span>{" "}
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span id="grey-label">Thời gian diễn ra: </span>{" "}
              <span id="black-label">{props.auctionStart}</span>{" "}
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
