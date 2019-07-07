import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getRoutes = () => {
    return (
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    )
  }

render(
      <BrowserRouter>
        {getRoutes()}
      </BrowserRouter>
    , document.getElementById('root')
  )

serviceWorker.unregister();
