import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import MainBanner from "../components/layout/MainBanner";
import SearchBar from "../components/common/SearchBar";
const Home = () => {
  // 검색어 상태 (검색 실행된 텍스트)
  const [searchText, setSearchText] = useState("");
  // 검색 입력 상태 (입력 중인 텍스트)
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <Header />
      <MainBanner />
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        setSearchText={setSearchText}
      />
    </div>
  );
};
export default Home;
