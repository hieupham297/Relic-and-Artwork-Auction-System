import "./AuctionInSession.css";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
export const AuctionInSession = () => {
  const sampleImg = `${process.env.PUBLIC_URL}/ProductImage/TNMT-2022.jpg}`;
  return (
    <>
      <div className="auction-in-session-main">
        <div className="left-content">
          <img src={sampleImg} alt="" />
          <div className="time-overlay">
            <div
              style={{
                color: "#8464EF",
                fontWeight: "bold",
                fontSize: "17px",
                marginBottom: "5px",
              }}
            >
              Thời gian còn lại
            </div>
            <table style={{ width: "100%" }}>
              <tr>
                <td>11 phút</td>
                <td>:</td>
                <td>11 giây</td>
              </tr>
            </table>
          </div>
          <span>Bức tranh: Thiếu nữ mùa thu</span>
        </div>
        <div className="right-content">
          <div className="bid-history">
            <span
              style={{
                color: "#038ACB",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Diễn biến cuộc đấu giá
            </span>
            <table>
              <tr>
                <td>
                  <span id="leaderboard-price">3.500.000.000VND</span> <br />
                  <span id="bid-history-time">15/09/2023 14:28:99</span>
                </td>
                <td
                  id="leaderboard-id"
                  style={{ textAlign: "right", verticalAlign: "top" }}
                >
                  DTAD1005
                </td>
              </tr>
              <tr>
                <td>
                  <span>3.500.000.000VND</span> <br />
                  <span id="bid-history-time">15/09/2023 14:28:99</span>
                </td>
                <td style={{ textAlign: "right", verticalAlign: "top" }}>
                  DTAD1005
                </td>
              </tr>
              <tr>
                <td>
                  <span>3.500.000.000VND</span> <br />
                  <span id="bid-history-time">15/09/2023 14:28:99</span>
                </td>
                <td style={{ textAlign: "right", verticalAlign: "top" }}>
                  DTAD1005
                </td>
              </tr>
            </table>
          </div>
          <div className="bid">
            <table>
              <tr>
                <td>Giá hiện tại</td>
                <td style={{ textAlign: "right" }}>3.500.000.000VND</td>
              </tr>
            </table>
            <table id="price-calc">
              <tr>
                <td>5.000.000</td>
                <td style={{ paddingRight: "15px" }}>x</td>
                <td
                  style={{
                    border: "2px solid #8464EF",
                    borderRadius: "5px",
                    width: "30px",
                    height: "25px",
                  }}
                >
                  10
                </td>
                <td style={{ paddingLeft: "15px" }}>=</td>
                <td>50.000.000</td>
              </tr>
            </table>
            <CustomButton name="Trả giá 3.550.000.000" height="40px" />
          </div>
        </div>
      </div>
    </>
  );
};
