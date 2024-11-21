import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import { useState } from 'react';
import ColorPicker from './ColorPicker';
function App() {
  const [color, setColor] = useState(undefined);
  const passedData = (data) => {
    setColor(data);
  };

  const [showCounter, setShowCounter] = useState(true);
  function handleClick1(){setShowCounter(true)};
  function handleClick2(){setShowCounter(false)};

  return (
    <div className="App">
      <Greeting name="Shaya" />
      <button onClick={handleClick1} >Show Counter</button>
      <button onClick={handleClick2} >Show Color Picker</button>

      {showCounter ? <Counter /> : 
      <ColorPicker sendFunctionToCall={passedData} />}
      <p>The color is {color}</p>

    </div>
  );
}

export default App;
