import "./App.css";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [text1, setText1] = useState("");
  const text2 = useRef("");

  useEffect(() => {
    console.log(text1);
  });

  const onSubmit = () => {
    console.log("Submitted!, Text-1", text1, "Text-2", text2.current.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText1(e.target.value);
        }}
      />

      <input type="text" ref={text2} />

      <div onClick={onSubmit}>Submit</div>
    </>
  );
};

export default App;
