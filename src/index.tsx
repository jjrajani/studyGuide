import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import './index.scss';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
