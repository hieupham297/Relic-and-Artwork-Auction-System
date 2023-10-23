import "./Homepage.css";
import auction_image from "../../Assets/auction-image-homepage.png";
import { CustomButton } from "../../Components/CustomButton/CustomButton";

export const Homepage = () => {
  return (
    <>
      <div className="homepage-main">
        <div className="left-side">
          <h1>
            {" "}
            <span id="system-name">Car Auction</span> Nền tảng đấu giá ô tô trực
            tuyến.
          </h1>
          <p id="description">
            Đăng ký tham gia đấu giá chỉ với thao tác đơn giản, dễ dàng đấu giá,
            thanh toán nhanh chóng, minh bạch. Là nền tảng đấu giá đáng tin cậy
            cho người Việt.
          </p>
          <CustomButton name="Đăng ký ngay" width="200px" height="45px"/>
        </div>
        <div className="right-side">
          <img id="auction-img" src={auction_image} alt="" />
        </div>
      </div>
    </>
  );
};
