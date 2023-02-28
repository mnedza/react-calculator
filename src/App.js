import { useState } from 'react';
import './style.css';

function App() {
  const [previousOperand, setPreviousOperand] = useState(0);
  const [currentOperand, setCurrentOperand] = useState(0);
  const [operation, setOperation] = useState('');

  const handleNumber = (number) => {
    if (currentOperand === '0') {
      setCurrentOperand(parseFloat(number));
    } else {
      setCurrentOperand(parseFloat(currentOperand.toString() + number.toString()));
    }
  };

  const handleSymbol = (symbol) => {
    setOperation(symbol);
    setPreviousOperand(currentOperand);
    setCurrentOperand(0);
  };

  const handleAllClear = () => {
    setPreviousOperand(0);
    setCurrentOperand(0);
    setOperation('');
  };

  const handleDelete = () => {
    setCurrentOperand(currentOperand.toString().slice(0, -1));
  };

  const handleDot = () => {
    if (currentOperand.toString().includes('.')) {
      return;
    }
    setCurrentOperand(currentOperand.toString() + '.');
  };
  

  const handleEquals = () => {
    switch (operation) {
      case '+':
        setCurrentOperand(previousOperand + currentOperand);
        break;
      case '-':
        setCurrentOperand(previousOperand - currentOperand);
        break;
      case '*':
        setCurrentOperand(previousOperand * currentOperand);
        break;
      case '/':
        setCurrentOperand(previousOperand / currentOperand);
        break;
      default:
        break;
    }
    setPreviousOperand(0);
    setOperation('');
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"> {previousOperand} </div>
        <div className="current-operand"> {currentOperand}</div>
      </div>
      <button className="span-two" onClick={() => handleAllClear()}>AC</button>
      <button onClick={() => handleDelete()}>DEL</button>
      <button onClick={() => handleSymbol('/')}>÷</button>
      <button onClick={() => handleNumber(7)}>7</button>
      <button onClick={() => handleNumber(8)}>8</button>
      <button onClick={() => handleNumber(9)}>9</button>
      <button onClick={() => handleSymbol('*')}>*</button>
      <button onClick={() => handleNumber(4)}>4</button>
      <button onClick={() => handleNumber(5)}>5</button>
      <button onClick={() => handleNumber(6)}>6</button>
      <button onClick={() => handleSymbol('+')}>+</button>
      <button onClick={() => handleNumber(1)}>1</button>
      <button onClick={() => handleNumber(2)}>2</button>
      <button onClick={() => handleNumber(3)}>3</button>
      <button onClick={() => handleSymbol('-')}>-</button>
      <button onClick={() => handleDot('.')}>.</button>
      <button onClick={() => handleNumber(0)}>0</button>
      <button className="span-two" onClick={() => handleEquals()}>=</button>
    </div>
  );
}

export default App;