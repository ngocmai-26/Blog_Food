import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Body/blog";
import Food_Central from "./Body/food_central";
import Food_item from "./Body/food_item";
import Food_Northern from "./Body/food_northern";
import Food_south from "./Body/food_south";
import Home from "./Body/home";
import Food_new from "./Body/news";
import Login from "./Form/login";
import Header_Menu from "./Header/header_menu";
import Header_Top from "./Header/header_top";
import SlideBar from "./Slide/slide";

function RouterMenu({
  food_souths,
  food_homes,
  food_centrals,
  food_northerns,
  onChangePage_FS,
  totalPage,
  currentPage,
  onChangePage_FN,
  totalPage_FN,
  currentPage_FN,
  onChangePage_FC,
  totalPage_FC,
  currentPage_FC
}) {
  return (
    <BrowserRouter>
      <Header_Menu />
      <Header_Top />
      <Routes>
        <Route path="/" element={<Home food_homes={food_homes} />} />
        <Route
          path="/MienBac"
          element={
            <Food_Northern
              food_northerns={food_northerns}
              onChangePage_FN={onChangePage_FN}
              totalPage_FN={totalPage_FN}
              currentPage_FN={currentPage_FN}
            />
          }
        />
        <Route
          path="/MienNam"
          element={
            <Food_south
              food_souths={food_souths}
              onChangePage_FS={onChangePage_FS}
              totalPage={totalPage}
              currentPage={currentPage}
            />
          }
        />
        <Route
          path="/MienTrung"
          element={<Food_Central food_centrals={food_centrals}
          onChangePage_FC={onChangePage_FC}
          totalPage_FC={totalPage_FC}
          currentPage_FC={currentPage_FC} />}
        />
        <Route path="/news" element={<Food_new />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/abc" element={<Food_item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterMenu;
