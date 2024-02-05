import React, { useState } from "react";

export default function TextForm(props) {
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const copyClick = () => {
    let text = document.getElementById("textfrom");
    navigator.clipboard.writeText(text.value);
  };

  const pasteClick = async () => {
    const cliptext = await navigator.clipboard.readText();
    setText(text + cliptext);
  };

  const UpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const spaceClick = () => {
    setText(text.split(/\s+/).join(" "));
  };

  const clearClick = () => {
    setText("");
  };

  const capClick = () => {
    setText(text.replace(/\b\w/g, (c) => c.toUpperCase()));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{marginTop:"25px"}}>
        <h1 className="mb-2" style={{ fontStyle: "italic", color: "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3 ">
          <textarea
            style={{
              background: "#8080808a",
              color: "white",
              cursor: "white",
              caretColor: "white",
            }}
            value={text}
            onChange={handleonchange}
            className="form-control"
            id="textfrom"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-outline-light mx-2" onClick={copyClick}>
          Copy
        </button>
        <button className="btn btn-outline-light mx-2" onClick={pasteClick}>
          Paste
        </button>
        <button className="btn btn-outline-light mx-2" onClick={UpClick}>
          UpperCase
        </button>
        <button className="btn btn-outline-light mx-2" onClick={lowClick}>
          LowerCase
        </button>
        <button className="btn btn-outline-light mx-2" onClick={capClick}>
          Capitalize
        </button>
        <button className="btn btn-outline-light mx-2" onClick={spaceClick}>
          Remove Extra spaces
        </button>
        <button className="btn btn-outline-light mx-2" onClick={clearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <div style={myStyle}>
          <p style={{ color: "white" }}>
            Words: {text.trimStart().length === 0 ? 0 : text.match(/\S+/g).length}
          </p>
          <p style={{ color: "white" }}>Charctures: {text.trimStart().length}</p>
        </div>
      </div>
    </>
  );
}
