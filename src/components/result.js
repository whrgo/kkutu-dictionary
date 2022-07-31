import { useEffect, useState } from "react";

export default function Result({ finded }) {
  const [result, setResult] = useState([]);
  const [isResult, setIsResult] = useState(false);

  const [kklong, setKklong] = useState("");
  const [isKklong, setIsKklong] = useState(false);

  const [kkutu, setKkutu] = useState("");
  const [isKkutu, setIsKkutu] = useState(false);

  // read txt file at react
  const readFile = async (filename) => {
    const response = await fetch("https://whgro.github.io/src/" + filename);
    const data = await response.text();
    return data;
  };

  useEffect(() => {
    setKklong(readFile("kklong.txt"));
    setKklong((prev) => prev.split("\n"));
    setIsKklong(true);
    setKkutu(readFile("kkutu.txt"));
    setKklong((prev) => prev.split("\n"));
    setIsKkutu(true);
  }, []);

  useEffect(() => {
    if (finded === true) {
      setIsResult(true);
    } else {
      setIsResult(false);
    }
  }, [finded]);

  const find_reuslt = () => {
    if (isKklong && isKkutu) {
      const result = [];
      for (let i = 0; i < kklong.length; i++) {
        for (let j = 0; j < kkutu.length; j++) {
          if (kklong[i] === kkutu[j]) {
            result.push(kklong[i]);
          }
        }
      }
      setResult(result);
      setIsResult(true);
    }
  };

  return (
    <div className="result">
      {finded ? <>{isResult ? {} : <h3>검색결과 없음</h3>}</> : <></>}
    </div>
  );
}
