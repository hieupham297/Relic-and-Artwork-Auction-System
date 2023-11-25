import "./AuctionInSession.css";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findAuctionById } from "../../Utils/function";
export const AuctionInSession = () => {
  const sampleData = require("../../Data/data.json");
  const { auctionId } = useParams();
  const [auctionData, setAuctionData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataLoaded(false);
    const fetchData = async () => {
      try {
        const data = await findAuctionById(auctionId, sampleData.data);
        setAuctionData(data);
        setDataLoaded(true);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching data:", error);
        setDataLoaded(true); // Set dataLoaded to true to avoid indefinite loading
      }
    };

    fetchData();
  }, [auctionId, sampleData.data]);

  return (
    <>
      <div className="auction-in-session-main">
        <div className="left-content">
          <img src={auctionData.urlImg} alt="" />
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
              <tbody>
                <tr>
                  <td>11 phút</td>
                  <td>:</td>
                  <td>11 giây</td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>{auctionData.productName}</span>
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
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div className="bid">
            <table>
              <tbody>
                <tr>
                  <td>Giá hiện tại</td>
                  <td style={{ textAlign: "right" }}>3.500.000.000VND</td>
                </tr>
              </tbody>
            </table>
            <table id="price-calc">
              <tbody>
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
              </tbody>
            </table>
            <CustomButton name="Trả giá 3.550.000.000" height="40px" />
          </div>
        </div>
      </div>
    </>
  );
};
