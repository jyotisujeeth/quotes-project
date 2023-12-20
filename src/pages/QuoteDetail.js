import { useParams } from 'react';
import { Fragment, Route } from 'react';

const DummyQuotes = [
  { id: "q1", author: "me", text: "hello" },
  { id: "q2", author: "you", text: "react" },
];
const QuoteDetail  = () => {
const params = useParams();
    
const quoteDetails=()=> {
  const= useParams();
}


if(!quoute){
  console.log("QuoteDetail");
  return <p>no qutes found</p>
}
return (
  <Fragment>

    <h1> Quote Detail page </h1>
    <p>{params.quoteId}</p>
<Route path=

{`/quotes/${params.quoteId}/comments`}></Route>
  </Fragment>
);
};

export default  QuoteDetail;
;
