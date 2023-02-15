import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const show = () => calculate(state, e.target.name);
    setState(show);
  };

  let display;
  const { total, next, operation } = state;
  if (total === null && next === null && operation === null) {
    display = 0;
  }
  if (next !== null && total === null) {
    display = next;
  }

  if (next === null && total !== null && operation !== null) {
    display = total + operation;
  }
  if (next !== null && total !== null && operation !== null) {
    display = total + operation + next;
  }
  if (next === null && total !== null && operation === null) {
    display = total;
  }

  return (
    <div className="main">
      <div className="display">
        <p>{display}</p>
      </div>
      <div className="numerics">
        <button type="button" name="AC" onClick={handleClick}>AC</button>
        <button type="button" name="+/-" onClick={handleClick}>+/-</button>
        <button type="button" name="%" onClick={handleClick}>%</button>
        <button type="button" name="÷" className="yellow" onClick={handleClick}>÷</button>
        <br />

        <button type="button" name="7" onClick={handleClick}>7</button>
        <button type="button" name="8" onClick={handleClick}>8</button>
        <button type="button" name="9" onClick={handleClick}>9</button>
        <button type="button" name="x" className="yellow" onClick={handleClick}>x</button>
        <br />
        <button type="button" name="4" onClick={handleClick}>4</button>
        <button type="button" name="5" onClick={handleClick}>5</button>
        <button type="button" name="6" onClick={handleClick}>6</button>
        <button type="button" name="-" className="yellow" onClick={handleClick}>-</button>
        <br />
        <button type="button" name="1" onClick={handleClick}>1</button>
        <button type="button" name="2" onClick={handleClick}>2</button>
        <button type="button" name="3" onClick={handleClick}>3</button>
        <button type="button" name="+" className="yellow" onClick={handleClick}>+</button>
        <br />
        <button type="button" name="0" className="zero" onClick={handleClick}>0</button>
        <button type="button" name="." onClick={handleClick}>.</button>
        <button type="button" name="=" className="yellow" onClick={handleClick}>=</button>
        <br />
      </div>
    </div>
  );
};
export default Calculator;
