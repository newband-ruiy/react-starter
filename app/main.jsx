/**
 * Created by b1uew01f on 9/14/15.
 */

'use strict';

import 'normalize.css';
import './assets/css/style.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import App from './views/app.jsx';


render((
    <Router>
        <Route path="/" component={App}></Route>
    </Router>
), document.getElementById('app'));
