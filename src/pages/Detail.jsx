import { parseSemesterRange } from "../utils/semesterParser";
import { useParams } from "react-router-dom";
import dummyData from "../data/Scholarship.json";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./Detail.css";
// ... 상단 import는 그대로

const Detail = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleHeart = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다");
      return;
    }
    setLiked(!liked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };
  const scholarship = dummyData.find((item) => item["번호"] === parseInt(id));
  if (!scholarship) return <p>존재하지 않는 장학금입니다.</p>;

  if (scholarship["학과구분"]?.includes("제한없음")) {
    scholarship["학과구분"] = ["제한없음"];
  }
  if (scholarship["대학구분"]?.includes("제한없음")) {
    scholarship["대학구분"] = ["제한없음"];
  }
  return (
    <div className="detail">
      <div className="title-with-heart">
        <h1>{scholarship["상품명"]}</h1>
        <div className="heart-container">
          <AiFillHeart
            onClick={handleHeart}
            className={`heart-icon ${liked ? "liked" : ""} ${
              animate ? "pop" : ""
            }`}
          />
          <div className="heart-info">좋아요</div>
        </div>
      </div>
      <div className="detail-wrapper">
        <div className="detail-section">
          <div className="detail-name">{scholarship["운영기관명"]}</div>
          <div className="detail-wrapper-info">
            {scholarship["운영기관구분"]}
          </div>
        </div>
        <div className="v-line" />
        <div className="detail-section">
          <div className="detail-name">모집기간</div>
          <div className="detail-wrapper-info">
            {scholarship["모집시작일"] && scholarship["모집종료일"]
              ? `${new Date(
                  scholarship["모집시작일"]
                ).toLocaleDateString()} ~ ${new Date(
                  scholarship["모집종료일"]
                ).toLocaleDateString()}`
              : "모집기간 정보 없음"}
          </div>
        </div>
      </div>

      <div className="info-between-section">
        <div className="detail-info-wrapper">
          <h3>운영 정보</h3>
          <div className="detail-info-card">
            <h4>운영기관</h4>
            <div className="card-info">{scholarship["운영기관구분"]}</div>
          </div>
          <div className="detail-info-card">
            <h4>상품 구분</h4>
            <div className="card-info">{scholarship["상품구분"]}</div>
          </div>
          <div className="detail-info-card">
            <h4>유형 구분</h4>
            <div className="card-info">{scholarship["학자금유형구분"]}</div>
          </div>
        </div>
        <div className="detail-info-wrapper">
          <h3>주요 정보</h3>
          {["학과구분", "대학구분", "학년구분"].map((key) => (
            <div className="detail-info-card" key={key}>
              <h4>{key.replace("구분", " 구분")}</h4>
              <div className="card-info">
                {key === "학년구분" && Array.isArray(scholarship[key])
                  ? parseSemesterRange(scholarship[key])
                  : Array.isArray(scholarship[key]) &&
                    scholarship[key].length > 0
                  ? scholarship[key].join(", ")
                  : "해당사항 없음"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-more-wrapper">
        <h3>선발 인원</h3>
        <ul className="more-info-wrapper">
          <li className="more-info-dot">
            총 선발 인원 :{" "}
            {Array.isArray(scholarship["선발인원 상세내용"])
              ? scholarship["선발인원 상세내용"].join(", ")
              : "정보 없음"}
          </li>
        </ul>

        <h3>기타</h3>
        <ul className="more-info-wrapper">
          <li className="more-info-dot">
            {scholarship["추천필요여부 상세내용"]
              ? "추천서가 필요해요"
              : "추천서가 필요하지 않아요"}
          </li>
          <li className="more-info-dot">
            {scholarship["자격제한 비고"]
              ? "중복 수혜가 불가능해요"
              : "중복 수혜가 가능해요"}
          </li>
        </ul>
      </div>

      <h2>상세내용</h2>
      <div className="detail-more-wrapper-bottom">
        {[
          ["성적기준", "성적기준 상세내용", "성적기준 비고"],
          ["소득기준", "소득기준 상세내용", "소득기준 비고"],
          ["지원내역", "지원내역 상세내용", "지원내역 비고"],
          ["특정자격", "특정자격 상세내용", "특정자격 비고"],
          ["지역거주", "지역거주여부 상세내용", "지역거주여부 비고"],
          ["선발방법", "선발방법 상세내용", "선발방법 비고"],
          ["선발인원", "선발인원 상세내용", "선발인원 비고"],
          ["자격제한", "자격제한 상세내용", "자격제한 비고"],
          ["제출서류", "제출서류 상세내용", "제출서류 비고"],
        ].map(([title, detail, note]) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul className="more-info-wrapper">
              {Array.isArray(scholarship[detail]) &&
              scholarship[detail].length > 0 ? (
                scholarship[detail].map((data, idx) => (
                  <li key={idx} className="more-info-dot">
                    {data}
                  </li>
                ))
              ) : (
                <li className="more-info-dot">정보 없음</li>
              )}
            </ul>
            <div className="note-info">{scholarship[note] || ""}</div>
          </div>
        ))}

        {Array.isArray(scholarship["추천필요여부 상세내용"]) &&
          scholarship["추천필요여부 상세내용"].length > 0 && (
            <>
              <h3>추천서</h3>
              <ul className="more-info-wrapper">
                {scholarship["추천필요여부 상세내용"].map((data, idx) => (
                  <li key={idx} className="more-info-dot">
                    {data}
                  </li>
                ))}
              </ul>
              <div className="note-info">
                {scholarship["추천필요여부 비고"] || ""}
              </div>
            </>
          )}
      </div>

      <div className="detail-more-wrapper">
        <h3>신청 방법</h3>
        <div
          className="more-info-wrapper-url"
          onClick={() =>
            window.open(
              scholarship["홈페이지 주소"] || "#",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <h5>{scholarship["운영기관명"]} 바로가기</h5>
        </div>
      </div>
    </div>
  );
};

export default Detail;
