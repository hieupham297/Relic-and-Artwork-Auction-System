import "./AdminUserManage.css";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Search } from "../../Components/Search/Search";
import { Pagination } from "../../Components/Pagnition/Pagnition";
import { useState } from "react";

export const AdminUserManage = () => {
  const sampleData = require("../../Data/user.json");
  const [currentPageData, setCurrentpageData] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  const handlePageChange = (page, newData) => {
    setDataLoaded(false);
    setTimeout(() => {
      setCurrentpageData(newData);
      setDataLoaded(true);
    }, 1000);
  };
  const handleEdit = (rowData) => {
    // Xử lý khi nút "Sửa" được nhấp vào
    console.log("Edit", rowData);
  };

  const handleDelete = (rowData) => {
    // Xử lý khi nút "Xóa" được nhấp vào
    console.log("Delete", rowData);
  };

  return (
    <div className="user-manage-main">
      <Sidebar />
      <div className="page-content">
        <Search />
        <table id="user-manage-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>ID người dùng</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Sửa/Xóa</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.userId}</td>
                <td>{user.gender}</td>
                <td>{user.dob}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <span
                    className="icon material-symbols-outlined"
                    style={{ color: "#624DE3", fontSize: "23px" }}
                  >
                    edit_square
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#A30D11", fontSize: "23px" }}
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {sampleData.data.length < 10 ? (
          <></>
        ) : (
          <Pagination
            dataLength={sampleData.data.length}
            itemPerPage="10"
            onPageChange={(page, newData) => handlePageChange(page, newData)}
          />
        )}
      </div>
    </div>
  );
};
