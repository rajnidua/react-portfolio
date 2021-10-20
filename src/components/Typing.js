import React, { useState, useEffect } from "react";

export default function Typing() {
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
  ]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);

  // typeWriter
  useEffect(() => {
    if (index === words.length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 1000);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1>
        Skills : {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </>
  );
}
