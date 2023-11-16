import { useState } from "react";
import "./Pagnition.css";

export const Pagination = ({ itemPerPage, dataLength, onPageChange }) => {
  const data = require("../../Data/data.json");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataLength / itemPerPage);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const handlePageChange = (page) => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const newData = data.data.slice(startIndex, endIndex);
    onPageChange(page, newData);
    setCurrentPage(page);
  };
  return (
    <div className="pagination">
      {prevPage !== null ? (
        <button
          className="page-link"
          onClick={() => handlePageChange(prevPage)}
        >
          Trước
        </button>
      ) : (
        <button className="disabled-button" disabled>
          Trước
        </button>
      )}

      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          className={`page-link ${
            currentPage === page + 1 ? "active-page" : ""
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}

      {nextPage !== null ? (
        <button
          className="page-link"
          onClick={() => handlePageChange(nextPage)}
        >
          Sau
        </button>
      ) : (
        <button className="disabled-button" disabled>
          Sau
        </button>
      )}
    </div>
  );
};
