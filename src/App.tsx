import React, { useState } from 'react';
import data from "./data.json"
import { Quote } from './components/Quote';
function App() {
  type T ={
    quote_id?: number;
    quote?: string;
    author?: string;
    series?: string;
    // handleNewQuote:()=> void;
  }
  const [quote, setQuote] = useState<T>()
  //get a random number
  const randomNumber=(max:number)=>{
    return Math.floor(Math.random() * max);
  }
  //get a random quote from the array
  //get a new random quote from the array
  const handleNewQuote = ()=>{
    let randomQuote = data.at(randomNumber(101))
    setQuote(randomQuote)
    // get
    
  }
  return (
    <>
      <div id="root">
        <Quote {...quote} handleNewQuote={handleNewQuote}/>
      </div>
    </>
  );
}

export default App;
