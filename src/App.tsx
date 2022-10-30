import React from 'react';
import data from "./data.json"
import { Quote } from './components/Quote';
function App() {
  //get a random number
  const randomNumber=(max:number)=>{
    return Math.floor(Math.random() * max);
  }
  //get a random quote from the array
  let randomQuote = data.at(randomNumber(101))
  return (
    <>
      <div id="root">
        <Quote {...randomQuote}/>
      </div>
    </>
  );
}

export default App;
