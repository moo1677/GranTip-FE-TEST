import "./App.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageTransitionWrapper from "./components/layout/PageTransitionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import MyPage from "./pages/MyPage";
import UserInfoEdit from "./pages/UserInfoEdit";

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];
  const hideHeader = hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      <AnimatePresence>
        {!hideHeader && (
          <PageTransitionWrapper>
            <Header />
          </PageTransitionWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <PageTransitionWrapper>
                <Login />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/signup"
            element={
              <PageTransitionWrapper>
                <Signup />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/mypage"
            element={
              <PageTransitionWrapper>
                <MyPage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/edit"
            element={
              <PageTransitionWrapper>
                <UserInfoEdit />
              </PageTransitionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
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
