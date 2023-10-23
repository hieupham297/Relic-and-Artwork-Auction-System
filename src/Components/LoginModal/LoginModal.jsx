/* eslint-disable jsx-a11y/anchor-is-valid */
import { CustomButton } from "../CustomButton/CustomButton";
import { CustomInput } from "../CustomInput/CustomInput";
import { CustomLabel } from "../CustomLabel/CustomLabel";
import { Logo } from "../Logo/Logo";
import "./LoginModal.css";

const EMAIL_ICON = "email";
const PASSWORD_ICON = "lock_open";

export const LoginModal = (props) => {
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
              <CustomLabel label="Tên đăng nhập / Email" />
              <CustomInput
                iconName={EMAIL_ICON}
                inputType="email"
                placeholder="Nhập email ..."
              />
            </div>
            <div>
              <CustomLabel label="Password" />
              <CustomInput
                iconName={PASSWORD_ICON}
                inputType="password"
                placeholder="Nhập mật khẩu ..."
              />
            </div>
          </div>
          <div className="remember-account">
            <input type="checkbox" />
            <span>Ghi nhớ tài khoản</span>
          </div>
          <CustomButton name="Đăng nhập" width="200px" height="40px" />
          <div className="login-footer">
            <div className="forget-password">
              <span>
                <a href="">Quên mật khẩu?</a>
              </span>
            </div>
            <div className="register-question">
              Bạn chưa có tài khoản?{" "}
              <span>
                <a href="">Đăng ký ngay</a>
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
