/* global fetch */
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('...loading')

  useEffect(() => {
    async function fetchData () {
      try {
        let data = await (await fetch('/api')).json()
        setMessage(data.message)
      } catch (err) {
        setMessage(err.message)
      }
    }
    fetchData()
  });


const handleBuy = async (event) => {
  await fetch('/buy',{method:'POST',headers: {
    "Content-Type": "application/json"
  },body: JSON.stringify({type:event.target.name})});
  
}
  

  return (
    <div className="App">
     <p style={{fontSize:"24pt"}}>{message}</p>
      <div className="App-header" style={{flexDirection:"row"}}>
        
        <button onClick={handleBuy} name="prod1" style={{height:"100px",width:"120px",margin:"20px"}}>Buy Product 1</button>
        <button onClick={handleBuy} name="prod2" style={{height:"100px",width:"120px",margin:"20px"}}>Buy Product 2</button>
        <br/><br/>
        
      </div>
    </div>
  );
}

export default App;
