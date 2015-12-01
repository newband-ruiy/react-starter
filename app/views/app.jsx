/**
 * Created by b1uew01f on 9/14/15.
 */

import React from 'react';
import Reflux from 'reflux';

import AppStore from '../stores/AppStore.jsx';
import Actions from '../actions/actions.jsx';

let APP_CFG = {};

let App = React.createClass({
    mixins: [
        Reflux.listenTo(AppStore, 'onStateUpdate')
    ],

    onStateUpdate() {

    },

    componentDidMount() {
    },

    getInitialState() {
        return AppStore.getDefaultState();
    },

    render() {
        return (
            <div className="container">
                <h4>React-Starter</h4>

                <div>A start kit for react project by ruiy</div>
            </div>
        );
    }
});

export default App;