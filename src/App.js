import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('');

useEffect(() => {
  console.log('render', color)
}, [color])


  return (
    <div className="App">
      <h4>
      {color}
      </h4>

      <button onClick={() => setColor('Blue')}>Blue</button>
      <button onClick={() => setColor('Red')}>Red</button>
      <button onClick={() => setColor('Green')}>Green</button>
    </div>
  );
}

export default App;
