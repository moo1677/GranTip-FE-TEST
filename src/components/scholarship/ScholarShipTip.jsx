import "./ScholarShipTip.css";
import ScholarshipCard from "./ScholarShipCard";
import dummyData from "../../data/Scholarship";
const ScholarshipTip = () => {
  return (
    <div className="tip">
      <h1>🎓GranTip이 추천하는 맞춤 장학금</h1>
      <div className="tip-scroll">
        {dummyData.map((data) => (
          <ScholarshipCard
            key={data["번호"]}
            data={data}
            className={"card--tip"}
          />
        ))}
      </div>
    </div>
  );
};
export default ScholarshipTip;
