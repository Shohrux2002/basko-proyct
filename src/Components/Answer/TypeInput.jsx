import React from "react";

function TypeInput(props) {
  return (
    <>
      <p className="answer__left-subject">
        Компаниянгизнинг фаолият тури қандай?
        <br />
      </p>
      <div className="radios">
        <div className="answer__left-wrapper--3">
          <input
            id="Ишлаб"
            name="type"
            className="answer__left-input--3"
            type="radio"
            value="Ишлаб чиқариш"
            onChange={() => {
              let e = "Ишлаб чиқариш";
              props.getType(e);
            }}
          />{" "}
          <label htmlFor="Ишлаб" className="answer__left-span--3">
            Ишлаб чиқариш
          </label>
        </div>
        <div className="answer__left-wrapper--3">
          <input
            id="Хизмат"
            name="type"
            className="answer__left-input--3"
            type="radio"
            value="Хизмат кўрсатиш"
            onChange={() => {
              let e = "Хизмат кўрсатиш";
              props.getType(e);
            }}
          />
          <label htmlFor="Хизмат" className="answer__left-span--3">
            Хизмат кўрсатиш
          </label>
        </div>
      </div>
    </>
  );
}
export default TypeInput;
