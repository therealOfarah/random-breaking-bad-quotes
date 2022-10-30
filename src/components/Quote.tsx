import "../Styles/styles.css"
type Props ={
  quote_id?: number;
  quote?: string;
  author?: string;
  series?: string;
}
export const Quote = ({quote,author,series}:Props) =>{
  return(
    <div id="quote-box">
        <q id="text">{quote}</q>
        <p id="author">- {author} from  {series}</p>
        <br />
        <button id="new-quote"  >New quote</button>
      </div>
  )
}