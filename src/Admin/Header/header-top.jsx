function HeaderTop() {
  return (
    <>
      <div className="MuiBoxHeaderTop" id="header">
        <h3 className="MuiTypography-h3">Tổng Quan</h3>
        <div className="MuiBoxHeaderInfo">
          <div className="MuiBoxItem active">
            <svg
              className="MuiSvgIcon-root jss412"
              focusable="false"
              viewBox="0 0 20 20"
              color="#A2A8AF"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99992 0.833374C4.93992 0.833374 0.833252 4.94004 0.833252 10C0.833252 15.06 4.93992 19.1667 9.99992 19.1667C15.0599 19.1667 19.1666 15.06 19.1666 10C19.1666 4.94004 15.0599 0.833374 9.99992 0.833374ZM9.08325 16.4167V14.5834H10.9166V16.4167H9.08325ZM11.9891 10.1559L12.8141 9.31254C13.3366 8.79004 13.6666 8.05671 13.6666 7.25004C13.6666 5.22421 12.0258 3.58337 9.99992 3.58337C7.97409 3.58337 6.33325 5.22421 6.33325 7.25004H8.16659C8.16659 6.24171 8.99158 5.41671 9.99992 5.41671C11.0083 5.41671 11.8333 6.24171 11.8333 7.25004C11.8333 7.75421 11.6316 8.21254 11.2924 8.54254L10.1558 9.69754C9.49575 10.3667 9.08325 11.2834 9.08325 12.2917V12.75H10.9166C10.9166 11.375 11.3291 10.825 11.9891 10.1559Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="MuiBoxText">Trợ Giúp</p>
          </div>
          <div className="MuiBoxItem">
            <svg
              className="MuiSvgIcon-root jss412"
              focusable="false"
              viewBox="0 0 16 14"
              color="#A2A8AF"
              aria-hidden="true"
            >
              <path
                d="M8 14C5.10929 11.4904 0 8.36868 0 4.19619C0 1.84632 1.936 0 4.4 0C5.792 0 7.128 0.578989 8 1.55556C8.872 0.578989 10.208 0 11.6 0C14.064 0 16 1.84632 16 4.19619C16 8.36185 10.8971 11.5039 8 14Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="MuiBoxText">Góp ý</p>
          </div>
          <div className="MuiBoxItem">
            <div className="avatar-acount">
              <div className="avatar-text">
                <div className="avatar-item">
                  <span className="avatar-span">M</span>
                </div>
              </div>
            </div>
            <p className="MuiBoxText MuiBoxTextName">Ngọc Mai</p>
          </div>
          <div className="MuiBoxItem">
            <i className="fas fa-bell" ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
