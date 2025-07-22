import "./ScholarShipList.css";
import dummyData from "../../data/Scholarship";
import Card from "./ScholarShipCard";
const ScholarShipList = () => {
  const gradeList = dummyData
    .filter((r) => r["학자금유형구분"] === "성적우수")
    .slice(0, 5);
  const localList = dummyData
    .filter((r) => r["학자금유형구분"] == "지역연고")
    .slice(0, 5);
  return (
    <div className="list">
      <div className="list-left">
        <h1>#성적우수</h1>
        {gradeList.map((data) => (
          <Card key={data["번호"]} data={data} />
        ))}
        <div className="list-more">더보기</div>
      </div>
      <div className="list-right">
        <h1>#지역연고</h1>
        {localList.map((data) => (
          <Card key={data["번호"]} data={data} />
        ))}
        <div className="list-more">더보기</div>
      </div>
    </div>
  );
};
export default ScholarShipList;
