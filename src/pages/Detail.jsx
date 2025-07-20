import { useParams } from "react-router-dom";
import dummyData from "../data/Scholarship.json";
import "./Detail.css";
const Detail = () => {
  const { id } = useParams();
  const scholarship = dummyData.find((item) => item.id === parseInt(id));
  if (!scholarship) return <p>존재하지 않는 장학금입니다.</p>;
  return (
    <div className="detail">
      <h1>{scholarship.product_name}</h1>
      <div className="detail-wrapper">
        <div className="detail-section">
          <div className="detail-name">{scholarship.provider_name}</div>
          <div className="detail-wrapper-info">{scholarship.provider_type}</div>
        </div>
        <div className="v-line" />
        <div className="detail-section">
          <div className="detail-name">모집기간</div>
          <div className="detail-wrapper-info">
            {new Date(scholarship.application_start_date).toLocaleDateString()}{" "}
            ~ {new Date(scholarship.application_end_date).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="info-between-section">
        <div className="detail-info-wrapper">
          <h3>운영 정보</h3>
          <div className="detail-info-card">
            <h4>운영기관</h4>
            <div className="card-info">{scholarship.provider_type}</div>
          </div>
          <div className="detail-info-card">
            <h4>상품 구분</h4>
            <div className="card-info">{scholarship.product_type}</div>
          </div>
          <div className="detail-info-card">
            <h4>유형 구분</h4>
            <div className="card-info">{scholarship.scholarship_category}</div>
          </div>
        </div>
        <div className="detail-info-wrapper">
          <h3>주요 정보</h3>
          <div className="detail-info-card">
            <h4>학과 구분</h4>
            <div className="card-info">
              {scholarship.university_category.join(", ")}
            </div>
          </div>
          <div className="detail-info-card">
            <h4>대학 구분</h4>
            <div className="card-info">
              {scholarship.grade_category.join(", ")}
            </div>
          </div>
          <div className="detail-info-card">
            <h4>학년 조건</h4>
            <div className="card-info">
              {scholarship.department_category.join(", ")}
            </div>
          </div>
        </div>
      </div>
      <div className="detail-more-wrapper">
        <h3>선발 인원</h3>
        <ul className="more-info-wrapper">
          <li className="more-info-dot">
            총 선발 인원 : {scholarship.num_of_recipients_total}
          </li>
          <li className="more-info-dot">
            구분 인원 :{" "}
            {Object.entries(scholarship.recipients_by_category)
              .map(([major, count]) => `${major}: ${count}명`)
              .join(", ")}
          </li>
        </ul>
        <h3>기타</h3>
        <ul className="more-info-wrapper">
          <li className="more-info-dot">
            {scholarship.is_recommendation_required
              ? "추천서가 필요해요"
              : "추천서가 필요하지 않아요"}
          </li>
          <li className="more-info-dot">
            {scholarship.is_duplicate_support_restricted
              ? "중복 수혜가 불가능해요"
              : "중복 수혜가 가능해요"}
          </li>
        </ul>
      </div>
      <h2>상세내용</h2>
      <div className="detail-more-wrapper-bottom">
        <h3>성적기준</h3>
        <div className="more-info">{scholarship.grade_criteria_detail}</div>

        <div className="note-info">{scholarship.grade_criteria_notes}</div>
        <h3>소득기준</h3>
        <div className="more-info">{scholarship.income_criteria_detail}</div>
        <div className="note-info">{scholarship.income_criteria_notes}</div>

        <h3>지원내역</h3>
        <div className="more-info">{scholarship.support_detail}</div>
        <div className="note-info">{scholarship.support_notes}</div>
        <h3>특정자격</h3>
        <ul className="more-info-wrapper">
          {scholarship.specific_qualification_detail.map((data, idx) => (
            <li key={idx} className="more-info-dot">
              {data}
            </li>
          ))}
        </ul>
        <div className="note-info">
          {scholarship.specific_qualification_notes}
        </div>
        <h3>지역거주</h3>
        <ul className="more-info-wrapper">
          {scholarship.region_residence_detail.map((data, idx) => (
            <li key={idx} className="more-info-dot">
              {data}
            </li>
          ))}
        </ul>

        <div className="note-info">{scholarship.region_residence_notes}</div>
        <h3>선발방법</h3>
        <ul className="more-info-wrapper">
          {scholarship.selection_method_detail.map((data, idx) => (
            <li key={idx} className="more-info-dot">
              {data}
            </li>
          ))}
        </ul>
        <div className="note-info">{scholarship.selection_method_notes}</div>
        <h3>선발인원</h3>
        <ul className="more-info-wrapper">
          {scholarship.selection_personnel_detail.map((data, idx) => (
            <li key={idx} className="more-info-dot">
              {data}
            </li>
          ))}
        </ul>

        <div className="note-info">{scholarship.selection_personnel_notes}</div>
        <h3>자격제한</h3>
        <ul className="more-info-wrapper">
          {scholarship.qualification_restriction_detail.map((data, idx) => (
            <li key={idx} className="more-info-dot">
              {data}
            </li>
          ))}
        </ul>
        <div className="note-info">
          {scholarship.qualification_restriction_notes}
        </div>
        <h3>제출서류</h3>
        <ul className="more-info-wrapper">
          {scholarship.required_documents_detail.map((data, idx) => (
            <li key={idx} className="more-info-dot">
              {data}
            </li>
          ))}
        </ul>

        <div className="note-info">{scholarship.required_documents_notes}</div>
        {!scholarship.is_recommendation_required && (
          <>
            <h3>추천서</h3>
            <ul className="more-info-wrapper">
              {scholarship.recommendation_needed_detail.map((data, idx) => (
                <li key={idx} className="more-info-dot">
                  {data}
                </li>
              ))}
            </ul>
            <div className="note-info">
              {scholarship.recommendation_needed_notes}
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
              scholarship.homepage_url,
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <h5>{scholarship.provider_name} 바로가기</h5>
        </div>
      </div>
    </div>
  );
};

export default Detail;
