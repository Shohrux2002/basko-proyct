import React from "react";
function Didline(props) {
  return (
    <>
      <p className='answer__left-subject'>
        Бизнесингизни автоматлаштиришни қачонданбошламоқчисиз?
      </p>
      <div className='radios'>
        <div className='answer__left-wrapper--3'>
          <input
            id='tez'
            name='time'
            className='answer__left-input--3'
            type='radio'
            value='Қанча тез бўлса, шунча яхши'
            onChange={() => {
              console.log(props.state);
              props.getTime("Қанча тез бўлса, шунча яхши");
            }}
          />{" "}
          <label htmlFor='tez' className='answer__left-span--3'>
            Қанча тез бўлса, шунча яхши
          </label>
        </div>
        <div className='answer__left-wrapper--3'>
          <input
            id='hafta'
            name='time'
            className='answer__left-input--3'
            type='radio'
            value='Қанча тез бўлса, шунча яхши'
            // checked={position === "Хизмат кўрсатиш"}
            onChange={() => {
              props.getTime("Икки ҳафта ичида");
            }}
          />{" "}
          <label htmlFor='hafta' className='answer__left-span--3'>
            Икки ҳафта ичида
          </label>
        </div>
        <div className='answer__left-wrapper--3'>
          <input
            name='time'
            id='uch'
            className='answer__left-input--3'
            type='radio'
            value='Қанча тез бўлса, шунча яхши'
            // checked={position === "Хизмат кўрсатиш"}
            onChange={() => {
              props.getTime("2-4 ҳафта ичида");
            }}
          />{" "}
          <label htmlFor='uch' className='answer__left-span--3'>
            2-4 ҳафта ичида
          </label>
        </div>
        <div className='answer__left-wrapper--3'>
          <input
            id='oy'
            name='time'
            className='answer__left-input--3'
            type='radio'
            value='Қанча тез бўлса, шунча яхши'
            // checked={position === "Хизмат кўрсатиш"}
            onChange={() => {
              props.getTime("1-3 ой ичида");
            }}
          />{" "}
          <label htmlFor='oy' className='answer__left-span--3'>
            1-3 ой ичида
          </label>
        </div>
      </div>
    </>
  );
}
export default Didline;
