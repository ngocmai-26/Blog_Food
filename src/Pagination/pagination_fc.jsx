import Pagination from "react-bootstrap/Pagination";
import "./style.css";

function Pagination_FC({ onChangePage_FC, totalPage_FC, currentPage_FC }) {
  const arrPages = [];
  for (let i = 1; i <= totalPage_FC; i++) {
    arrPages.push(i);
  }
  return (
    <Pagination className="pagination_center">
      <Pagination.First />
      <Pagination.Prev />
      {arrPages.map((el) => (
        <Pagination.Item
          onClick={() => onChangePage_FC(el)}
          key={el}
          active={currentPage_FC === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Pagination_FC;
