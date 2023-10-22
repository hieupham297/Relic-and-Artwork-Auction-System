import logo from "../../Assets/logo-car-auction.png";
import "./Logo.css";
export const Logo = () => {
  return (
    <>
      <div className="logo-wrapper">
        <img id="logo" src={logo} alt="" />
      </div>
    </>
  );
};
