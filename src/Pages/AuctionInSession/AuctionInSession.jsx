/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./AuctionInSession.css";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findAuctionById, formatCurrency } from "../../Utils/function";
import { MessageBox } from "../../Components/MessageBox/MessageBox";
import { Logo } from "../../Components/Logo/Logo";

export const AuctionInSession = () => {
  const sampleData = require("../../Data/data.json");
  const { auctionId } = useParams();
  const [auctionData, setAuctionData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [remainingTime, setRemainingTime] = useState(50);
  const [highestPrice, setHighestPrice] = useState(0);
  const [multiplierResult, setMultiplierResult] = useState();
  const [multiplierInput, setMultiplierInput] = useState(1);
  const [priceToPay, setPriceToPay] = useState(0);

  const [bidHistory, setBidHistory] = useState([]);
  const [showFakeBidHistory, setShowFakeBidHistory] = useState(false);
  const [currentBidIndex, setCurrentBidIndex] = useState(0);
  // confirmation
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  // auction end message
  const [isOpenMessageAuctionEnd, setIsOpenMessageAuctionEnd] = useState(false);
  const navigate = useNavigate();
  const fakeHistory = [
    { price: 80000000, time: "27/11/2023 17:30:00", id: "DTAD1005" },
    { price: 90000000, time: "27/11/2023 17:30:05", id: "PHH2907" },
    { price: 100000000, time: "27/11/2023 17:30:10", id: "HDM0023" },
  ];
  // fetch data
  useEffect(() => {
    setDataLoaded(false);
    const fetchData = async () => {
      try {
        const data = await findAuctionById(auctionId, sampleData.data);
        setAuctionData(data);
        setHighestPrice(data.startPrice);
        setDataLoaded(true);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching data:", error);
        setDataLoaded(true); // Set dataLoaded to true to avoid indefinite loading
      }
    };

    fetchData();
  }, [auctionId, sampleData.data]);

  // countdown
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(countdownInterval);
        setIsOpenMessageAuctionEnd(true);
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [remainingTime]);

  const handleMultiple = (event) => {
    const inputValue = event.target.value;
    setMultiplierInput(inputValue);

    const parsedInput = parseFloat(inputValue);
    const result = isNaN(parsedInput) ? "" : parsedInput * auctionData.step;
    setMultiplierResult(result);
  };

  // initial calculation when multiplierInput is 1
  useEffect(() => {
    const parsedInput = parseFloat(multiplierInput);
    const result = isNaN(parsedInput) ? "" : parsedInput * auctionData.step;
    const totalPrice = result + parseFloat(highestPrice);
    setMultiplierResult(result);
    setPriceToPay(totalPrice);
  }, [auctionData.step, highestPrice, multiplierInput]);

  // show bid history
  useEffect(() => {
    const simulateBidHistory = () => {
      console.log("Bid history changed:", bidHistory);
      console.log("Current bid index:", currentBidIndex);

      // Check if there are more bids to show
      if (currentBidIndex < fakeHistory.length) {
        setBidHistory((prevBidHistory) => [
          ...prevBidHistory,
          fakeHistory[currentBidIndex],
        ]);
        setHighestPrice(fakeHistory[currentBidIndex].price);

        setCurrentBidIndex((prevIndex) => prevIndex + 1);
        setShowFakeBidHistory(true);
      } else {
        // Stop the interval when all bids are shown
        setShowFakeBidHistory(true);
        clearInterval(intervalRef.current);
      }
    };

    const intervalRef = setInterval(() => {
      simulateBidHistory();
    }, 5000);

    return () => clearInterval(intervalRef);
  }, [currentBidIndex, bidHistory]);

  // handle confirmation
  const showConfirmation = () => {
    setIsOpenConfirmation(true);
  };
  const handleCloseConfirmation = () => {
    setIsOpenConfirmation(false);
  };
  // auction end
  const handleAuctionEnd = () => {
    setIsOpenMessageAuctionEnd(false);
    window.location.href = "/homepage";
  };
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
                  <td>{`${Math.floor(remainingTime / 60)} phút`}</td>
                  <td>:</td>
                  <td>{`${remainingTime % 60} giây`}</td>
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
            {showFakeBidHistory && (
              // Fake bid history table
              <table>
                <tbody>
                  {[...bidHistory].reverse().map((bid, index) => (
                    <tr key={index}>
                      <td>
                        <span style={{ color: index === 0 ? "#CC5DE0" : "" }}>
                          {formatCurrency(bid.price)}
                        </span>
                        <br />
                        <span id="bid-history-time">{bid.time}</span>
                      </td>
                      <td style={{ textAlign: "right", verticalAlign: "top" }}>
                        <span style={{ color: index === 0 ? "#FF895F" : "" }}>
                          {bid.id}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="bid">
            <table>
              <tbody>
                <tr>
                  <td>Giá hiện tại</td>
                  <td style={{ textAlign: "right" }}>
                    {formatCurrency(highestPrice)}
                  </td>
                </tr>
              </tbody>
            </table>
            <table id="price-calc">
              <tbody>
                <tr>
                  <td>{formatCurrency(auctionData.step)}</td>
                  <td style={{ paddingRight: "15px" }}>x</td>
                  <td>
                    <input
                      type="text"
                      id="input-multipler"
                      value={multiplierInput}
                      onChange={handleMultiple}
                    />
                  </td>
                  <td style={{ paddingLeft: "15px" }}>=</td>
                  <td>{formatCurrency(multiplierResult)}</td>
                </tr>
              </tbody>
            </table>
            <CustomButton
              name={`Trả giá ${formatCurrency(priceToPay)}`}
              height="40px"
              onClick={() => showConfirmation()}
            />
            <MessageBox
              message={`Bạn đồng ý trả giá cho sản phẩm này với số tiền ${formatCurrency(
                priceToPay
              )}?`}
              isOpenMessageBox={isOpenConfirmation}
              closeMessageBox={handleCloseConfirmation}
            />
          </div>
        </div>
      </div>
      <MessageBoxAuctionEnd
        isOpenMessageBox={isOpenMessageAuctionEnd}
        closeMessageBox={handleAuctionEnd}
      />
    </>
  );
};

export const MessageBoxAuctionEnd = (props) => {
  const handleClickOk = () => {
    props.closeMessageBox();
  };
  return props.isOpenMessageBox ? (
    <>
      <div className="message-box-background">
        <div className="message-box-content">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Logo />
          </div>
          <p style={{ color: "#3F5CA8", marginLeft: "50px" }}>
            Cuộc đấu giá đã kết thúc!
          </p>
          <p style={{ color: "#3F5CA8", marginLeft: "50px" }}>
            Đấu giá thành công!
          </p>
          <p style={{ color: "#3F5CA8", marginLeft: "50px" }}>
            Giá cuối cùng: <span style={{ color: "#CC5DE0" }}>200.000.000</span>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <CustomButton
              name="Trở về Trang chủ"
              width="150px"
              height="40px"
              onClick={() => handleClickOk()}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
