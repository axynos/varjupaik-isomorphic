import React from 'react';
import { Render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './client/client';

render((
  <Router>
    <App state={window.__PRELOADED_STATE__}/>
  </Router>,
  document.getElementById('root')
))
