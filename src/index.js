import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlarmLogs from './AlarmLogs';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/icons.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Connector from './context/Connector';

ReactDOM.render(
  <React.StrictMode>
    <Connector>
      {/* ROUTES */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/alarmlogs" exact component={AlarmLogs} />
        </Switch>
      </BrowserRouter>
      {/*  */}
    </Connector>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
