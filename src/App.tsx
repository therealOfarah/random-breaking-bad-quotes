import React, { useEffect, useState } from 'react';
import data from "./data.json"
import { Quote } from './components/Quote';
function App() {
  type T ={
    quote_id: number;
    quote: string;
    author: string;
    series: string;
  }
  const [quote, setQuote] = useState<T>()
  //get a random number
  const randomNumber=(max:number)=>{
    return Math.floor(Math.random() * max);
  }
  useEffect(()=>{
    let randomQuote = data.at(randomNumber(70))
    //get a random quote from the array
    setQuote(randomQuote)
  },[])
  const handleNewQuote = ()=>{
    //get a new random quote from the array
    let randomQuote = data.at(randomNumber(70))
    setQuote(randomQuote)
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
