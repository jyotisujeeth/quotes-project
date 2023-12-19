import { useParams } from 'react';
import { Fragment, Route } from 'react';

const QuoteDetail  = () => {
const params = useParams();
    
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
