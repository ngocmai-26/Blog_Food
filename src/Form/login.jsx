import { Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;

function Login({ onLogin, setUsername, setPassword, error }) {
  return (
    <div className="home-login-form">
      <div className="home-container-login">
        <h3 className="home-login-text">ĐĂNG NHẬP</h3>
        <div className="home-container2-login">
          <input
            type="text"
            placeholder="Username"
            className="home-text_input-login input"
            id="username"
            onChange={(e) => setUsername((prev) => (prev = e.target.value))}
          />
          {error.isErrorUserName && (
            <ErrorText className="form-text danger">
              {error.messageErrorUserName}
            </ErrorText>
          )}
          <input
            type="text"
            placeholder="Password"
            className="home-text_input-login input"
            id="password"
            onChange={(e) => setPassword((prev) => (prev = e.target.value))}
          />
          {error.isErrorPassword && (
            <ErrorText className="form-text danger">
              {error.messageErrorPassword}
            </ErrorText>
          )}
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            Quên mật khẩu?
          </a>
        </div>
        <div className="home-container3-login">
          <button onClick={onLogin} className="home-button-submit  button">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
