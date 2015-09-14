/**
 * Created by b1uew01f on 9/14/15.
 */

import React from 'react';
import Reflux from 'reflux';
import Footer from '../components/footer.jsx';

import AppStore from '../stores/appStore.jsx';
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
                <div>React-Starter</div>
            </div>
        );
    }
});

export default App;