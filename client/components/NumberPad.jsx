import React from 'react';

const NumberPad = props => {
  return (
    <div className="container">
      {props.nums.map(num => (
        <div
          key={`btn${num}`}
          className={`btn btn${num} ${num + props.totalPinsKnockedDown > 10 ? 'disabled' : props.attempt2 > -1 ? 'disabled' : ''}`}
          onClick={evt => {
            let number = Number(evt.target.textContent);
            if (props.attempt1 < 0) {
              props.updateAttempts(1, number);
              props.updateTotalPins(number);
              props.updateDisplay('Choose number of pins for second attempt');
            } else if (props.attempt1 > -1 && !evt.target.classList.contains('disabled')) {
              props.updateAttempts(2, number);
              props.updateTotalPins(number);
            }
          }}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumberPad;
