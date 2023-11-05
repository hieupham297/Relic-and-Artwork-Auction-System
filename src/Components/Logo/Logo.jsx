import logo from "../../Assets/logo-auction.png";
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
