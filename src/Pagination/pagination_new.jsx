import Pagination from "react-bootstrap/Pagination";
import "./style.css";

function Pagination_News({ onChangePage_News, totalPage_News, currentPage_News }) {
  const arrPages = [];
  for (let i = 1; i <= totalPage_News; i++) {
    arrPages.push(i);
  }
  return (
    <Pagination className="pagination_center">
      <Pagination.First />
      <Pagination.Prev />
      {arrPages.map((el) => (
        <Pagination.Item
          onClick={() => onChangePage_News(el)}
          key={el}
          active={currentPage_News === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Pagination_News;
