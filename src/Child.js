import React from 'react';

const Child = (props) => {
  return (
    <div>
      <div>counter is {props.counter}</div>
      <div>time is {props.time}</div>
      <button 
        onClick={() => props.onClick((new Date()).toLocaleString())}>
        counter add
      </button>
    </div>
  );
};

export default Child;
