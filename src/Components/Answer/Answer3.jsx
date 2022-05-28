import React from "react";
import "./_answer.scss";
function NumberInput(props) {
  return (
    <>
      <p className="answer__left-subject">
        Ажойиб, {props.state.userName}! Қайта алоқага чиқишимиз учун
        <br />
        <b>телефон рақамингизни қолдиринг:</b>
      </p>
      <input
        onChange={(e) => {
          props.getPhone(e);
        }}
        placeholder="+998..."
        className="answer__left-input"
        type="text"
      />
    </>
  );
}
export default NumberInput;
