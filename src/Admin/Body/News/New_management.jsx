import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Pagination_FN from "../../../Pagination/pagination_fn";
import "../style.css";

function New_Manger({
  food_news,
  onDeleteItemNew,
  onClickItem,
  setSearch,
  onClickSearch,
}) {
  return (
    <>
      <div className="MuiBoxItemBody">
        <div className="MuiBoxItem_Left MuiBoxStudent">
          <div className="MuiBox_Button">
            <div className="row">
              <div className="col-9">
                <Link to="/formNews" href="create.html" className="btnCreate">
                  Thêm
                </Link>
              </div>

              <div className="search col-3 justify-content-end">
                <input
                  type="text"
                  id="txtSearch"
                  className="search_input"
                  placeholder="Tìm tên hoặc MSSV"
                  onChange={(e) => setSearch((prev) => (prev = e.target.value))}
                />
                <button
                  type="button"
                  className="btn btnSearch btn-primary"
                  id="search"
                  onClick={() => onClickSearch()}
                >
                  <i className="fa fa-search icon-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="MuiBox">
            <div className="col-12">
              <table className="table" id="table2excel">
                <thead>
                  <tr className="table-title">
                    <th>STT</th>
                    <th>Tin tức</th>
                    <th>Giới thiệu</th>
                    <th>Hình Ảnh</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="tbodySinhVien">
                  {food_news.map((item, key) => (
                    <tr className="demo-list" id="demo_list" key={key}>
                      <td className="demo-item">{item.id}</td>
                      <td className="demo-item">{item.name}</td>
                      <td className="demo-item">{item.content}</td>
                      <td className="demo-item">
                        <img src={item.image} alt="" className="demo-img" />
                      </td>
                      <td className="demo-btn" width="150px">
                        <Link
                          to="/chitiettintuc"
                          onClick={() => onClickItem(item)}
                        >
                          <button className="btnMore btnAdmin">Xem thêm</button>
                        </Link>
                        <button
                          className="btnDelete btnAdmin"
                          onClick={() => onDeleteItemNew(item.id)}
                        >
                          Xóa
                        </button>
                        <Link to="/editnews" onClick={() => onClickItem(item)}>
                          <button className="btnRevision btnAdmin">Sửa</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="MuiBoxItem_Right"></div>
      </div>
    </>
  );
}

export default New_Manger;
