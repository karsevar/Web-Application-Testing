import React, {useState} from 'react';
import './App.css';

function App() {
  const [strike, setStrike] = useState();
  const [ball, setBall] = useState();
  
  return (
    <div className="App">
      <span>Hello project</span>
    </div>
  );
}

export default App;
