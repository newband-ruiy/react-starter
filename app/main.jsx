/**
 * Created by b1uew01f on 9/14/15.
 */

'use strict';

import 'normalize.css';
import './assets/css/style.css';

import React from 'react';
import App from './views/app.jsx';

function main() {
    React.render(
        <App />, document.body
    );
}

main();