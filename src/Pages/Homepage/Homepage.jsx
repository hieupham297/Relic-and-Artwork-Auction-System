import "./Homepage.css";
import auction_image from "../../Assets/auction-image-homepage.png";

export const Homepage = () => {
  return (
    <>
      <div className="homepage-main">
        <div className="left-side">
          <h1>
            {" "}
            <span id="system-name">Car Auction</span> Nền tảng đấu giá ô tô trực tuyến.
          </h1>
          <p>
            Đăng ký tham gia đấu giá chỉ với thao tác đơn giản, dễ dàng đấu giá,
            thanh toán nhanh chóng, minh bạch. Là nền tảng đấu giá đáng tin cậy
            cho người Việt.
          </p>
        </div>
        <div className="right-side">
          <img src={auction_image} alt="" />
        </div>
      </div>
    </>
  );
};
