import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { parseISO } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./ScholarshipCalender.css";
import rmyIcon from "../../assets/rnext.svg";
import lmyIcon from "../../assets/lnext.svg";
const localizer = momentLocalizer(moment); // 또는 date-fns로도 가능

const ScholarshipCalender = ({ subscribedScholarships }) => {
  const events = Array.isArray(subscribedScholarships)
    ? subscribedScholarships.map((s) => ({
        title: s.name,
        start: parseISO(s.startDate),
        end: parseISO(s.endDate),
        allDay: true,
      }))
    : [];
  const CustomToolbar = ({ date, onNavigate }) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const handlePrev = () => onNavigate("PREV");
    const handleNext = () => onNavigate("NEXT");

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
          padding: "0px 50px 0px 50px",
          color: "#0068ff",
        }}
      >
        <div
          onClick={handlePrev}
          style={{
            width: "23px",
            height: "23px",
            fill: "#FFF",
            borderRadius: "50%",
            border: "1px solid #AACDFF",
            display: "flex",
            justifyContent: "center", // 수평 가운데
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={lmyIcon}
            alt="버튼"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "15px",
              cursor: "pointer",
              transform: "translateX(-1px)",
            }}
          />
        </div>

        <span>{`${year}.${month.toString().padStart(2, "0")}`}</span>
        <div
          onClick={handleNext}
          style={{
            width: "23px",
            height: "23px",
            fill: "#FFF",
            borderRadius: "50%",
            border: "1px solid #AACDFF",
            display: "flex",
            justifyContent: "center", // 수평 가운데
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={rmyIcon}
            alt="버튼"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "15px",
              cursor: "pointer",
              transform: "translateX(1px)",
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ width: "100%", height: "100%" }}
      views={["month"]} // month만 표시
      components={{ toolbar: CustomToolbar }}
    />
  );
};
export default ScholarshipCalender;
