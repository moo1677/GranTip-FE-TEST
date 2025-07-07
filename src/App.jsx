import "./App.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];
  const hideHeader = hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
