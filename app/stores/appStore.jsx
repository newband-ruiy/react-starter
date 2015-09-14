/**
 * Created by b1uew01f on 9/14/15.
 */

import Reflux from 'reflux';
import Actions from '../actions/actions.jsx'

let appState = {};

let AppStore = Reflux.createStore({
    listenables: Actions,

    getDefaultState() {
        return appState;
    }
});

export default AppStore;