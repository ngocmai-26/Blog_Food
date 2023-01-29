import Pagination from "react-bootstrap/Pagination";
import "./style.css";

function Pagination_FN({ onChangePage_FN, totalPage_FN, currentPage_FN }) {
  const arrPages = [];
  for (let i = 1; i <= totalPage_FN; i++) {
    arrPages.push(i);
  }
  return (
    <Pagination className="pagination_center">
      <Pagination.First />
      <Pagination.Prev />
      {arrPages.map((el) => (
        <Pagination.Item
          onClick={() => onChangePage_FN(el)}
          key={el}
          active={currentPage_FN === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Pagination_FN;
