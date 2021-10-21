import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Typist from "react-typist";

export default function Typing() {
  const [count, setCount] = useState(1);
  const [words, setWords] = useState([
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "JQUERY",
    "NODEJS",
    "EXPRESSJS",
    "MYSQL2",
    "MONGODB",
    "REACT",
    "",
  ]);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <div>
      <p>My Skills : </p>
      {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span>HTML</span>
          <Typist.Backspace count={4} delay={800} />
          <span>CSS</span>
          <Typist.Backspace count={3} delay={800} />
          <span>BOOTSTRAP</span>
          <Typist.Backspace count={9} delay={800} />
          <span>JAVASCRIPT</span>
          <Typist.Backspace count={10} delay={800} />
          <span>NODEJS</span>
          <Typist.Backspace count={6} delay={800} />
          <span>EXPRESSJS</span>
          <Typist.Backspace count={9} delay={800} />
          <span>MYSQL2</span>
          <Typist.Backspace count={6} delay={800} />
          <span>MONGODB</span>
          <Typist.Backspace count={7} delay={800} />
          <span>REACT</span>
        </Typist>
      ) : (
        ""
      )}
    </div>
  );
}
