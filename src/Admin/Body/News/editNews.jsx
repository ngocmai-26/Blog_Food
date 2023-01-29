function EditNews({
  new_item,
  setNameNew,
  setContent,
  setDescription,
  setDescription1,
  setDescription2,
  setDescription3,
  setDescription4,
  setDescription5,
  setDescription6,
  setDataTime,
  setImage,
  setImage1,
  image,
  image1,
  onUpdateFoodNews
}) {
  return (
    <div className="MuiBoxItemBody">
      <div className="MuiBoxItem_Left MuiBoxStudent">
        <div className="information py-2">
          <form action="" className="formQLTT">
            <h3 className="text-center">Thông tin Tin Tức</h3>
            <div className="group ">
              <div className="row">
                <div className="col-6 ">
                  <label htmlFor="txtName" className="text">
                    Tên bài báo: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="txtName"
                    className="form-group w-100"
                    defaultValue={new_item.name}
                    onChange={(e) =>
                      setNameNew((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtContent" className="text">
                    Content: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="content"
                    id="txtContent"
                    className="form-group w-100"
                    defaultValue={new_item.content}
                    onChange={(e) =>
                      setContent((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription" className="text">
                    Nội dung 1: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="txtDescription"
                    className="form-group w-100"
                    defaultValue={new_item.description}
                    onChange={(e) =>
                      setDescription((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription1" className="text">
                    Nội dung 2: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description1"
                    id="txtDescription1"
                    className="form-group w-100"
                    defaultValue={new_item.description_1}
                    onChange={(e) =>
                      setDescription1((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription2" className="text">
                    Nội dung 3: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description2"
                    id="txtDescription2"
                    className="form-group w-100"
                    defaultValue={new_item.description_2}
                    onChange={(e) =>
                      setDescription2((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription3" className="text">
                    Nội dung 4: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description3"
                    id="txtDescription3"
                    className="form-group w-100"
                    defaultValue={new_item.description_3}
                    onChange={(e) =>
                      setDescription3((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription4" className="text">
                    Nội dung 5: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description4"
                    id="txtDescription4"
                    className="form-group w-100"
                    defaultValue={new_item.description_4}
                    onChange={(e) =>
                      setDescription4((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription5" className="text">
                    Nội dung 6: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description5"
                    id="txtDescription5"
                    className="form-group w-100"
                    defaultValue={new_item.description_5}
                    onChange={(e) =>
                      setDescription5((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDescription6" className="text">
                    Nội dung 7: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="description6"
                    id="txtDescription6"
                    className="form-group w-100"
                    defaultValue={new_item.description_6}
                    onChange={(e) =>
                      setDescription6((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtDate" className="text">
                    Ngày đăng: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="date"
                    id="txtDate"
                    className="form-group w-100"
                    defaultValue={new_item.datatime}
                    onChange={(e) =>
                      setDataTime((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="text">
                    Link hình ảnh: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="txtPosition"
                    className="form-group w-100"
                    defaultValue={new_item.image}
                    onChange={(e) =>
                      setImage((prev) => (prev = e.target.value))
                    }
                  />
                  <div className="justify-content-center col-12 text-center">
                    <img
                      src={image}
                      alt=""
                      width="80%"
                      className="mt-2 text-center "
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="" className="text">
                    Link hình ảnh 1: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="txtPosition"
                    className="form-group w-100"
                    defaultValue={new_item.image_1}
                    onChange={(e) =>
                      setImage1((prev) => (prev = e.target.value))
                    }
                  />
                  <div className="justify-content-center col-12 text-center">
                    <img
                      src={image1}
                      alt=""
                      width="80%"
                      className="mt-2 text-center "
                    />
                  </div>
                </div>
                <div className="col-12 py-2">
                  <div className="row justify-content-end">
                    <div className="col-1 txtBtn justify-content-start">
                      <button
                        type="button"
                        className="txtSubmit btnStart"
                        id="submit"
                        onClick={()=>{onUpdateFoodNews()}}
                      >
                        Cập nhật
                      </button>
                    </div>
                    <div className="col-1 txtBtn">
                      <button type="reset" className="btnStart txtReset">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="MuiBoxItem_Right"></div>
    </div>
  );
}

export default EditNews;
