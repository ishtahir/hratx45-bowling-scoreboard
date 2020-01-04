import React from 'react';

const PinTracker = props => {
  return (
    <h2>
      Score: <span>{props.score}</span>
    </h2>
  );
};

export default PinTracker;
