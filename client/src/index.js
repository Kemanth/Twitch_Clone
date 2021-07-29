import reactDom from 'react-dom'
import { createStore } from 'redux';
import App from './components/App'
import reducers from './reducers'
import { Provider } from 'react-redux';

const store = createStore(reducers)

reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);