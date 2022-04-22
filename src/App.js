import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputName, setInputName] = useState('');

  return (
    <div className="App">
      <h1>{inputName}</h1>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setInputName(e.target.value)}
      />
    </div>
  );
}

export default App;
