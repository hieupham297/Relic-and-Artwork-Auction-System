import { useState } from "react";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { CustomInput } from "../../Components/CustomInput/CustomInput";
import { CustomLabel } from "../../Components/CustomLabel/CustomLabel";
import "./ProductRegister.css";

export const ProductRegister = () => {
  const EDIT_SQUARE = "edit_square";
  const CALENDAR = "calendar_month";

  const [activeTab, setActiveTab] = useState("artwork");

  return (
    <div style={{ width: "70%", margin: "auto", paddingBottom: "50px" }}>
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "#3F5CA8", marginRight: "50px" }}>
            Đăng bán sản phẩm
          </h1>
          <select
            name=""
            id=""
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {" "}
            <option value="artwork">Tranh nghệ thuật</option>
            <option value="relic">Cổ vật</option>
          </select>
        </div>
        <CustomButton name="Lưu" height="35px" width="60px" />
      </div>
      <div className="product-register-main">
        <table
          id="artwork"
          style={{ display: activeTab === "artwork" ? "block" : "none" }}
        >
          <tbody style={{width: "100%"}}>
            <tr>
              <td>
                <CustomLabel label="Tên bức tranh" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Nhập tên bức tranh ..."
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Thời gian đấu giá" />
                <CustomInput
                  iconName={CALENDAR}
                  inputType="date"
                  placeholder="yyyy/mm/dd"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Tên tác giả" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Nhập mô tả ..."
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Giá khởi điểm" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Hình ảnh" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Giấy tờ liên quan" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Bước giá" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Mô tả" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Mô tả bức tranh, ý nghĩa, ..."
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Kích thước" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="(cm)"
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Loại tranh" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Sơn dầu, Sơn mài, ..."
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Năm ra đời" />
                <CustomInput
                  iconName={CALENDAR}
                  inputType="date"
                  placeholder="yyyy/mm/dd"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table
          id="relic"
          style={{ display: activeTab === "relic" ? "block" : "none" }}
        >
          <tbody>
            <tr>
              <td>
                <CustomLabel label="Tên cổ vật" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Nhập tên cổ vật ..."
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Thời gian đấu giá" />
                <CustomInput
                  iconName={CALENDAR}
                  inputType="date"
                  placeholder="yyyy/mm/dd"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Nguồn gốc" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Nhập mô tả ..."
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Giá khởi điểm" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Hình ảnh" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Giấy tờ liên quan" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Bước giá" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Đơn vị VND"
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Mô tả" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Mô tả bức tranh, ý nghĩa, ..."
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Kích thước" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="(cm)"
                  onChange={(value) => {}}
                />
              </td>
              <td>
                <CustomLabel label="Loại tranh" />
                <CustomInput
                  iconName={EDIT_SQUARE}
                  inputType="text"
                  placeholder="Sơn dầu, Sơn mài, ..."
                  onChange={(value) => {}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CustomLabel label="Năm ra đời" />
                <CustomInput
                  iconName={CALENDAR}
                  inputType="date"
                  placeholder="yyyy/mm/dd"
                  onChange={(value) => {}}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
