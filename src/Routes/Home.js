import React, { useState } from "react";
import Result from "../components/result";
import Search from "../components/search";
import "../css/main.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [finded, setFinded] = useState(false);

  return (
    <div>
      <h1>끄투 단어 검색기</h1>
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        setFinded={setFinded}
      />
      <Result finded={finded} />
    </div>
  );
}
