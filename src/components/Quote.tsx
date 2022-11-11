import "../Styles/styles.css"
type Props ={
  quote_id?: number;
  quote?: string;
  author?: string;
  series?: string;
  handleNewQuote:()=> void;
}
export const Quote = ({quote,author,series, handleNewQuote}:Props) =>{
  return(
    <div id="quote-box">
        <q id="text">{quote}</q>
        <p id="author">- {author} from {series}</p>
        <br />
        <button id="new-quote" onClick={handleNewQuote}  >New quote</button>
      </div>
  )
}