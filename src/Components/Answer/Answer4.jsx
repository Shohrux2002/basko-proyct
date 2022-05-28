import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo-1.png";
import left from "../../Assets/images/leftArrow.svg";
import right from "../../Assets/images/rightArrow.svg";
import "./_answer.scss";
import { useState } from "react";

function PositionInput(props) {
  return (
    <>
      {" "}
      <p className="answer__left-subject">
        Компанияда қандай лавозимда фаолият юритасиз?
        <br />
        <p className="note">
          (Телефон қўнғироғи банд қилишимиздан олдин қўнғироқнингсамарали
          бўлишини таъминлаш мақсадида бир нечта саволларимиз бор.)
        </p>
      </p>
      <div className="position-inputs">
        <div className="answer__left-wrapper--3">
          <input
            id="boshqaruvchi"
            name="position"
            className="answer__left-input--3"
            type="radio"
            value="Иш бошқарувчи"
            onChange={() => {
              let e = "Иш бошқарувчи";
              props.getPosition(e);
            }}
          />{" "}
          <label htmlFor="boshqaruvchi" className="answer__left-span--3">
            Иш бошқарувчи
          </label>
        </div>
        <div className="answer__left-wrapper--3">
          <input
            name="position"
            id="bugalter"
            className="answer__left-input--3"
            type="radio"
            value="Бухгалтер"
            onChange={() => {
              let e = "Бухгалтер";
              props.getPosition(e);
            }}
          />{" "}
          <label htmlFor="bugalter" className="answer__left-span--3">
            Бухгалтер
          </label>
        </div>
        <div className="answer__left-wrapper--3">
          <input
            id="Учредитель"
            name="position"
            className="answer__left-input--3"
            type="radio"
            value="Учредитель"
            onChange={() => {
              let e = "Учредитель";

              props.getPosition(e);
            }}
          />{" "}
          <label htmlFor="Учредитель" className="answer__left-span--3">
            Учредитель
          </label>
        </div>
        <div className="answer__left-wrapper--3">
          <input
            id="Ходим"
            name="position"
            className="answer__left-input--3"
            type="radio"
            value="Ходим"
            onChange={() => {
              let e = "Ходим";
              props.getPosition(e);
            }}
          />{" "}
          <label htmlFor="Ходим" className="answer__left-span--3">
            {" "}
            Ходим
          </label>
        </div>
      </div>
    </>
  );
}
export default PositionInput;
