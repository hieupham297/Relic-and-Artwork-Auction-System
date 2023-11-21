/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { CustomInput } from "../CustomInput/CustomInput";
import { CustomLabel } from "../CustomLabel/CustomLabel";
import { Logo } from "../Logo/Logo";
import "./LoginModal.css";
import { handleLogin } from "../../Utils/function";

const EMAIL_ICON = "email";
const PASSWORD_ICON = "lock_open";

export const LoginModal = (props) => {
  const sampleUserData = require("../../Data/userData.json");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (value, field) => {
    if (field === "userName") {
      setUserName(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    const res = handleLogin(userName, password, sampleUserData.data);

    if (res.error) {
      setError(res.error);
    } else {
      props.handleLoginSuccess(res.user);
      props.closeModal();
    }
  };

  return props.isLoginModalOpen ? (
    <>
      <div className="login-background">
        <div className="login-content">
          <span
            className="exit-icon material-symbols-outlined"
            onClick={() => props.closeModal()}
          >
            close
          </span>
          <Logo />

          <div className="login-form">
            <div>
              <CustomLabel label="Tên đăng nhập" />
              <CustomInput
                iconName={EMAIL_ICON}
                inputType="email"
                placeholder="Nhập tên đăng nhập ..."
                onChange={(value) => handleInputChange(value, "userName")}
                value={userName}
              />
            </div>
            <div>
              <CustomLabel label="Password" />
              <CustomInput
                iconName={PASSWORD_ICON}
                inputType="password"
                placeholder="Nhập mật khẩu ..."
                onChange={(value) => handleInputChange(value, "password")}
                value={password}
              />
            </div>
          </div>
          <div className="remember-account">
            <input type="checkbox" />
            <span>Ghi nhớ tài khoản</span>
          </div>
          <CustomButton
            name="Đăng nhập"
            width="200px"
            height="40px"
            onClick={handleSubmit}
          />
          <div className="login-footer">
            <div className="forget-password">
              <span>
                <a href="">Quên mật khẩu?</a>
              </span>
            </div>
            <div className="register-question">
              Bạn chưa có tài khoản?{" "}
              <span>
                <a href="/register">Đăng ký ngay</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
