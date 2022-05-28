import React from "react";
import "./_answer.scss";
function About(props) {
  return (
    <>
      {" "}
      <p className="answer__left-subject">
        Бизнесингиз ҳақида қисқача гапириб беринг. Нима сотасиз, потенциал
        мижозларингиз кимлар?
      </p>
      <input
        placeholder="Бизнесингиз ҳақида қисқача..."
        className="answer__left-input"
        type="text"
        onChange={(e) => {
          props.getData(e.target.value);
        }}
      />
      <p className="data-all">
        *Бу саволларга жавоб олиш орқали сиз билан бўладиган
        суҳбатимизнимаксимал даражада самарали бўлишини таъминлаш имкониятигаэга
        бўламиз.
      </p>
    </>
  );
}
export default About;
