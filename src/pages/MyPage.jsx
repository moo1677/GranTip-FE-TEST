import ScholarshipCalender from "../components/layout/ScholarshipCalender";
import "./MyPage.css";
import { useNavigate } from "react-router-dom";
import data from "../data/Scholarship.json";
const MyPage = () => {
  const navigate = useNavigate();
  let user = {
    username: "신수철",
    current_school: "세종대학교",
    university_year: "",
    scholar_mark: 3,
  };
  return (
    <div className="my-page">
      <div className="user-header">
        <h1>{user.username} 님의 마이페이지</h1>
        <div
          className="user-info-editing"
          onClick={() => {
            navigate("/edit");
          }}
        >
          나의정보편집
        </div>
      </div>
      <div className="user-info">
        <div className="user-info-section">
          <div className="user-info-name">{user.username}</div>
          <div className="user-info-school">{user.current_school}</div>
          {!user.university_year ? (
            <div className="user-info-univ">추가 정보를 입력해주세요</div>
          ) : (
            <div className="user-info-univ">{user.university_year}</div>
          )}
        </div>
        <div className="v-line"></div>
        <div className="user-info-section">
          <div className="scholar-mark">즐겨찾기한 장학금</div>
          <div className="scholar-mark-num">{user.scholar_mark}개</div>
        </div>
      </div>
      <div className="scholar-info">
        <h3>마감 임박 장학금</h3>
        <div className="scholar-info-list">
          <div className="scholar-info-card">
            <div className="scholar-info-name">음성군 지역인재 우수 장학금</div>
            <div className="scholar-info-date">마감일 - 2025년 13월 40일</div>
          </div>
          <div className="scholar-info-card">
            <div className="scholar-info-name">세종대학교 성적향상 장학금</div>
            <div className="scholar-info-date">마감일 - 2025년 13월 41일</div>
          </div>
        </div>
      </div>
      <div className="scholar-calendar">
        <div className="calender-section">
          <ScholarshipCalender subscribedScholarships={data} />
        </div>
      </div>
    </div>
  );
};
export default MyPage;
