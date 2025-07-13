import { useRef, useEffect } from "react";

const AddressSearch = ({ onSelect, onClose }) => {
  const wrapRef = useRef(null);
  useEffect(() => {
    const postcode = new window.daum.Postcode({
      oncomplete: function (data) {
        const selected = data.address;
        onSelect?.(selected);
        onClose?.();
      },
      width: "100%",
      height: "100%",
    });
    postcode.embed(wrapRef.current);
    return () => {
      if (wrapRef.current) {
        wrapRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-address"
        onClick={(e) => e.stopPropagation()}
      >
        <div ref={wrapRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default AddressSearch;
