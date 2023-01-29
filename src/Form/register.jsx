import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;

function Register({
  onRegister,
  setPasswordRegister,
  setName,
  setPhone,
  setEmail,
  errorRegister,
}) {
  return (
    <div className="home-login-form">
      <div className="home-container-login">
        <h3 className="home-login-text">ĐĂNG KÍ</h3>
        <div className="home-container2-login">
          <input
            type="text"
            placeholder="Họ và Tên"
            className="home-text_input-login input"
            onChange={(e) => setName((prev) => (prev = e.target.value))}
          />
          {errorRegister.isErrorName && (
            <ErrorText className="form-text danger">
              {errorRegister.messageErrorName}
            </ErrorText>
          )}
          <input
            type="phone"
            placeholder="Số điện thoại"
            className="home-text_input-login input"
            onChange={(e) => setPhone((prev) => (prev = e.target.value))}
          />
          {errorRegister.isErrorPhone && (
            <ErrorText className="form-text danger">
              {errorRegister.messageErrorPhone}
            </ErrorText>
          )}
          <input
            type="email"
            placeholder="Email"
            className="home-text_input-login input"
            onChange={(e) => setEmail((prev) => (prev = e.target.value))}
          />
          {errorRegister.isErrorEmail && (
            <ErrorText className="form-text danger">
              {errorRegister.messageErrorEmail}
            </ErrorText>
          )}
          {errorRegister.isErrorUserName && (
            <ErrorText className="form-text danger">
              {errorRegister.messageErrorUserName}
            </ErrorText>
          )}
          <input
            type="text"
            placeholder="Password"
            className="home-text_input-login input"
            onChange={(e) =>
              setPasswordRegister((prev) => (prev = e.target.value))
            }
          />
          {errorRegister.isErrorPassword && (
            <ErrorText className="form-text danger">
              {errorRegister.messageErrorPassword}
            </ErrorText>
          )}
        </div>
        <div className="home-container3-login">
          <button className="home-button-submit button" onClick={() =>onRegister()}>
            Đăng kí
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
