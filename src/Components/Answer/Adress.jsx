import React from "react";

function Adress(props) {
  return (
    <>
      <p className="answer__left-subject">
        Фирмангиз қаерда жойлашган?
        <br />
      </p>
      <input
        placeholder="Манзилни киритинг..."
        className="answer__left-input"
        type="text"
        onChange={(e) => {
          props.getAdress(e.target.value);
        }}
      />
    </>
  );
}
export default Adress;
