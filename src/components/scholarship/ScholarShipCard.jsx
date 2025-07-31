import "./ScholarShipCard.css";
import myIcon from "../../assets/Icon.svg";
import { useNavigate } from "react-router-dom";
const ScholarshipCard = ({ data, className }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${data["번호"]}`);
  };
  return (
    <div className={`card ${className || ""}`} onClick={handleClick}>
      <div className="card_name">{data["상품명"]}</div>
      <div className="card_agency">{data["운영기관명"]}</div>
      {!className?.includes("card--tip") && (
        <div className="card_icon">
          <img src={myIcon} alt="버튼" />
        </div>
      )}
    </div>
  );
};
export default ScholarshipCard;
