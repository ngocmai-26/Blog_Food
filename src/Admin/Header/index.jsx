import "../style.css";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <>
      <div className="MuiBoxMenu">
        <nav>
          <div className="menuTopHeader">
            <div className="menuTopLogo">
              <a href="">
                <img
                  src="/asset/img/logo-teky.png"
                  alt=""
                  className="logo--full"
                />
              </a>
              <button className="menuTopToogle MuiIconButton-root">
                <span>
                  <img
                    src="/asset/img/menu-toggle.svg"
                    alt=""
                    className="icon_mini"
                  />
                </span>
              </button>
            </div>
          </div>
          <hr className="menuDivider" />
          <div className="menuInnerWrapper">
            <div className="menuPrimaryInner" id="menuPrimaryInner">
              <nav className="menuList">
                <Link to="/homeadmin" className="rootMenuItem rootMenuItem_color active">
                  <div className="ListItemIcon-root">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 486.196 486.196"
                      aria-hidden="true"
                    >
                      <path d="M481.708 220.456l-228.8-204.6c-.4-.4-.8-.7-1.3-1-5-4.8-13-5-18.3-.3l-228.8 204.6c-5.6 5-6 13.5-1.1 19.1 2.7 3 6.4 4.5 10.1 4.5 3.2 0 6.4-1.1 9-3.4l41.2-36.9v238.6c0 18.7 15.2 34 34 34H169.908c17.6 0 31.9-14.3 31.9-31.9v-121.3c0-2.7 2.2-4.9 4.9-4.9h72.9c2.7 0 4.9 2.2 4.9 4.9v121.3c0 17.6 14.3 31.9 31.9 31.9h72.2c19 0 34-18.7 34-42.6v-228.7l41.2 36.9c2.6 2.3 5.8 3.4 9 3.4 3.7 0 7.4-1.5 10.1-4.5 4.8-5.6 4.3-14.1-1.2-19.1zm-86.2 66.7v145.1c0 9.7-4.8 15.6-7 15.6h-72.2c-2.7 0-4.9-2.2-4.9-4.9v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6 0-31.9 14.3-31.9 31.9v121.3c0 2.7-2.2 4.9-4.9 4.9H97.608c-3.8 0-7-3.1-7-7v-262.8l151.8-135.6 153.1 136.9v107.6z"></path>
                    </svg>
                  </div>
                  <div className="ListItemTitle">
                    <div className="ListItemText">DashBoard</div>
                  </div>
                </Link>
                <Link to="/quanlydoanBac" className="rootMenuItem rootMenuItem_color ">
                  <div className="ListItemIcon-root">
                    <i className="far fa-address-card MuiIconItem-root"></i>
                  </div>
                  <div className="ListItemTitle">
                    <div className="ListItemText">Qu???n l?? m??n ??n mi???n B???c</div>
                  </div>
                </Link>
                <Link to="/quanlydoanNam" className="rootMenuItem rootMenuItem_color ">
                  <div className="ListItemIcon-root">
                    <i className="far fa-address-card MuiIconItem-root"></i>
                  </div>
                  <div className="ListItemTitle">
                    <div className="ListItemText">Qu???n l?? m??n ??n mi???n Nam</div>
                  </div>
                </Link>
                <Link to="/quanlydoanTrung" className="rootMenuItem rootMenuItem_color ">
                  <div className="ListItemIcon-root">
                    <i className="far fa-address-card MuiIconItem-root"></i>
                  </div>
                  <div className="ListItemTitle">
                    <div className="ListItemText">Qu???n l?? m??n ??n mi???n Trung</div>
                  </div>
                </Link>
                <Link to="/quanlytintuc" className="rootMenuItem rootMenuItem_color ">
                  <div className="ListItemIcon-root">
                    <i className="far fa-angry MuiIconItem-root"></i>
                  </div>
                  <div className="ListItemTitle">
                    <div className="ListItemText">Qu???n l?? tin t???c</div>
                  </div>
                </Link>
                <Link to="/quanlyblog" className="rootMenuItem rootMenuItem_color ">
                  <div className="ListItemIcon-root">
                    <i className="far fa-bookmark MuiIconItem-root"></i>
                  </div>
                  <div className="ListItemTitle">
                    <div className="ListItemText">Qu???n l?? blog</div>
                  </div>
                </Link>
                <hr className="menuDivider" />
              </nav>
            </div>
          </div>
        </nav>
        <a href="" className="rootMenuItem rootMenuItem_color rootMenuItem-setting">
          <div className="ListItemIcon-root">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 478.703 478.703"
              aria-hidden="true"
            >
              <path d="M454.2 189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2a29.54 29.54 0 0 0-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6a29.54 29.54 0 0 0-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6a29.54 29.54 0 0 0 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0 0 24.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z"></path>
              <path d="M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z"></path>
            </svg>
          </div>
          <div className="ListItemTitle">
            <div className="ListItemText">C???u H??nh</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default HeaderAdmin;
