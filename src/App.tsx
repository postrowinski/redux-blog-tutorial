import 'antd/dist/antd.less';
import 'babel-polyfill';
import * as React from "react";
import { hot } from 'react-hot-loader/root';
import './assets/scss/app.scss';
import Navigation from './components/Navigation/Navigation';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const App: React.FC<{}> = (): JSX.Element => {
    return (
        <Provider store={store}>
            <div style={{maxWidth: 1200, margin: 'auto', padding: '0 20px'}}>
                <Navigation />
            </div>
        </Provider>
    )
};

export default hot(App);
