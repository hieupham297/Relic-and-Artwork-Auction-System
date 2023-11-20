import Table from "../../Components/Table/Table"
import "./AdminStatistic.css"

export const AdminStatistic = () => {
    const tableHeaders = ['STT', 'Loại tài sản', 'Tên tài sản', 'Tác giả', 'Kích thước', 'Năm sản xuất', 'Thời gian đấu giá', 'Chi tiết'];
    const tableData = [
        [1, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [2, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [3, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [4, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [5, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [6, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [7, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [8, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [9, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
        [10, 'Đỗ Thị Ánh Dương', 'dtad@gmail.com', 'DTAD1005', '0977236000', 'Nữ', '10/05/2000'],
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