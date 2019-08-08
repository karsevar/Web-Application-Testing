import React, {useState} from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import {handleStrike, handleBall, handleHit, handleFoul} from './utils/HandlerFunctions';
import './App.css';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);


  return (
    <div className="App">
      <Display 
        strike={strike}  
        ball={ball}
      />
      <Dashboard 
        handleFoul={handleFoul}
        handleStrike={handleStrike} 
        handleBall={handleBall} 
        setStrike={setStrike} 
        strike={strike} 
        setBall={setBall} 
        ball={ball}
        handleHit={handleHit}
      />
    </div>
  );
}

export default App;
