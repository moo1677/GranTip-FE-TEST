import { useState } from "react";
import api from "../../utils/axios";
import "./SelectListModal.css";
import { useNavigate } from "react-router-dom";
const DeleteUser = ({ username, onClose }) => {
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleDelete = async () => {
    try {
      const res = await api.delete("/user");
      alert("정상적으로 회원탈퇴 되었습니다.");
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleBtn = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="delete">
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>회원탈퇴</h3>
          <h2>장학금 추천 기록 및 개인정보는 모두 삭제됩니다.</h2>
          <input
            className="email-text-input"
            type="text"
            value={inputValue}
            onChange={handleBtn}
            placeholder="사용자명을 입력하세요"
          ></input>
          <button
            className={`email-verify-btn ${
              inputValue === username ? "active" : ""
            }`}
            onClick={handleDelete}
          >
            회원탈퇴
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteUser;
