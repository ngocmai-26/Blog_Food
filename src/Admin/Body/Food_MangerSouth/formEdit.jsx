function FormEditSouth({
  food_item,
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
  onUpdateFoodSouth
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
                    defaultValue={food_item.name}
                    onChange={(e) =>
                      setNameFood((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="txtConscious" className="text">
                    Đặc sản: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="conscious"
                    id="txtConscious"
                    className="form-group w-100"
                    defaultValue={food_item.conscious}
                    onChange={(e) =>
                      setConscious((prev) => (prev = e.target.value))
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
                    defaultValue={food_item.description}
                    onChange={(e) =>
                      setDescriptionFoodN((prev) => (prev = e.target.value))
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
                    defaultValue={food_item.description_1}
                    onChange={(e) =>
                      setDescriptionFoodN1((prev) => (prev = e.target.value))
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
                    defaultValue={food_item.description_2}
                    onChange={(e) =>
                      setDescriptionFoodN2((prev) => (prev = e.target.value))
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
                    defaultValue={food_item.description_3}
                    onChange={(e) =>
                      setDescriptionFoodN3((prev) => (prev = e.target.value))
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
                    defaultValue={food_item.description_4}
                    onChange={(e) =>
                      setDescriptionFoodN4((prev) => (prev = e.target.value))
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
                    defaultValue={food_item.description_5}
                    onChange={(e) =>
                      setDescriptionFoodN5((prev) => (prev = e.target.value))
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="text">
                    Link hình ảnh: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    id="txtImage"
                    className="form-group w-100"
                    defaultValue={food_item.image}
                    onChange={(e) =>
                      setImageFoodN((prev) => (prev = e.target.value))
                    }
                  />
                  <div className="justify-content-center col-12 text-center">
                    <img
                      src={imageFoodN}
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
                    name="image2"
                    value={food_item.image_1}
                    id="txtImage2"
                    className="form-group w-100"
                    onChange={(e) =>
                      setImageFoodN1((prev) => (prev = e.target.value))
                    }
                  />
                  <div className="justify-content-center col-12 text-center">
                    <img
                      src={imageFoodN1}
                      alt=""
                      width="80%"
                      className="mt-2 text-center "
                    />
                  </div>
                </div>
                <div className="col-12 py-2">
                  <div className="row justify-content-end">
                    <div className="col-2 txtBtn justify-content-start">
                      <button type="button" className="txtSubmit " id="submit" onClick={()=>onUpdateFoodSouth()}>
                        Cập nhật
                      </button>
                    </div>
                    <div className="col-1 txtBtn">
                      <button type="reset" className="txtReset">
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

export default FormEditSouth;
