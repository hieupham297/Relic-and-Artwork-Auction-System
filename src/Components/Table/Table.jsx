import "./Table.css";
import "../../Components/Search/Search";
import { Search } from "../../Components/Search/Search";

// const Table = ({ headers, data }) => {
//     return (
//         <div>
//             <Search></Search>
//             <table>
//                 <thead>
//                     <tr>
//                         {headers.map((header, index) => (
//                             <th key={index}>{header}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row, rowIndex) => (
//                         <tr key={rowIndex}>
//                             {row.map((cell, cellIndex) => (
//                                 <td key={cellIndex}>{cell}</td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// Table.js

import React from "react";

export const Table = ({ data, columnConfig, renderEditDeleteButtons }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const headers = columnConfig.map((column) => column.displayName);

  return (
    <>
      <Search></Search>
      <table id="admin-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Sửa/Xóa</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnConfig.map((column, cellIndex) => (
                <td key={cellIndex}>{row[column.fieldName]}</td>
              ))}
              <td>{renderEditDeleteButtons(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
