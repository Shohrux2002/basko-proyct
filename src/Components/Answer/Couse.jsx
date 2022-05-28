import React from "react";

function Cause(props) {
  return (
    <>
      <p className="answer__left-subject">
        {props.state.userName}, нима учун, айнан, ҳозир
        бизнесингизниавтоматлаштириш керак деб ҳисоблайсиз?
      </p>
      <input
        className="answer__left-input"
        type="text"
        onChange={(e) => {
          props.getCause(e.target.value);
        }}
      />
    </>
  );
}
export default Cause;
