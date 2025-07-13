import { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    if (onChange) onChange(newSelected); // 부모에 선택 여부 전달
  };

  return (
    <div
      className={`toggle-btn ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <button
        className={`toggle ${selected ? "selected" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default ToggleButton;
