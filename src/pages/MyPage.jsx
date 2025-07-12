import "./MyPage.css";
const MyPage = () => {
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
        <div className="user-info-editing">나의정보편집</div>
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
        <div class="v-line"></div>
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
        <h3>장학 캘린더</h3>
        <div className="calender-section">
          <div className="calender-info">캘린더입니다.</div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
