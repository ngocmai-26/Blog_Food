import Pagination from "react-bootstrap/Pagination";
import "./style.css";

function Pagination_FS({
  food_souths,
  onChangePage_FS,
  totalPage_FS,
  currentPage_FS,
}) {
  const arrPages = [];
  for (let i = 1; i <= totalPage_FS; i++) {
    arrPages.push(i);
  }
  return (
    <Pagination className="pagination_center">
      <Pagination.First />
      <Pagination.Prev />
      {arrPages.map((el) => (
        <Pagination.Item
          onClick={() => onChangePage_FS(el)}
          key={el}
          active={currentPage_FS === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Pagination_FS;
