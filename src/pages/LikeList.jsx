import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/config";
import { useNavigate } from "react-router-dom";
import "./LikeList.css";
import ScholarshipTip from "../components/scholarship/ScholarShipTip";

const LikeList = ({ userName }) => {
  const [likeScholarships, setLikeScholarships] = useState([]);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const fetchLikeList = async () => {
  //       try {
  //         const res = await axios.get(`${BASE_URL}/api/favorites`);
  //         if (res.data.success) {
  //           setLikeScholarships(res.data.result.content);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //         alert("서버 에러 발생");
  //       }
  //     };
  //     fetchLikeList();
  //   }, []);
  useEffect(() => {
    setLikeScholarships([
      {
        id: 1,
        productName: "세종시 우수인재 장학금",
        providerName: "세종시청 인재육성재단",
        productType: "장학금",
        scholarshipCategory: "지역연고",
        applicationStartDate: "2025-08-10",
        applicationEndDate: "2025-08-25",
      },
      {
        id: 2,
        productName: "성적우수 장학금 A형",
        providerName: "국가장학재단",
        productType: "장학금",
        scholarshipCategory: "성적우수",
        applicationStartDate: "2025-09-01",
        applicationEndDate: "2025-09-15",
      },
      {
        id: 3,
        productName: "특기자 체육 장학금",
        providerName: "대한체육회",
        productType: "장학금",
        scholarshipCategory: "특기자",
        applicationStartDate: "2025-07-20",
        applicationEndDate: "2025-08-05",
      },
      {
        id: 4,
        productName: "저소득층 미래인재 지원금",
        providerName: "한국사회복지재단",
        productType: "장학금",
        scholarshipCategory: "소득분위",
        applicationStartDate: "2025-08-01",
        applicationEndDate: "2025-08-30",
      },
      {
        id: 5,
        productName: "AI·SW 인재 육성 장학금",
        providerName: "정보통신산업진흥원",
        productType: "장학금",
        scholarshipCategory: "기타",
        applicationStartDate: "2025-08-12",
        applicationEndDate: "2025-09-10",
      },
    ]);
  }, []);

  return (
    <div className="likeList">
      <div className="search-wrapper">
        <h1>신수철님이 좋아요한 장학금</h1>
        <h2 className="go-back" onClick={() => navigate("/mypage")}>
          뒤로가기
        </h2>
        <div className="search-list">
          {likeScholarships.length === 0 && <div>좋아요한 장학금이 없어요</div>}
          {likeScholarships.map((s) => (
            <div
              className="search-card"
              key={s.id}
              onClick={() => navigate(`/detail/${s.id}`)}
            >
              <h3>{s.productName}</h3>
              <div className="card-info-wrapper">
                <div className="info-category">
                  {s.providerName} / {s.productType} / {s.scholarshipCategory}
                </div>
                <div className="info-date">
                  모집기한 : {s.applicationStartDate} ~ {s.applicationEndDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScholarshipTip />
    </div>
  );
};
export default LikeList;
