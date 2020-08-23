import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={(e) => setnumber1(+e.target.value)} />
        <input type="number" placeholder="0" onChange={(e) => setnumber2(+e.target.value)} />
      </div>

      <button onClick={() => setSum(number1 + number2)}>Add Them!</button>

      <h2>{sum}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
