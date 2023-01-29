import { Link } from "react-router-dom";
import Pagination_News from "../Pagination/pagination_new";

function Food_new({
  food_news,
  onChangePage_News,
  totalPage_News,
  currentPage_News,
  onClickItemNew
}) {
  return (
    <div className="food_news">
      <div className="row">
        <div className="col-9">
          <div className="home-container3">
            {food_news.map((item, key) => (
              <div className="blog-post-card2-blog-post-card blog-post-card2-root-class-name" key={key}>
                <div className="blog-post-card2-container">
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        alt="image"
                        src={item.image}
                        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                        className="blog-post-card2-image"
                      />
                    </div>
                    <div className="col-lg-9">
                      <div className="blog-post-card2-container1">
                        <span className="blog-post-card2-text1">
                          <span>{item.datatime}</span>
                        </span>
                      </div>
                      <h3 className="blog-post-card2-text2">
                        <span>{item.name}</span>
                      </h3>
                      <span className="blog-post-card2-text3">
                        <span>{item.content}</span>
                      </span>
                      <div className="blog-post-card2-container2">
                        <Link to="/tintuc" className="blog-post-card1-button4 blog-post-card2-text5" onClick={()=>onClickItemNew(item)}>Read More -&gt;</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Pagination_News food_news={food_news} onChangePage_News={onChangePage_News} totalPage_News={totalPage_News} currentPage_News={currentPage_News}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food_new;
