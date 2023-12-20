import { useHistory } from 'react-route-dom';



const AllQuotes = () => {
const history = useHistory();

const addQuotesHandler = {quoteData} => {
    console.log('addQuotesHandler');
    history.push('/quote');
};


 return(
 <h1> New....Quote Detail page </h1>
<QuoteFrom onAddQuote= {addQuotehandler}></QuoteFrom>
 );
};



export default AllQuotes;
