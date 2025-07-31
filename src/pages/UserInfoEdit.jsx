import ToggleButton from "../hooks/ToggleButton";
import highSchools from "../data/highSchools_labeled.js";
import universityList from "../data/universityList.js";
import gradeList from "../data/gradeList.js";
import SelectListModal from "../components/Modal/SelectListModal.jsx";
import RegionSelectModal from "../components/Modal/RegionSelectModal.jsx";
import "./UserInfoEdit.css";
import { useState } from "react";
const UserInfoEdit = () => {
  /*대학교 팝업 관련 */
  const [showUnivModal, setShowUnivModal] = useState(false);
  const [current_school, setSelectedUniv] = useState("");
  /*고등학교 팝업 관련 */
  const [showHighModal, setShowHighModal] = useState(false);
  const [high_school, setSelectedHighSchool] = useState("");
  /* 학년 팝업 관련 */
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [university_year, setSelectedUnivYear] = useState("");
  /*거주지*/
  const [showResidentModal, setShowResidentModal] = useState(false);
  const [resident_address, setResidentAddress] = useState("");
  /*연고지*/
  const [address, setAddress] = useState("");
  const [showAddressModal, setShowAddressModal] = useState("");
  /* 학력 정보 */
  const [highSchoolGrade, setHighSchoolGrade] = useState(""); // 고등학교 내신 평균 등급
  const [csatGrade, setCsatGrade] = useState(""); // 수능 등급
  /*성적 관련*/
  const [recentGrade, setRecentGrade] = useState({
    credit: "", // 이수 학점
    average: "", // 평균 학점
    scale: 4.5, // 성적 기준 (4.5 or 4.3)
  });
  const [previousGrade, setPreviousGrade] = useState({
    credit: "",
    average: "",
    scale: 4.5,
  });
  /*특수계층*/
  const [isDisabled, setIsDisabled] = useState(false); // 장애인
  const [isMultiChild, setIsMultiChild] = useState(false); // 다자녀
  const [isVeteran, setIsVeteran] = useState(false); // 국가유공자 또는 보훈자
  const [isSingleParent, setIsSingleParent] = useState(false); // 한부모
  const [isOrphan, setIsOrphan] = useState(false); // 소년소녀 가장
  const [isLowIncome, setIsLowIncome] = useState(false); // 저소득층
  const [isMulticultural, setIsMulticultural] = useState(false); // 다문화
  const [isNorthKoreanDefector, setIsNorthKoreanDefector] = useState(false); // 북한이탈주민
  /*특기자*/
  const [isTalented, setIsTalented] = useState(false); // 특기자 활동 경력
  /*소득정보*/
  const [scholarshipSupportLevel, setScholarshipSupportLevel] = useState(""); // 한국장학재단 학자금 지원구간 (1~9)
  const [medianIncomeRatio, setMedianIncomeRatio] = useState(""); // 기준 중위소득 비율 (예: "130")
  const [incomePercentile, setIncomePercentile] = useState(""); // 소득 분위 (예: "5")

  return (
    <div className="user-info-edit-container">
      <div className="edit-header">
        <h1 className="edit-title">나의 정보 수정</h1>
        <div className="edit-subtext">최신 정보로 업데이트 해주세요</div>
      </div>

      <div className="info-section">
        <div className="label-text">• 이메일</div>
        <div className="static-field">lgm04@naver.com</div>

        <div className="label-text">• 전화번호</div>
        <div className="static-field"></div>

        <div className="label-text">• 소속 학교</div>
        <div className="select-wrapper">
          <div className="select-value-display"></div>
          <button className="select-btn" onClick={() => setShowUnivModal(true)}>
            선택
          </button>
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
        <div className="label-text">• 출신 학교</div>
        <div className="select-wrapper">
          <div className="select-value-display"></div>
          <button className="select-btn" onClick={() => setShowHighModal(true)}>
            선택
          </button>
        </div>
        {showHighModal && (
          <SelectListModal
            title="학교명 검색"
            list={highSchools}
            getLabel={(item) => item}
            onSelect={(item) => setSelectedHighSchool(item)}
            onClose={() => setShowHighModal(false)}
          />
        )}
        <div className="label-text">• 학년</div>
        <div className="select-wrapper">
          <div className="select-value-display"></div>
          <button
            className="select-btn"
            onClick={() => setShowGradeModal(true)}
          >
            선택
          </button>
        </div>
        {showGradeModal && (
          <SelectListModal
            title="학년 선택"
            list={gradeList}
            getLabel={(item) => item}
            onSelect={(item) => setSelectedUnivYear(item)}
            onClose={() => setShowGradeModal(false)}
          />
        )}
        <div className="label-text">• 거주지</div>
        <div className="select-wrapper">
          <div className="select-value-display"></div>
          <button
            className="select-btn"
            onClick={() => setShowResidentModal(true)}
          >
            선택
          </button>
        </div>
        {showResidentModal && (
          <RegionSelectModal
            onSelect={(item) => setResidentAddress(item)}
            onClose={() => setShowResidentModal(false)}
          />
        )}
        <div className="label-text">• 연고지</div>
        <div className="select-wrapper">
          <div className="select-value-display"></div>
          <button
            className="select-btn"
            onClick={() => setShowAddressModal(true)}
          >
            선택
          </button>
        </div>
        {showAddressModal && (
          <RegionSelectModal
            onSelect={(item) => setAddress(item)}
            onClose={() => setShowAddressModal(false)}
          />
        )}
      </div>

      <div className="toggle-section">
        <div className="label-text">• 특수 계층</div>
        <div className="select-list">
          <div className="toggle-row">
            <div className="toggle-label">장애인에 해당돼요</div>
            <ToggleButton selected={isDisabled} onChange={setIsDisabled} />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">다자녀 가정에 해당돼요</div>
            <ToggleButton selected={isMultiChild} onChange={setIsMultiChild} />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">
              국가유공자 또는 보훈자에 해당돼요
            </div>
            <ToggleButton selected={isVeteran} onChange={setIsVeteran} />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">한부모 가정에 해당돼요</div>
            <ToggleButton
              selected={isSingleParent}
              onChange={setIsSingleParent}
            />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">소년소녀 가장에 해당돼요</div>
            <ToggleButton selected={isOrphan} onChange={setIsOrphan} />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">저소득층에 해당돼요</div>
            <ToggleButton selected={isLowIncome} onChange={setIsLowIncome} />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">다문화 가정 해당돼요</div>
            <ToggleButton
              selected={isMulticultural}
              onChange={setIsMulticultural}
            />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">북한이탈주민에 해당돼요</div>
            <ToggleButton
              selected={isNorthKoreanDefector}
              onChange={setIsNorthKoreanDefector}
            />
          </div>
        </div>

        <div className="label-text">• 특기자</div>
        <div className="select-list-none">
          <div className="toggle-row">
            <div className="toggle-label">특기자 활동 경력이 있어요</div>
            <ToggleButton selected={isTalented} onChange={setIsTalented} />
          </div>
        </div>
        <div className="select-list-info">
          시/도 또는 전국 단위에서 수상한 경력이 있거나, 공식 인증된 특기 활동
          이력이 있는 경우에 해당돼요
        </div>
      </div>

      <div className="grade-section">
        <div className="label-text">• 학력 정보</div>
        <div className="select-list">
          <div className="toggle-row">
            <div className="toggle-label">고등학교 내신 평균 등급</div>
            <input className="grade-input-field" />
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">수능 등급</div>
            <input className="grade-input-field" />
          </div>
        </div>
        <div className="label-text">• 기이수 학기 성적 (전체 학기)</div>
        <div className="select-list">
          <div className="toggle-row">
            <div className="toggle-label">평균 학점</div>
            <input
              className="grade-input-field"
              type="number"
              min="0"
              max="4.5"
              step="0.01"
              placeholder="예: 3.75"
            />
          </div>
        </div>
        <div className="label-text">• 직전 학기 성적</div>
        <div className="select-list">
          <div className="toggle-row">
            <div className="toggle-label">이수 학점</div>
            <input
              className="grade-input-field"
              type="number"
              min="0"
              max="30"
              placeholder="예: 18"
              value={recentGrade.credit}
              onChange={(e) =>
                setRecentGrade((prev) => ({ ...prev, credit: e.target.value }))
              }
            />
          </div>
          <div className="section" />
          <div className="toggle-row">
            <div className="toggle-label">평균 학점</div>
            <input
              className="grade-input-field"
              type="number"
              min="0"
              max="4.5"
              step="0.01"
              placeholder="예: 3.75"
              value={recentGrade.average}
              onChange={(e) =>
                setRecentGrade((prev) => ({ ...prev, average: e.target.value }))
              }
            />
          </div>
          <div className="section" />
          <div className="toggle-row">
            <div className="toggle-label">성적 기준</div>
            <select
              className="dropdown-select"
              value={recentGrade.scale}
              onChange={(e) =>
                setRecentGrade((prev) => ({
                  ...prev,
                  scale: parseFloat(e.target.value),
                }))
              }
            >
              <option value="4.5">4.5</option>
              <option value="4.3">4.3</option>
            </select>
          </div>
        </div>
        <div className="label-text">• 2학기 전 성적 (직전전 학기)</div>
        <div className="select-list">
          <div className="toggle-row">
            <div className="toggle-label">이수 학점</div>
            <input
              className="grade-input-field"
              type="number"
              min="0"
              max="30"
              placeholder="예: 18"
              value={previousGrade.credit}
              onChange={(e) =>
                setPreviousGrade((prev) => ({
                  ...prev,
                  credit: e.target.value,
                }))
              }
            />
          </div>
          <div className="section" />
          <div className="toggle-row">
            <div className="toggle-label">평균 학점</div>
            <input
              className="grade-input-field"
              type="number"
              min="0"
              max="4.5"
              step="0.01"
              placeholder="예: 3.75"
              value={previousGrade.average}
              onChange={(e) =>
                setPreviousGrade((prev) => ({
                  ...prev,
                  average: e.target.value,
                }))
              }
            />
          </div>
          <div className="section" />
          <div className="toggle-row">
            <div className="toggle-label">성적 기준</div>
            <select
              className="dropdown-select"
              value={previousGrade.scale}
              onChange={(e) =>
                setPreviousGrade((prev) => ({
                  ...prev,
                  scale: parseFloat(e.target.value),
                }))
              }
            >
              <option value="4.5">4.5</option>
              <option value="4.3">4.3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="income-section">
        <div className="label-text">• 소득 정보</div>
        <div className="select-list">
          <div className="toggle-row">
            <div className="toggle-label">한국장학재단 학자금 지원구간</div>
            <select
              className="dropdown-select"
              name="scholarship_support_interval"
              value={scholarshipSupportLevel}
              onChange={(e) => setScholarshipSupportLevel(e.target.value)}
            >
              <option value="">선택</option>
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}구간
                </option>
              ))}
            </select>
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">기준 중위소득 비율</div>
            <select
              className="dropdown-select"
              name="median_income_ratio"
              value={medianIncomeRatio}
              onChange={(e) => setMedianIncomeRatio(e.target.value)}
            >
              <option value="">선택</option>
              {["50", "70", "100", "130", "150", "180", "200"].map((val) => (
                <option key={val} value={val}>
                  {val}%
                </option>
              ))}
            </select>
          </div>
          <div className="section" />

          <div className="toggle-row">
            <div className="toggle-label">소득 분위</div>
            <select
              className="dropdown-select"
              name="income_percentile_band"
              value={incomePercentile}
              onChange={(e) => setIncomePercentile(e.target.value)}
            >
              <option value="">선택</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}분위
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="user-info-footer">
        <button className="cancel-btn">취소</button>
        <button className="check-btn">확인</button>
      </div>

      <div className="password-edit">비밀번호 수정</div>
    </div>
  );
};

export default UserInfoEdit;
