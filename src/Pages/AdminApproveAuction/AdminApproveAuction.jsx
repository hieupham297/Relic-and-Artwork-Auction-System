import Table from "../../Components/Table/Table"
import "./AdminApproveAuction.css"

export const AdminApproveAuction = () => {
    const tableHeaders = ['STT', 'Loại tài sản', 'Tên tài sản', 'Tác giả', 'Kích thước', 'Năm sản xuất', 'Thời gian đấu giá', 'Chi tiết'];
    const tableData = [
        [1, 'Tranh nghệ thuật', 'Thiếu nữ mùa thu', 'NS Ánh Dưn lè', '20x30', '2002', '22/11/2023'],
        [2, 'Tranh nghệ thuật', 'Thiếu nữ mùa thu', 'NS Ánh Dưn lè', '20x30', '2002', '22/11/2023'],
        [3, 'Tranh nghệ thuật', 'Thiếu nữ mùa thu', 'NS Ánh Dưn lè', '20x30', '2002', '22/11/2023'],
        [4, 'Tranh nghệ thuật', 'Thiếu nữ mùa thu', 'NS Ánh Dưn lè', '20x30', '2002', '22/11/2023'],
        [5, 'Tranh nghệ thuật', 'Thiếu nữ mùa thu', 'NS Ánh Dưn lè', '20x30', '2002', '22/11/2023'],
        [6, 'Cổ vật', 'Bức tượng ngủ yên', '', '30x40', '1650', '31/11/2023'],
        [7, 'Cổ vật', 'Tượng ngủ yên', '', '30x40', '1650', '31/11/2023'],
        [8, 'Cổ vật', 'Tượng ngủ yên', '', '30x40', '1650', '31/11/2023'],
        [9, 'Cổ vật', 'Tượng ngủ yên', '', '30x40', '1650', '31/11/2023'],
        [10, 'Cổ vật', 'Tượng ngủ yên', '', '30x40', '1650', '31/11/2023'],
    ];
    const renderEditDeleteButtons = (rowData) => {
        return (
          <>
            <button onClick={() => handleEdit(rowData)}>Chi tiết</button>
          </>
        );
      };
    
      const handleEdit = (rowData) => {
        // Xử lý khi nút "Sửa" được nhấp vào
        console.log('Edit', rowData);
      };
    
      return (
        <div>
          <Table headers={tableHeaders} data={tableData} renderEditDeleteButtons={renderEditDeleteButtons} />
        </div>
      );
}