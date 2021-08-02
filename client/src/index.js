import reactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App'
import reducers from './reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);