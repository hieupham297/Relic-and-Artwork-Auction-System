import React from "react";
import { CustomInput } from "../../Components/CustomInput/CustomInput";
import { CustomLabel } from "../../Components/CustomLabel/CustomLabel";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { PageTitle } from "../../Components/PageTitle/PageTitle";
import "./Register.css";

const EDIT_SQUARE = "edit_square";
const LOCK = "lock";
const EMAIL = "mail";
const PHONE = "call";
const CALENDAR = "calendar_month";
const HOME = "home_pin";
const BADGE = "badge";

export const Register = () => {
  const handleRegister = () => {
    window.alert("Bạn đã đăng ký thành công!");
    window.location.href = "/homepage";
  };

  return (
    <>
      <PageTitle pageTitle="Đăng ký tài khoản" />
      <div className="register-main">
        {/* <Logo /> */}
        <table id="table1">
          <tr>
            <td>
              <div>
                <CustomLabel label="Họ và tên" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Ví dụ: Phạm Văn H"
                  onChange={(value) => {}}
                />
              </div>
            </td>
            <td>
              <div>
                <CustomLabel label="Tên đăng nhập" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Nhập tên đăng nhập ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <CustomLabel label="Mật khẩu" />
                <CustomInput
                  iconName={LOCK}
                  inputType="password"
                  placeholder="Nhập mật khẩu ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
            <td>
              <div>
                <CustomLabel label="Nhập lại mật khẩu" />
                <CustomInput
                  iconName={LOCK}
                  inputType="password"
                  placeholder="Nhập lại mật khẩu ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <CustomLabel label="Email" />
                <CustomInput
                  iconName={EMAIL}
                  inputType="email"
                  placeholder="Nhập địa chỉ email ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
            <td>
              <div>
                <CustomLabel label="Số điện thoại" />
                <CustomInput
                  iconName={PHONE}
                  inputType="text"
                  placeholder="Nhập số điện thoại ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="gender-field">
                <CustomLabel label="Giới tính:" />
                <div id="options">
                  <input type="radio" id="gender" name="gender" value="Nam" />
                  <label for="gender">Nam</label>
                  <br />
                  <input type="radio" id="gender" name="gender" value="Nữ" />
                  <label for="gender">Nữ</label>
                  <br />
                  <input type="radio" id="gender" name="gender" value="Khác" />
                  <label for="gender">Khác</label>
                  <br />
                </div>
              </div>
            </td>
            <td>
              <div>
                <CustomLabel label="Ngày / Tháng / Năm sinh" />
                <CustomInput
                  iconName={CALENDAR}
                  inputType="date"
                  placeholder="yyyy/mm/dd"
                  onChange={(value) => {}}
                />
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <div>
                <CustomLabel label="Địa chỉ cụ thể" />
                <CustomInput
                  iconName={HOME}
                  inputType="text"
                  placeholder="Nhập địa chỉ cụ thể ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <div>
                <CustomLabel label="CMND/CCCD" />
                <CustomInput
                  iconName={BADGE}
                  inputType="text"
                  placeholder="Nhập CMND/CCCD ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
            <td>
              <div>
                <CustomLabel label="Ngày cấp" />
                <CustomInput
                  iconName={CALENDAR}
                  inputType="date"
                  placeholder=""
                  onChange={(value) => {}}
                />
              </div>
            </td>
            <td>
              <div>
                <CustomLabel label="Nơi cấp" />
                <CustomInput
                  iconName={HOME}
                  inputType="text"
                  placeholder="Nơi cấp ..."
                  onChange={(value) => {}}
                />
              </div>
            </td>
          </tr>
        </table>
        <div className="confirmation">
          <input type="checkbox" />
          <span>
            Tôi cam kết tuân thủ Quyền và trách nhiệm của Người tham gia đấu giá
            (Quy định theo tài sản đấu giá) , Chính sách bảo mật thông tin khách
            hàng , Cơ chế giải quyết tranh chấp , Quy chế hoạt động tại website
            đấu giá trực tuyến Relic & Artwork Auction.
          </span>
        </div>
        <CustomButton
          name="Đăng ký tài khoản"
          width="600px"
          height="50px"
          onClick={() => handleRegister()}
        />
      </div>
    </>
  );
};
