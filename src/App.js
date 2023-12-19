import { Route, Routes, Switch, Redirect } from "react-router-dom";
import AllQuotes from './pages/NewQuote';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';


function App() {
  return (
    <Switch>
      <Routes>
        <Route path="/quotes" exact>
          <Redirect to="/quotes"/>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Routes>
    </Switch>
  );
  };
  export default App;