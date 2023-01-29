import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BodyHomeAdmin from "./Body";
import Blog_Manger from "./Body/Blog_management";
import Food_MangerCentral from "./Body/Food_MangerCentral/Food_management";
import FormCentral from "./Body/Food_MangerCentral/form";
import Food_MangerNorth from "./Body/Food_MangerNorth/Food_management";
import FormNorth from "./Body/Food_MangerNorth/form";
import Food_MangerSouth from "./Body/Food_MangerSouth/Food_management";
import Food_Manger from "./Body/Food_MangerSouth/Food_management";
import FormSouth from "./Body/Food_MangerSouth/form";
import FormEdit from "./Body/Food_MangerSouth/formEdit";
import ItemFood from "./Body/ItemFood";
import FormNews from "./Body/News/form";
import New_Manger from "./Body/News/New_management";
import HeaderAdmin from "./Header";
import HeaderTop from "./Header/header-top";
import RouterAdmin from "./RouterAdmin";
import ItemFoodNews from "./Body/News/ItemNews";
import EditNews from "./Body/News/editNews";
import FormEditSouth from "./Body/Food_MangerSouth/formEdit";
import FormEditNorth from "./Body/Food_MangerNorth/formEdit";
import FormEditCentral from "./Body/Food_MangerCentral/formEdit";
import { PAGINATION, PATH_ROUTER } from "../contants";
import { useEffect } from "react";

function HomeAdmin({
  food_news,
  food_centrals,
  food_northerns,
  food_souths,
  setFood_news,
  setFood_north,
  setFood_south,
  setFood_central,
}) {
  /**************Text Tin Tức***********/
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [description_1, setDescription_1] = useState("");
  const [description_2, setDescription_2] = useState("");
  const [description_3, setDescription_3] = useState("");
  const [description_4, setDescription_4] = useState("");
  const [description_5, setDescription_5] = useState("");
  const [description_6, setDescription_6] = useState("");
  const [dataTime, setDataTime] = useState("");
  const [image, setImage] = useState("");
  const [image_1, setImage_1] = useState("");
  const [conscious, setConscious] = useState("");

  /**************Text Food***********/
  const [itemEdit, setItemEdit] = useState([]);
  const [food_item, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");
  const [listFood, setListFood] = useState([]);
  const [nameFood, setNameFood] = useState("");

  /**************Storage */
  /********************Search */
  const { pathname } = useLocation();
  useEffect(() => {
    setSearch("");
    console.log(listFood);
    if (
      pathname === PATH_ROUTER.FOOD_CENTRAL ||
      pathname === PATH_ROUTER.FORM_CENTRAL
    ) {
      setListFood(food_centrals);
      setNameFood("food_centrals");
      localStorage.setItem("food_centrals", JSON.stringify(listFood));
    } else if (
      pathname === PATH_ROUTER.FOOD_NORTH ||
      pathname === PATH_ROUTER.FORM_NORTH
    ) {
      setListFood(food_northerns);
      setNameFood("food_northerns");
      localStorage.setItem("food_northerns", JSON.stringify(listFood));
    } else if (
      pathname === PATH_ROUTER.FOOD_SOUTH ||
      pathname === PATH_ROUTER.FORM_SOUTH
    ) {
      setListFood(food_souths);
      setNameFood("food_souths");
      localStorage.setItem("food_souths", JSON.stringify(listFood));
    } else if (
      pathname === PATH_ROUTER.FOOD_NEW ||
      pathname === PATH_ROUTER.FORM_NEW
    ) {
      setListFood(food_news);
      setNameFood("food_news");
      localStorage.setItem("food_news", JSON.stringify(listFood));
    }
  }, [pathname, food_centrals, food_souths, food_northerns, food_news]);

  const onClickSearch = () => {
    const result = listFood.filter((el) => el.name.includes(search));
    setListFood(result);
    console.log(result);
  };

  const onClickItem = (item) => {
    setFoodItem(item);
  };

  /**************Onclick New***********/
  const onClickAddNews = () => {
    let id = 1;
    food_news.map((item) => {
      id = item.id + 1;
    });

    setFood_news([
      ...food_news,
      {
        id,
        name,
        content,
        description,
        description_1,
        description_2,
        description_3,
        description_4,
        description_5,
        description_6,
        dataTime,
        image,
        image_1,
      },
    ]);
  };

  /**************Onclick Food***********/
  const onClickAddFood = () => {
    let id = 1;
    food_northerns.map((item) => {
      id = item.id + 1;
    });
    setFood_north([
      ...food_northerns,
      {
        id,
        name,
        conscious,
        description,
        description_1,
        description_2,
        description_3,
        description_4,
        description_5,
        image,
        image_1,
      },
    ]);
  };

  /**************Onclick Food***********/
  const onClickAddFoodSouth = () => {
    let id = 1;
    food_souths.map((item) => {
      id = item.id + 1;
    });
    setFood_south([
      ...food_souths,
      {
        id,
        name,
        conscious,
        description,
        description_1,
        description_2,
        description_3,
        description_4,
        description_5,
        image,
        image_1,
      },
    ]);
  };

  /**************Onclick Food***********/
  const onClickAddFoodCentral = () => {
    let id = 1;
    food_centrals.map((item) => {
      id = item.id + 1;
    });
    setFood_central([
      ...food_centrals,
      {
        id,
        name,
        conscious,
        description,
        description_1,
        description_2,
        description_3,
        description_4,
        description_5,
        image,
        image_1,
      },
    ]);
  };

  /************Xóa item************/
  const onDeleteItemNew = (item) => {
    const list_news = food_news.filter((prev) => item !== prev.id);
    setFood_news(list_news);
  };

  const onDeleteItemFoodN = (item) => {
    const list_news = listFood.filter((prev) => item !== prev.id);
    setFood_north(list_news);
  };

  const onDeleteItemFoodS = (item) => {
    const list_news = food_souths.filter((prev) => item !== prev.id);
    setFood_south(list_news);
  };

  const onDeleteItemFoodC = (item) => {
    const list_news = food_centrals.filter((prev) => item !== prev.id);
    setFood_central(list_news);
  };

  const onItemEditSouth = (item) => {
    setItemEdit(item);
  };

  /*******************UPDATE */

  const onUpdateFood = () => {
    listFood.filter((el) => {
      if (el.id === food_item.id) {
        if (name === "") {
          el.name = food_item.name;
        } else {
          el.name = name;
        }
        if (conscious === "") {
          el.conscious = food_item.conscious;
        } else {
          el.conscious = conscious;
        }
        if (description === "") {
          el.description = food_item.description;
        } else {
          el.description = description;
        }
        if (description_1 === "") {
          el.description_1 = food_item.description_1;
        } else {
          el.description_1 = description_1;
        }
        if (description_2 === "") {
          el.description_2 = food_item.description_2;
        } else {
          el.description_2 = description_2;
        }
        if (description_3 === "") {
          el.description_3 = food_item.description_3;
        } else {
          el.description_3 = description_3;
        }
        if (description_4 === "") {
          el.description_4 = food_item.description_4;
        } else {
          el.description_4 = description_4;
        }
        if (description_5 === "") {
          el.description_5 = food_item.description_5;
        } else {
          el.description_5 = description_5;
        }
        if (image === "") {
          el.image = food_item.image;
        } else {
          el.image = image;
        }
        if (image_1 === "") {
          el.image_1 = food_item.image_1;
        } else {
          el.image_1 = image_1;
        }
        if (content === "") {
          el.content = food_item.content;
        } else {
          el.content = content;
        }
        if (dataTime === "") {
          el.dataTime = food_item.datetime;
        } else {
          el.name = dataTime;
        }
      }
    });
  };


  return (
    <>
      <div className="MuiBox_root">
        <HeaderAdmin />
        <div className="MuiBoxBody">
          <HeaderTop />
          <Routes>
            <Route path="/homeadmin" element={<BodyHomeAdmin />} />
            <Route
              path={PATH_ROUTER.FOOD_NORTH}
              element={
                <Food_MangerNorth
                  onClickItem={onClickItem}
                  food_northerns={listFood}
                  name_food={name}
                  conscious={conscious}
                  descriptionFoodN={description}
                  descriptionFoodN1={description_1}
                  descriptionFoodN2={description_2}
                  descriptionFoodN3={description_3}
                  descriptionFoodN4={description_4}
                  descriptionFoodN5={description_5}
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onDeleteItemFoodN={onDeleteItemFoodN}
                  setSearch={setSearch}
                  onClickSearch={onClickSearch}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FOOD_CENTRAL}
              element={
                <Food_MangerCentral
                  onClickItem={onClickItem}
                  food_centrals={listFood}
                  name_food={name}
                  conscious={conscious}
                  descriptionFoodN={description}
                  descriptionFoodN1={description_1}
                  descriptionFoodN2={description_2}
                  descriptionFoodN3={description_3}
                  descriptionFoodN4={description_4}
                  descriptionFoodN5={description_5}
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onDeleteItemFoodC={onDeleteItemFoodC}
                  setSearch={setSearch}
                  onClickSearch={onClickSearch}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FOOD_SOUTH}
              element={
                <Food_MangerSouth
                  onClickItem={onClickItem}
                  food_souths={listFood}
                  name_food={name}
                  conscious={conscious}
                  descriptionFoodN={description}
                  descriptionFoodN1={description_1}
                  descriptionFoodN2={description_2}
                  descriptionFoodN3={description_3}
                  descriptionFoodN4={description_4}
                  descriptionFoodN5={description_5}
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onDeleteItemFoodS={onDeleteItemFoodS}
                  onItemEditSouth={onItemEditSouth}
                  setSearch={setSearch}
                  onClickSearch={onClickSearch}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FOOD_NEW}
              element={
                <New_Manger
                  food_news={listFood}
                  onDeleteItemNew={onDeleteItemNew}
                  onClickItem={onClickItem}
                  setSearch={setSearch}
                  onClickSearch={onClickSearch}
                />
              }
            />
            <Route path="/quanlyblog" element={<Blog_Manger />} />
            <Route
              path={PATH_ROUTER.FORM_NEW}
              element={
                <FormNews
                  onClickAddNews={onClickAddNews}
                  setNameNew={setName}
                  setContent={setContent}
                  setDescription={setDescription}
                  setDescription_1={setDescription_1}
                  setDescription_2={setDescription_2}
                  setDescription_3={setDescription_3}
                  setDescription_4={setDescription_4}
                  setDescription_5={setDescription_5}
                  setDescription_6={setDescription_6}
                  setDataTime={setDataTime}
                  setImage={setImage}
                  setImage_1={setImage_1}
                  image={image}
                  image_1={image_1}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FORM_CENTRAL}
              element={
                <FormCentral
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onClickAddFoodCentral={onClickAddFoodCentral}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FORM_NORTH}
              element={
                <FormNorth
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onClickAddFood={onClickAddFood}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FORM_SOUTH}
              element={
                <FormSouth
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onClickAddFoodSouth={onClickAddFoodSouth}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FOOD_EDIT_SOUTH}
              element={
                <FormEditSouth
                  food_item={food_item}
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                  onUpdateFoodSouth={onUpdateFood}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FOOD_EDIT_NORTH}
              element={
                <FormEditNorth
                  onUpdateFoodNorth={onUpdateFood}
                  food_item={food_item}
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                />
              }
            />
            <Route
              path={PATH_ROUTER.FOOD_EDIT_CENTRAL}
              element={
                <FormEditCentral
                  onUpdateFoodCentral={onUpdateFood}
                  food_item={food_item}
                  setNameFood={setName}
                  setConscious={setConscious}
                  setDescriptionFoodN={setDescription}
                  setDescriptionFoodN1={setDescription_1}
                  setDescriptionFoodN2={setDescription_2}
                  setDescriptionFoodN3={setDescription_3}
                  setDescriptionFoodN4={setDescription_4}
                  setDescriptionFoodN5={setDescription_5}
                  setImageFoodN={setImage}
                  setImageFoodN1={setImage_1}
                  imageFoodN={image}
                  imageFoodN1={image_1}
                />
              }
            />

            <Route
              path={PATH_ROUTER.FOOD_EDIT_NEW}
              element={
                <EditNews
                  new_item={food_item}
                  setNameNew={setName}
                  setContent={setContent}
                  setDescription={setDescription}
                  setDescription_1={setDescription_1}
                  setDescription_2={setDescription_2}
                  setDescription_3={setDescription_3}
                  setDescription_4={setDescription_4}
                  setDescription_5={setDescription_5}
                  setDescription_6={setDescription_6}
                  setDataTime={setDataTime}
                  setImage={setImage}
                  setImage_1={setImage_1}
                  image={image}
                  image_1={image_1}
                  onUpdateFoodNews={onUpdateFood}
                />
              }
            />
            <Route
              path="/chitiet"
              element={<ItemFood food_item={food_item} />}
            />
            <Route
              path="/chitiettintuc"
              element={<ItemFoodNews new_item={food_item} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
