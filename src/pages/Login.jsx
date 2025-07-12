import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid = emailRegex.test(email) && password.length > 8;

  const handleEmailBlur = () => {
    setIsFocused(false);
    if (email === "" || emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("이메일 형식으로 작성해주세요");
    }
  };

  const handleEmailFocus = () => {
    setIsFocused(true);
  };

  const loginProcess = async () => {
    try {
      const result = await axios.post("localhost:8080/auth/login", {
        loginId: email,
        password: password,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  const signupProcess = () => {
    navigate("/signup");
  };

  return (
    <div className="page-wrapper">
      <div className="page">
        <h1>로그인</h1>
        <div className="login-input">
          <div className="login-email">* 이메일</div>
          <input
            className="login-email-input"
            type="text"
            value={email}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />

          <div
            className={`error-message ${
              !isFocused && emailError ? "show" : ""
            }`}
          >
            {!isFocused && emailError ? emailError : ""}
          </div>

          <div className="login-pass">* 비밀번호</div>
          <input
            className="login-pass-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <button
          className={`login-btn ${isFormValid ? "active" : ""}`}
          disabled={!isFormValid}
          onClick={loginProcess}
        >
          로그인
        </button>
        <div className="login-tip">
          <div className="login-signup">GranTip 회원이 아니신가요?</div>
          <div className="login-signup-btn" onClick={signupProcess}>
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
