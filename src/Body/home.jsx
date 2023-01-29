import classNames from "classnames";
import { Link } from "react-router-dom";
import SlideBar from "../Slide/slide";
import "./style.css";

function Home({ food_homes, onClickItem, food_news, onClickItemNew, onSeeMore, displaySeeMore }) {
  return (
    <div>
      <SlideBar />
      <section className="ftco-section">
        <div className="home-steps">
          <h1 className="home-text09">
            <span>Ẩm thực Việt Nam</span>
          </h1>
          <span className="home-text11">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <br />
            <span></span>
          </span>
          <div className="home-container09">
            <div className="home-step">
              <div className="home-container10">
                <div className="home-line"></div>
                <div className="home-container11">
                  <svg viewBox="0 0 1024 1024" className="home-icon38">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container12">
                <h1 className="home-text14">
                  <span>Hoà Đồng Và Đa Dạng</span>
                </h1>
                <span className="home-text16">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br />
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container13">
                <div className="home-line2"></div>
                <div className="home-container14">
                  <svg viewBox="0 0 1024 1024" className="home-icon40">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="home-line3"></div>
              </div>
              <div className="home-container15">
                <h1 className="home-text19">
                  <span>Đậm Đà Hương Vị</span>
                </h1>
                <span className="home-text21">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br />
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-container16">
                <div className="home-line4"></div>
                <div className="home-container17">
                  <svg viewBox="0 0 1024 1024" className="home-icon42">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container18">
                <h1 className="home-text24">
                  <span>Ngon miệng và Lạ Mắt</span>
                </h1>
                <span className="home-text26">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br />
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-container19">
                <div className="home-line6"></div>
                <div className="home-container20">
                  <svg viewBox="0 0 1024 1024" className="home-icon45">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="home-line7"></div>
              </div>
              <div className="home-container21">
                <h1 className="home-text29">
                  <span>Tinh Tế và Tỉ Mỉ</span>
                </h1>
                <span className="home-text31">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br />
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-gallery">
        <div className="home-gallery10">
          <div className="home-gallery11">
            <h1 className="home-text011">Bánh mì</h1>
          </div>
        </div>
        <div className="home-gallery12">
          <div className="home-gallery13">
            <h1 className="home-text011">Phở</h1>
          </div>
        </div>
        <div className="home-gallery14">
          <div className="home-gallery17">
            <h1 className="home-text011">Bún riêu cua</h1>
          </div>
        </div>
        <div className="home-gallery16">
          <div className="home-gallery17">
            <h1 className="home-text011">Nem nướng</h1>
          </div>
        </div>
        <div className="home-gallery18">
          <div className="home-gallery17">
            <h1 className="home-text011">Bánh xèo</h1>
          </div>
        </div>
        <div className="home-gallery20">
          <div className="home-gallery17">
            <h1 className="home-text011">Cơm tấm</h1>
          </div>
        </div>
      </div>
      <div className="home-product">
        <h1 className="home-text65">
          <span>Đặc Sản Miền Quê</span>
        </h1>
        <div className="row">
          {food_homes.map((item, key) => (
            <div className="home-product-item col-lg-3 col-md-4 col-6" key={key}>
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
                    <span>{item.description}</span>
                  </span>
                  <div className="blog-post-card1-container1">
                    <div className="blog-post-card1-text4">
                      <Link
                        to="/chitiet"
                        className="blog-post-card1-button4"
                        onClick={() => onClickItem(item)}
                      >
                        Xem thêm...
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={classNames({displaySeeMore: displaySeeMore}, "seemore")} >
            <button className="btn btn-primary" onClick={() => onSeeMore()}>See More</button>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <h1 className="home-text034">
            <span>63</span>
          </h1>
          <span className="home-text037">Tỉnh Thành</span>
          <span className="home-text038">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat1">
          <h1 className="home-text039">
            <span>54</span>
          </h1>
          <span className="home-text041">Dân tộc</span>
          <span className="home-text042">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat2">
          <h1 className="home-text043">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="home-text046">Món ăn</span>
          <span className="home-text047">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat3">
          <h1 className="home-text048">
            <span>100</span>
            <span>+</span>
          </h1>
          <span className="home-text050">Đặc sản</span>
          <span className="home-text051">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
      <div className="home-blog">
        <h1 className="home-text65">
          <span>Tin Tức Ẩm Thực</span>
        </h1>
        <div className="home-container2">
          {food_news.map((item, key) => (
              <div className="blog-post-card2-blog-post-card blog-post-card2-root-class-name" key={key}>
                <div className="blog-post-card2-container">
                  <div className="row">
                    <div className="col-lg-3 col-3">
                      <img
                        alt="image"
                        src={item.image}
                        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                        className="blog-post-card2-image"
                      />
                    </div>
                    <div className="col-lg-9 col-9">
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
        </div>
      </div>
      {/* <div className="home-testimonial">
        <h1 className="home-text65">
          <span>Khách hàng hài lòng của chúng tôi nói</span>
        </h1>
        <span className="home-text67">
          <span>
            Ẩm thực là một trong những nét văn hóa hấp dẫn, độc đáo của Việt Nam
            với bạn bè quốc tế. Giống với những món ăn truyền thống của các nước
            châu Á, ẩm thực Việt Nam đáp ứng đủ những yếu tố về sức khỏe và tâm
            lý cho thực khách.
          </span>
        </span>
        <div className="home-container28">
          <header className="testimonial-card31-testimonial-card testimonial-card31-root-class-name">
            <svg viewBox="0 0 1024 1024" className="testimonial-card31-icon">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="testimonial-card31-testimonial">
              <span className="testimonial-card31-text">
                <span>
                  Người dân Việt Nam có đa dạng cách chế biến món ăn. Những món
                  ăn Việt không chỉ được bày đẹp mắt, ngon miệng mà nó còn chứa
                  đựng cả những ý nghĩa cao đẹp. Tuỳ theo mỗi vùng miền, ẩm thực
                  Việt Nam sẽ có cách thức chế biến và hương vị khác nhau.
                </span>
              </span>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="testimonial-card31-image"
              />
              <span className="testimonial-card31-text1">
                <span>John Doe</span>
              </span>
            </div>
          </header>
          <header className="testimonial-card31-testimonial-card testimonial-card31-root-class-name">
            <svg viewBox="0 0 1024 1024" className="testimonial-card31-icon">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="testimonial-card31-testimonial">
              <span className="testimonial-card31-text">
                <span>
                  Không cần nhà hàng hay bàn ghế sang trọng, những quán phở trên
                  vỉa hè phố Hàng Trống (Hà Nội) vẫn nườm nượp khách. Quán chỉ
                  mở từ 5 giờ chiều – 8 giờ tối là hết hàng. Hơn hai chục chiếc
                  ghế nhựa thấp, những chiếc bát tô kiểu cũ, một nồi nước dùng
                  đặt trên bếp than, chục túi thịt luộc chín cùng một rổ bánh
                  phở, đồ đạc của quán đơn sơ là vậy.
                </span>
              </span>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="testimonial-card31-image"
              />
              <span className="testimonial-card31-text1">
                <span>John Doe</span>
              </span>
            </div>
          </header>
          <header className="testimonial-card31-testimonial-card testimonial-card31-root-class-name">
            <svg viewBox="0 0 1024 1024" className="testimonial-card31-icon">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="testimonial-card31-testimonial">
              <span className="testimonial-card31-text">
                <span>
                  Cũng như nhiều món chấm khác, bún chả gây ấn tượng nhất ở nước
                  chấm. Ngoài giấm gạo ngâm tỏi lấy vị chua, người Hà Nội còn
                  dùng sấu luộc để nguyên quả cho nước trong. Giấm sấu không
                  chua bằng giấm gạo nhưng dễ ăn, vừa miệng. Đây là vị rất riêng
                  tạo nên sự tinh túy trong từng giọt nước chấm.
                </span>
              </span>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="testimonial-card31-image"
              />
              <span className="testimonial-card31-text1">
                <span>John Doe</span>
              </span>
            </div>
          </header>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
