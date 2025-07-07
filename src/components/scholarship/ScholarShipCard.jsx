import "./ScholarshipCard.css";
import myIcon from "../../assets/Icon.svg";
const ScholarshipCard = ({ data, className }) => {
  return (
    <div
      className={`card ${className || ""}`}
      // onClick={라우팅처리- s_id를 통한 상세페이지 이동)}
    >
      <div className="card_name">{data.name}</div>
      <div className="card_agency">{data.agency_name}</div>
      {!className?.includes("card--tip") && (
        <div className="card_icon">
          <img src={myIcon} alt="버튼" />
        </div>
      )}
    </div>
  );
};
export default ScholarshipCard;
