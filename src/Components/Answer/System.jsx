import React from "react";
function SystemInput(props) {
  return (
    <div>
      <p className="answer__left-subject">
        Ҳозирда маълумотларингизни ва ҳисоб-китобларингизни қайси системада олиб
        боряпсиз?
      </p>
      <div className="answer__left-wrapper--3">
        <input
          id="Excel"
          name="system"
          className="answer__left-input--3"
          type="radio"
          value="Microsoft Excel"
          // checked={position === "Ишлаб чиқариш"}
          onChange={() => {
            let e = "Microsoft Excel";
            props.getSystem(e);
          }}
        />
        <label htmlFor="Excel" className="answer__left-span--3">
          Microsoft Excel
        </label>
      </div>
      <div className="answer__left-wrapper--3">
        <input
          id="daftar"
          name="system"
          className="answer__left-input--3"
          type="radio"
          value="Дафтар, ручкада"
          onChange={() => {
            let a = "Дафтар, ручкада";
            props.SystemInput(a);
          }}
        />
        <label htmlFor="daftar" className="answer__left-span--3">
          Дафтар, ручкада
        </label>
      </div>
      <div className="answer__left-wrapper--3">
        <input
          id="дастур"
          name="system"
          className="answer__left-input--3"
          type="radio"
          value="Махсус дастурда"
          // checked={position === "Хизмат кўрсатиш"}
          onChange={() => {
            let b = "Махсус дастурда";
            props.SystemInput(b);
          }}
        />{" "}
        <label htmlFor="дастур" className="answer__left-span--3">
          Махсус дастурда
        </label>
      </div>
    </div>
  );
}
export default SystemInput;
