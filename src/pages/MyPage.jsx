import { useEffect, useState } from "react";
import ScholarshipCalendar from "../components/layout/ScholarshipCalendar";
import "./MyPage.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../api/config";
import axios from "axios";
const MyPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/user/mypage`);
        if (res.data.success) {
          setUserInfo(res.data.result);
          console.log("정보 받음");
          console.log(res.data.result);
        } else {
          alert("유저 정보를 찾을 수 없습니다.");
          console.log("실패");
          console.log(res);
        }
      } catch (error) {
        console.log("서버오류");
        alert("서버 오류.");
        navigate("/");
      }
    };
    fetchUserInfo();
  }, []);
  if (!userInfo) return <div>로딩 중...</div>;
  return (
    <div className="my-page">
      <div className="user-header">
        <h1>{userInfo.username} 님의 마이페이지</h1>
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
          <div className="user-info-name">{userInfo.username}</div>
          <div className="user-info-school">{userInfo.userUniversity}</div>
          {!userInfo.university_year ? (
            <div className="user-info-univ">추가 정보를 입력해주세요</div>
          ) : (
            <div className="user-info-univ">{userInfo.university_year}</div>
          )}
        </div>
        <div className="v-line"></div>
        <div className="user-info-section">
          <div className="scholar-mark">좋아요한 장학금</div>
          <div className="scholar-mark-num">{userInfo.scholar_mark}개</div>
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
          <ScholarshipCalendar />
        </div>
      </div>
    </div>
  );
};
export default MyPage;
