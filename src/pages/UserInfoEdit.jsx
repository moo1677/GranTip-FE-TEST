import ToggleButton from "../hooks/ToggleButton";
import "./UserInfoEdit.css";
import { useState } from "react";
const UserInfoEdit = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <div className="user-info-edit">
      <div className="edit-header">
        <h1>나의 정보 수정</h1>
        <div className="edit-info">최신 정보로 업데이트 해주세요</div>
      </div>

      <div className="info-input">
        <div className="info-name">• 이메일</div>
        <div className="picks-info">lgm04@naver.com</div>
        <div className="info-name"> • 전화번호</div>
        <div className="picks-info"></div>
        <div className="info-name">• 소속 학교</div>
        <div className="none-picks">
          <div className="none-picks-info"></div>
          <button className="select-info-btn">선택</button>
        </div>
        <div className="info-name">• 학년</div>
        <div className="none-picks">
          <div className="none-picks-info"></div>
          <button className="select-info-btn">선택</button>
        </div>
        <div className="info-name">• 거주지</div>
        <div className="none-picks">
          <div className="none-picks-info"></div>
          <button className="select-info-btn">선택</button>
        </div>
        <div className="info-name">• 연고지</div>
        <div className="none-picks">
          <div className="none-picks-info"></div>
          <button className="select-info-btn">선택</button>
        </div>
      </div>
      <div className="info-select">
        <div className="info-name">• 특수 계층</div>
        <div className="select-list">
          <div className="list-section">
            <div className="list-name">장애인에 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">다자녀 가정에 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">국가유공자 또는 보훈자에 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">한부모 가정에 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">소년소녀 가장에 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">저소득층에 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">다문화 가정 해당돼요</div>
            <ToggleButton />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">북한이탈주민에 해당돼요</div>
            <ToggleButton />
          </div>
        </div>
        <div className="info-name">• 특기자</div>
        <div className="select-list-none">
          <div className="list-section">
            <div className="list-name">특기자 활동 경력이 있어요</div>
            <ToggleButton />
          </div>
        </div>
        <div className="select-list-info">
          시/도 또는 전국 단위에서 수상한 경력이 있거나, 공식 인증된 특기 활동
          이력이 있는 경우에 해당돼요
        </div>
      </div>
      <div className="info-grade">
        <div className="info-name">• 학력 정보</div>
        <div className="select-list">
          <div className="list-section">
            <div className="list-name">고등학교 내신 평균 등급</div>
            <input className="grade-input" />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">수능 등급</div>
            <input className="grade-input" />
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">대학교 평균 학점</div>
            <input className="grade-input" />
          </div>
        </div>
      </div>
      <div className="info-earning">
        <div className="info-name">• 소득 정보</div>
        <div className="select-list">
          <div className="list-section">
            <div className="list-name">한국장학재단 학자금 지원구간</div>
            <select
              className="select-value"
              name="scholarship_support_interval"
            >
              <option value="">선택</option>
              <option value="1">1구간</option>
              <option value="2">2구간</option>
              <option value="3">3구간</option>
              <option value="4">4구간</option>
              <option value="5">5구간</option>
              <option value="6">6구간</option>
              <option value="7">7구간</option>
              <option value="8">8구간</option>
              <option value="9">9구간</option>
            </select>
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">기준 중위소득 비율</div>
            <select className="select-value" name="median_income_ratio">
              <option value="">선택</option>
              <option value="50">50%</option>
              <option value="70">70%</option>
              <option value="100">100%</option>
              <option value="130">130%</option>
              <option value="150">150%</option>
              <option value="180">180%</option>
              <option value="200">200%</option>
            </select>
          </div>
          <div className="section" />
          <div className="list-section">
            <div className="list-name">소득 분위</div>
            <select className="select-value" name="income_percentile_band">
              <option value="">선택</option>
              <option value="1">1분위</option>
              <option value="2">2분위</option>
              <option value="3">3분위</option>
              <option value="4">4분위</option>
              <option value="5">5분위</option>
              <option value="6">6분위</option>
              <option value="7">7분위</option>
              <option value="8">8분위</option>
            </select>
          </div>
        </div>
      </div>
      <div className="user-info-close-btn">
        <button className="cancel-btn">취소</button>
        <button className="check-btn">확인</button>
      </div>
      <div className="password-edit">비밀번호 수정</div>
    </div>
  );
};
export default UserInfoEdit;
