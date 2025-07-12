import { useState, useRef, useEffect } from "react";

const AddressSearch = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const wrapRef = useRef(null);

  const openPostcode = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const selected = data.address;
          setAddress(data.address);
          onSelect?.(selected);
          setIsOpen(false); // 닫기
        },
        width: "100%",
        height: "100%",
      }).embed(wrapRef.current);
    }
  }, [isOpen]);

  return (
    <>
      {address && <div className="selected-address">{address}</div>}
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)} // 바깥 클릭 시 닫기
        >
          <div
            className="modal-content-address"
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 무시
          >
            <div ref={wrapRef} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      )}

      <button onClick={openPostcode} className="address-search-btn">
        주소 검색
      </button>
    </>
  );
};

export default AddressSearch;
