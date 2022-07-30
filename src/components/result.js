import { useState } from "react";

export default function Result({ finded }) {
  const [result, setResult] = useState([]);
  const [isResult, setIsResult] = useState(false);

  function readTextFile(file) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          let allText = rawFile.responseText;
        }
      }
    };
    rawFile.send(null);
  }

  readTextFile("../data/kklong.txt");

  return (
    <div className="result">
      {finded ? (
        <>
          {isResult ? (
            {
              /* Result */
            }
          ) : (
            <h3>검색결과 없음</h3>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
