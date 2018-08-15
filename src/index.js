import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import storeConfiguration from './redux/storeConfiguration'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = storeConfiguration()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
