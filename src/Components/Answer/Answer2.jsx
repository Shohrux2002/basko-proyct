import React from "react";
import "./_answer.scss";

function NameInput(props) {
  return (
    <div>
      <p className="answer__left-subject">
        Бизнесингизни автоматлаштириш учун ташлаган биринчи қадамингиз билан
        табриклаймиз!<br></br>
        <b>Исмингиз нима?</b>
      </p>
      <input
        onChange={(e) => {
          props.getValue(e);
          // console.log(this.state.userName);
        }}
        placeholder="Исмингизни киритинг..."
        className="answer__left-input"
        type="text"
      />
    </div>
  );
}
export default NameInput;
