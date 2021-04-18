import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Chart1 from "../components/Chart1/Chart1";
import Chart2 from "../components/Chart2/Chart2.jsx";
import Chart3 from "../components/Chart3/Chart3.jsx";
import Chart4 from "../components/Chart4/Chart4.jsx";
import Chart6 from "../components/Chart6/Chart6.jsx";
import Chart9 from "../components/Chart9/Chart9.jsx";
import Chart19 from "../components/Chart19/Chart19.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/1" component={Chart1} />
        <Route path="/2" component={Chart2} />
        <Route path="/3" component={Chart3} />
        <Route path="/4" component={Chart4} />
        <Route path="/6" component={Chart6} />
        <Route path="/9" component={Chart9} />
        <Route path="/19" component={Chart19} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
