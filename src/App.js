import React, { useState } from 'react';
import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0)

  function increment(){
    setCounter(counter + 1)

    console.log(counter)
  }
  return (
    <div>
    <Header>
      Be the hero
    </Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
