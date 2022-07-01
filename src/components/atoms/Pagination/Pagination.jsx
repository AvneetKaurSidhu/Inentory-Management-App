import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <div
            onClick={() => setCurrentPage(number)}
            className="page-link"
            style={{
              color: currentPage === number ? "white" : "#757372",
              backgroundColor: currentPage === number ? "#757372" : "white",
            }}
          >
            {number}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;