import '@fortawesome/fontawesome-free/css/all.min.css';

function Blog_Manger() {
  return (
    <>
      <div className="MuiBoxItemBody">
        <div className="MuiBoxItem_Left MuiBoxStudent">
          <div className="MuiBox_Button">
            <div className="row">
              <div className="col-9">
                <a href="create.html" className="btnCreate btn">
                  Thêm
                </a>
                <button className="btnExcel btn">Xuất File Excel</button>
              </div>

              <div className="search col-3 justify-content-end">
                <input
                  type="text"
                  id="txtSearch"
                  className="search_input"
                  placeholder="Tìm tên hoặc MSSV"
                />
                <button
                  type="button"
                  className="btn btnSearch btn-primary"
                  id="search"
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
                    <th>MSSV</th>
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>SDT</th>
                    <th>Giới thiệu</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="tbodySinhVien"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="MuiBoxItem_Right"></div>
      </div>
    </>
  );
}

export default Blog_Manger;
