import React from 'react';

const Scoreboard = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.frames.map(frame => (
            <th key={`frame${frame}`}>{`Frame ${frame}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.frames.map(frame => (
            <td key={`score${frame}`}>{props.scoreObj[frame][0]}</td>
          ))}
        </tr>
        <tr>
          {props.frames.map(frame => (
            <td key={`score${frame}`}>{props.scoreObj[frame][1]}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Scoreboard;
