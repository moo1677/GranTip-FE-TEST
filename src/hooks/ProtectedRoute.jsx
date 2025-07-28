import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ isLoggedIn, children }) => {
  useEffect(() => {
    console.log("ProtectedRoute mount:", isLoggedIn);
    if (!isLoggedIn) {
      alert("로그인이 필요합니다");
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
