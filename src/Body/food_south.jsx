import { Link } from "react-router-dom";
import Pagination_FS from "../Pagination/pagination_fs";

import "./style.css";

function Food_south({ food_souths,onChangePage_FS, totalPage_FS, currentPage_FS,onClickItem }) {
  return (
    <div>
      <div className="home-separator"></div>
          <div className="row">
            {food_souths.map((item, key) => (
              <div className="home-product-item col-lg-20 col-6" key={key}>
                <div className="blog-post-card1-blog-post-card blog-post-card1-root-class-name3">
                  <img
                    alt="image"
                    src={item.image}
                    className="blog-post-card1-image"
                  />
                  <div className="blog-post-card1-container">
                    <span className="blog-post-card1-text">
                      <span className="title-food">{item.name}</span>
                    </span>
                    <span className="blog-post-card1-text1">
                      <span>{item.conscious}</span>
                    </span>
                    <span className="blog-post-card1-text2">
                      <span>
                        {item.description}
                      </span>
                    </span>
                    <div className="blog-post-card1-container1">
                      <div className="blog-post-card1-text4">
                    <Link to="/chitiet" className="blog-post-card1-button4" onClick={()=>onClickItem(item)}>Xem thêm...</Link>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Pagination_FS food_souths={food_souths} onChangePage_FS={onChangePage_FS} totalPage_FS={totalPage_FS} currentPage_FS={currentPage_FS}/>
          </div>
        </div>
  );
}

export default Food_south;
