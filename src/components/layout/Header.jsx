import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <h1>GranTip</h1>
        <div className="categoryFilter">
          <div>지역연고</div>
          <div>성적우수</div>
          <div>소득분위</div>
          <div>특수계층</div>
          <div>기타</div>
        </div>
        <div className="user-menu">
          <div onClick={() => navigate("/login")}>로그인</div>
          <div>/</div>
          <div onClick={() => navigate("/signup")}>회원가입</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
