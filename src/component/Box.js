import React from "react";

const Box = (props) => {
  console.log("나야", props);
  let result;
  if (
    props.title === "상대방" &&
    props.result !== "TIE" &&
    props.result !== ""
  ) {
    result = props.result === "WIN" ? "LOSE" : "WIN";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} className="img-area" />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
