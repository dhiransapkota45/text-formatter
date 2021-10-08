import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [data, setData] = useState("");
  const [preview, setPreview] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toUpperCase = () => {
    setData(data.toUpperCase());
  };
  const toLowerCase = () => {
    setData(data.toLowerCase());
  };
  const clearAll = () => {
    setData("");
  };

  const preViewer = () => {
    setPreview(!preview);
  };
  if(darkMode){
    document.body.style.backgroundColor = 'black';
  }else{
    document.body.style.backgroundColor = 'white';
  }
  return (
    <>
      <div className='container'>
        <h3 className={`${darkMode ? "text-primary" : ""}`}>
          Enter your text here
        </h3>
        <div>
          <textarea
            className={`${darkMode && 'border-primary'}`}
            style={{
              width: "100%",
              resize: "none",
              height: "150px",
              //this is convention to use is bad because it returns false value as a classname, it is showing error on console
              //use ternaty operator instead of this and put value inside both conditions,dont left one empty
              backgroundColor: darkMode && "#292b2c",
              color: darkMode && "blue",
            }}
            placeholder="Enter your text here"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div>
          <button
            className={`btn btn-primary mx-2 ${darkMode && "btn-dark border-primary text-primary"}`}
            onClick={toUpperCase}
          >
            UPPECASE
          </button>
          <button className={`btn btn-danger mx-2 ${darkMode && 'btn-dark border-primary text-primary'}`} onClick={toLowerCase}>
            lowercase
          </button>
          {/* darkMode?"btn btn-success mx-2":"btn btn-danger mx-2 */}
          <button
            className={`mx-2 btn ${
              darkMode ? "btn-dark border-primary text-primary" : "btn-success"
            }`}
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
        <div className="mt-2">
          <h4 className={darkMode && "text-primary"}>
            {data.split(" ").length - 1} words and {data.length} letters used
          </h4>
        </div>
        <div>
          <button className="btn btn-outline-primary" onClick={preViewer}>
            Preview:
          </button>
          {preview && (
            <div
              className={`bg-dark text-light ${darkMode && "border"}`}
              style={{
                width: "100%",
                overflow: "auto",
                fontFamily: "cursive",
                padding: "1em",
              }}
            >
              {data}
            </div>
          )}
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => setDarkMode(!darkMode)}
          />
          <label
            className={`form-check-label ${
              darkMode ? "text-primary" : "text-dark"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {darkMode ? "Disable" : "Enable"} dark mode
          </label>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
