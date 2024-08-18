import css from "./Pagination.module.css"; // Ваш CSS модуль для пагінації

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={css.pagination}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? css.active : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
