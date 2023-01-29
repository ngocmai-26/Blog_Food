import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from ".";
import Food_Manger from "./Body/Food_MangerSouth/Food_management";
import FormNews from "./Body/News/form";

function RouterAdmin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/quanlydoan" element={<Food_Manger />} />
        <Route path="/qanlytintuc" />
        <Route path="/quuanlyblog" />
        <Route path="/formNews" element={<FormNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterAdmin;
