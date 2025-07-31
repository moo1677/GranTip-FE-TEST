import "./ScholarShipTip.css";
import ScholarshipCard from "./ScholarShipCard";
import useRandomScholarships from "../../utils/useRandomScholarships";
const ScholarshipTip = () => {
  const {
    randomList: allList,
    loading: allLoading,
    error: allError,
  } = useRandomScholarships(null, 5);
  if (allLoading) return <p>불러오는 중…</p>;
  if (allError) return <p>추천 장학금 조회 중 오류 발생!</p>;

  return (
    <div className="tip">
      <h1>🎓GranTip이 추천하는 맞춤 장학금</h1>
      <div className="tip-scroll">
        {allList.map((data) => (
          <ScholarshipCard key={data.id} data={data} className={"card--tip"} />
        ))}
      </div>
    </div>
  );
};
export default ScholarshipTip;
