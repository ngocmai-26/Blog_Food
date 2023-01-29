import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination_FN from "../../../Pagination/pagination_fn";

function Food_MangerNorth({
  onClickItem,
  food_northerns,
  name,
  conscious,
  descriptionFoodN,
  descriptionFoodN1,
  descriptionFoodN2,
  descriptionFoodN3,
  descriptionFoodN4,
  descriptionFoodN5,
  setNameFood,
  setConscious,
  setDescriptionFoodN,
  setDescriptionFoodN1,
  setDescriptionFoodN2,
  setDescriptionFoodN3,
  setDescriptionFoodN4,
  setDescriptionFoodN5,
  setImageFoodN,
  setImageFoodN1,
  imageFoodN,
  imageFoodN1,
  onDeleteItemFoodN,
  setSearch,
  onClickSearch,
}) {
  useEffect(() => {
    if (
      name !== "" ||
      conscious !== "" ||
      descriptionFoodN !== "" ||
      descriptionFoodN1 !== "" ||
      descriptionFoodN2 !== "" ||
      descriptionFoodN3 !== "" ||
      descriptionFoodN4 !== "" ||
      descriptionFoodN5 !== "" ||
      imageFoodN !== "" ||
      imageFoodN1 !== ""
    ) {
      setNameFood("");
      setConscious("");
      setDescriptionFoodN("");
      setDescriptionFoodN1("");
      setDescriptionFoodN2("");
      setDescriptionFoodN3("");
      setDescriptionFoodN4("");
      setDescriptionFoodN5("");
      setImageFoodN("");
      setImageFoodN1("");
    }
  });
  return (
    <>
      <div className="MuiBoxItemBody">
        <div className="MuiBoxItem_Left MuiBoxStudent">
          <div className="MuiBox_Button">
            <div className="row">
              <div className="col-9">
                <Link to="/formNorth" className="btnCreate">
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
                    <th>Tên món ăn</th>
                    <th>Đặc sản</th>
                    <th>Giới thiệu</th>
                    <th>Hình Ảnh</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {food_northerns.map((item, key) => (
                    <tr className="demo-list" id="demo_list" key={key}>
                      <td className="demo-item">{item.id}</td>
                      <td className="demo-item">{item.name}</td>
                      <td className="demo-item">{item.conscious}</td>
                      <td className="demo-item"></td>
                      <td className="demo-item">
                        <img src={item.image} alt="" className="demo-img" />
                      </td>
                      <td className="demo-btn" width="150px">
                        <Link to="/chitiet" onClick={() => onClickItem(item)}>
                          <button className="btnMore btnAdmin">Xem thêm</button>
                        </Link>
                        <button
                          className="btnDelete btnAdmin"
                          onClick={() => onDeleteItemFoodN(item.id)}
                        >
                          Xóa
                        </button>
                        <Link
                          to="/editNorth"
                          className=""
                          onClick={() => onClickItem(item)}
                        >
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

export default Food_MangerNorth;
