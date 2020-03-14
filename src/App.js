import React from 'react';
import Product from './Component/product';
import TemplateOverview from './Component/template_overview';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (

    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={TemplateOverview} />
          <Route exact path="/overview" component={TemplateOverview} />
          <Route exact path="/product" component={Product}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
