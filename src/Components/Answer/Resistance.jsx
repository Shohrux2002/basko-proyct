import React from "react";
function Resistance(props) {
  return (
    <>
      <p className="answer__left-subject">
        Бизнесингизни ўзингиз хоҳлагандек бошқариш ва ривожлантириш учун
        олдингизда турган биринчи рақамли тўсиқ нима?
        <br />
        <p className="note">
          (Кичик деталларгача биз учун муҳим. Ҳозирда ўзингиз кутган натижаларга
          эришишдансизни нималар тўсиб турибди. Батафсил ёзинг, ҳар бир
          жавобингиз биз учун муҳим)
        </p>
      </p>
      <input
        type="text"
        className="answer__left-input"
        onChange={(ev) => {
          props.getRasistance(ev.target.value);
        }}
      />
    </>
  );
}
export default Resistance;
