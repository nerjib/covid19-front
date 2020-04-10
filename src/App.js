import React from 'react';
import Estimator from './estimator'
import './App.css';
import { Route, Switch } from 'react-router-dom';

//import covid19ImpactEstimator from '../../src/estimator'

function App() {

//alert(  covid19ImpactEstimator(3))
  return (
    <div className="App">
     <Switch>
        <Route path="/" exact component={(Estimator)} />
      </Switch>
    </div>
  );
}

export default App;
