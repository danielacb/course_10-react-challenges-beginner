import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [phrase, setPhrase] = useState('');
  const [open, setOpen] = useState(false)

  if (phrase.toLowerCase() === 'mellon') {
    setTimeout(() => setOpen(true), 100)
  }



  return (
    <div className="App">
      <img src="./doors-of-durin.png" alt="Doors of Durin" className={open && 'open'} />
      {open ? <h1 className="open">You Shall Pass</h1> : <h1>The Doors of Durin, Lord of Moria. Speak, friend, and enter!</h1>}

      {!open && <input type="text" placeholder="Password" value={phrase} onChange={e => setPhrase(e.target.value)} />}
      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
