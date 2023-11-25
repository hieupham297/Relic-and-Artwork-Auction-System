import { CustomButton } from "../CustomButton/CustomButton";
import { Logo } from "../Logo/Logo";
import "./MessageBox.css";

export const MessageBox = (props) => {
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
            {props.message}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <CustomButton
              name="OK"
              width="80px"
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
