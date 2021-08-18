import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./_base.scss"
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/reducers/store';
import 'react-lazy-load-image-component/src/effects/blur.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  
  </Provider>,
   
  document.getElementById('root')
);


