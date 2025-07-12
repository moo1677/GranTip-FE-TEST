import { useState } from "react";
import "./RegionSelectModal.css";
import regionData from "../../data/kr_regions.json";

const RegionSelectModal = ({ onSelect, onClose }) => {
  const provinces = Object.keys(regionData);
  const [selectedProvince, setSelectedProvince] = useState("");

  const handleSelectDistrict = (district) => {
    const full = `${selectedProvince} ${district}`;
    onSelect?.(full); // 전체 주소 문자열로 전달
    onClose?.();
  };

  return (
    <div className="region-modal-overlay" onClick={onClose}>
      <div
        className="region-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="region-modal-header">
          <h3>지역 선택</h3>
          {selectedProvince && (
            <button
              className="region-back-btn"
              onClick={() => setSelectedProvince("")}
            >
              뒤로
            </button>
          )}
        </div>
        {!selectedProvince ? (
          <ul className="region-list">
            {provinces.map((prov) => (
              <li
                key={prov}
                className="region-item"
                onClick={() => setSelectedProvince(prov)}
              >
                {prov}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <ul className="region-list">
              {regionData[selectedProvince].map((district) => (
                <li
                  key={district}
                  className="region-item"
                  onClick={() => handleSelectDistrict(district)}
                >
                  {district}
                </li>
              ))}
            </ul>
          </>
        )}
        <button className="region-close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default RegionSelectModal;
