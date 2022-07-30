import { useState } from "react";

export default function Search({ inputValue, setInputValue, setFinded }) {
  const onChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    if (value === "") {
      setFinded(false);
    } else {
      setFinded(true);
    }
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="찾을 단어 첫 글자 입력"
          onChange={onChange}
          required
        />
      </form>
    </div>
  );
}
