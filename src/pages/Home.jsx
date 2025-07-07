import { useState, useEffect } from "react";
import MainBanner from "../components/layout/MainBanner";
import SearchBar from "../components/common/SearchBar";
import ScholarShipTip from "../components/scholarship/ScholarShipTip";
import ScholarShipList from "../components/scholarship/ScholarshipList.jsx";
const Home = () => {
  // 검색 입력 상태 (입력 중인 텍스트)
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <MainBanner />
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <ScholarShipTip />
      <ScholarShipList />
    </div>
  );
};
export default Home;
