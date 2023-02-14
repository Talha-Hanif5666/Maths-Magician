import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="main">
        <div className="display">
          <input type="text" value={0} />
        </div>
        <div className="numerics">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="yellow">÷</button>
          <br />

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="yellow">x</button>
          <br />
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="yellow">-</button>
          <br />
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="yellow">+</button>
          <br />
          <button type="button" className="zero"> 0 </button>
          <button type="button">.</button>
          <button type="button" className="yellow">=</button>
          <br />
        </div>
      </div>
    );
  }
}
export default Calculator;
