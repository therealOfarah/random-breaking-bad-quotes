import React from 'react';
import data from "./data.json"

function App() {
  //get a random number
  const randomNumber=(max:number)=>{
    return Math.floor(Math.random() * max);
  }
  //get a random quote from the array
  let randomQuote = data.at(randomNumber(101))
  return (

  );
}

export default App;
