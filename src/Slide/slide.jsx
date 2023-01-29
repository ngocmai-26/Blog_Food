
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style.css";

const slideImages = [
  {
    url: 'https://media.doanhnghiephoinhap.vn/uploads/2022/05/22/mon-ngon-da-nang-p2-1653224002.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://banner.designer.com.vn/wp-content/uploads/2019/10/37c2dd31604325.5adb03efc2145.png',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.pinimg.com/originals/05/8e/71/058e7126b52f8e13dbfc0ef2c3c3cef9.jpg',
    caption: 'Slide 3'
  },
];
function SlideBar() {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            
            <div style={{'backgroundImage': `url(${slideImage.url})`}} className='slide_img'>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

export default SlideBar;
