import Table from '../../Components/Table/Table';
import './AdminUserManage.css'
import '../../Data/userData.json'
import '../../Components/Search/Search'

export const AdminUserManage = () => {
  // const tableHeaders = ['STT', 'Họ tên', 'Email', 'ID người dùng', 'Số điện thoại', 'Giới tính', 'Ngày sinh', 'Sửa/Xóa'];
  const tableData = require('../../Data/userData.json')
  const columnConfig = [
    { displayName: 'Họ và tên', fieldName: 'fullName' },
    { displayName: 'Email', fieldName: 'email' },
    { displayName: 'ID người dùng', fieldName: 'userId' },
    { displayName: 'SĐT', fieldName: 'phoneNumber' },
    { displayName: 'Giới tính', fieldName: 'gender' },
    { displayName: 'Ngày sinh', fieldName: 'dob' },
];

  const renderEditDeleteButtons = (rowData) => {
    return (
      <>
        {/* <button onClick={() => handleEdit(rowData)}>Sửa</button> */}
        <span className="icon material-symbols-outlined" style={{color: "#624DE3"}} onClick={() => handleEdit(rowData)}>edit_square</span>
        <span className="material-symbols-outlined" style={{color: "#A30D11"}} onClick={() => handleDelete(rowData)}>delete</span>
      </>
    );
  };

  const handleEdit = (rowData) => {
    // Xử lý khi nút "Sửa" được nhấp vào
    console.log('Edit', rowData);
  };

  const handleDelete = (rowData) => {
    // Xử lý khi nút "Xóa" được nhấp vào
    console.log('Delete', rowData);
  };

  return (
    <div>
      <Table data={tableData.data} columnConfig={columnConfig} renderEditDeleteButtons={renderEditDeleteButtons} />
    </div>
  );
  // return (
  //     <div>

  //         <Table headers={tableHeaders} data={tableData} />
  //     </div>
  // );
};

