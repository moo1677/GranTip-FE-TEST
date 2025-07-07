import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFormInput from "../hooks/useFormInput";
import SelectListModal from "../components/common/SelectListModal";
import universityList from "../data/universityList";
import highschoolList from "../data/highschoolList";
const Signup = () => {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const handleNextStep = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(2);
      setIsTransitioning(false);
    }, 300); // CSS transition 시간과 맞춤
  };
  const email = useFormInput({
    initialValue: "",
    validate: (v) => emailRegex.test(v),
    errorMessage: "이메일 형식이 올바르지 않습니다",
  });
  const user = useFormInput("");
  const password = useFormInput({
    initialValue: "",
    validate: (v) => v.length > 7,
    errorMessage: "비밀번호는 8자 이상이어야 합니다",
  });
  const passwordRe = useFormInput({
    initialValue: "",
    validate: (v) => v === password.value,
    errorMessage: "비밀번호가 일치하지 않습니다",
  });

  const [gender, setGender] = useState("");
  const [selectedUniv, setSelectedUniv] = useState("");
  const [selectedHighSchool, setSelectedHighSchool] = useState("");
  const [showUnivModal, setShowUnivModal] = useState(false);
  const [showHighModal, setShowHighModal] = useState(false);

  const phone = useFormInput({
    initialValue: "",
    validate: (v) => /^01[016789]-?\d{3,4}-?\d{4}$/.test(v.replace(/-/g, "")),
    errorMessage: "전화번호 형식이 올바르지 않습니다",
  });

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid =
    email.error === "" &&
    password.error === "" &&
    passwordRe.error === "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== "" &&
    passwordRe.value.trim() !== "" &&
    gender !== "";

  return (
    <div className="page-wrapper">
      <div className="signup-page">
        <h1>
          회원 가입을 위해
          <br /> 정보를 입력해주세요
        </h1>
        <div className={`signup-input ${isTransitioning ? "fade-out" : ""}`}>
          {step === 1 && (
            <>
              <div className="signup-email">* 이메일</div>
              <input
                className="signup-email-input"
                type="text"
                value={email.value}
                onChange={email.onChange}
                onFocus={email.onFocus}
                onBlur={email.onBlur}
              />
              <div
                className={`error-message ${
                  !email.isFocused && email.error ? "show" : ""
                }`}
              >
                {email.error}
              </div>
              <div className="signup-user">* 이름</div>
              <input
                className="signup-user-input"
                type="text"
                value={user.value}
                onChange={user.onChange}
              />
              <div className="signup-pass">* 비밀번호</div>
              <input
                className="signup-pass-input"
                type="password"
                value={password.value}
                onChange={password.onChange}
                onFocus={password.onFocus}
                onBlur={password.onBlur}
              />
              <div
                className={`error-message ${
                  !password.isFocused && password.error ? "show" : ""
                }`}
              >
                {password.error}
              </div>
              <div className="signup-pass">* 비밀번호 확인</div>
              <input
                className="signup-pass-input"
                type="password"
                value={passwordRe.value}
                onChange={passwordRe.onChange}
                onFocus={passwordRe.onFocus}
                onBlur={passwordRe.onBlur}
              />

              <div
                className={`error-message ${
                  !passwordRe.isFocused && passwordRe.error ? "show" : ""
                }`}
              >
                {passwordRe.error}
              </div>
              <div className="signup-radio">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="남성"
                    checked={gender === "남성"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  남성
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="여성"
                    checked={gender === "여성"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  여성
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="기타"
                    checked={gender === "기타"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  기타
                </label>
              </div>

              <button
                className={`signup-next-btn ${isFormValid ? "active" : ""}`}
                disabled={!isFormValid}
                onClick={handleNextStep}
              >
                다음으로
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="signup-current-school">* 재학 중인 대학교</div>
              <div
                className={`signup-current-school-input ${
                  selectedUniv ? "active" : ""
                }`}
                onClick={() => setShowUnivModal(true)}
              >
                {selectedUniv || "대학교를 선택해주세요"}
              </div>
              {showUnivModal && (
                <SelectListModal
                  title="대학교 검색"
                  list={universityList}
                  getLabel={(item) => item}
                  onSelect={(item) => setSelectedUniv(item)}
                  onClose={() => setShowUnivModal(false)}
                />
              )}
              <div className="signup-high-school">* 출신 고등학교</div>
              <div
                className={`signup-high-school-input ${
                  selectedHighSchool ? "active" : ""
                }`}
                onClick={() => setShowHighModal(true)}
              >
                {selectedHighSchool
                  ? selectedHighSchool.name
                  : "출신 고등학교를 선택해주세요"}
              </div>
              {showHighModal && (
                <SelectListModal
                  title="지역 및 학교명 검색"
                  list={highschoolList}
                  getLabel={(item) => `${item.name} (${item.region})`}
                  onSelect={(item) => setSelectedHighSchool(item)}
                  onClose={() => setShowHighModal(false)}
                />
              )}
              <div className="signup-resident-address">* 거주지</div>
              <div className="signup-resident-address-input"></div>
              <div className="signup-address">* 연고지</div>
              <div className="signup-address-input"></div>
              <div className="address-info">
                지자체 기준 장학금 대상 확인을 위해 사용됩니다
              </div>
              <div className="signup-phone">* 전화번호</div>
              <input
                className="signup-phone-input"
                type="tel"
                value={phone.value}
                onChange={phone.onChange}
                onFocus={phone.onFocus}
                onBlur={phone.onBlur}
              ></input>
              <div
                className={`error-message ${
                  !phone.isFocused && phone.error ? "show" : ""
                }`}
              >
                {phone.error}
              </div>
              <button
                className={`signup-btn ${isFormValid ? "active" : ""}`}
                disabled={!isFormValid}
                onClick={() => navigate("/")}
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Signup;
