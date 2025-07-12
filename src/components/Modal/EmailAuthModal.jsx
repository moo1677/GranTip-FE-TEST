import "./EmailAuthModal.css";
import { useState, useEffect } from "react";
import axios from "axios";
const EmailAuthModal = ({ email, onVerified, onClose }) => {
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [resendTimer, setResendTimer] = useState(0);
  useEffect(() => {
    if (!canResend && resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (resendTimer === 0) {
      setCanResend(true);
    }
  }, [resendTimer, canResend]);

  const handleSend = async () => {
    try {
      await axios.post("/api/auth/email/send", { email });
      alert("인증 코드가 전송되었습니다.");
      setSent(true);
      setCanResend(false);
      setResendTimer(30);
    } catch {
      alert("전송 실패");
    }
  };
  const handleVerify = async () => {
    try {
      const res = await axios.post("/api/auth/email/verity", { email, code });
      if (res.data.verified) {
        alert("인증완료");
        onVerified();
        onClose();
      } else {
        alert("인증 실패");
      }
    } catch {
      alert("서버 오류");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>이메일 인증</h3>

        <p>{email} 로 인증 메일을 전송합니다.</p>
        {!sent && (
          <button className="send-btn" onClick={handleSend}>
            인증 메일 전송
          </button>
        )}

        {sent && (
          <>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="인증 코드 입력"
            />
            <button onClick={handleVerify}>인증 확인</button>
            <div className="resend-wrapper">
              <button onClick={handleSend} disabled={!canResend}>
                {canResend
                  ? "인증 코드 다시 보내기"
                  : `다시 보내기 (${resendTimer}s)`}
              </button>
            </div>
          </>
        )}
        <button className="close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default EmailAuthModal;
