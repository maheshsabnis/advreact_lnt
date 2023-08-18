import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import { appStore } from './sagaapp/store';
import MainReduxSagaComponent from './sagaapp/views/mainreduxsagacontainercomponent';


const root = ReactDOM.createRoot(document.getElementById('root'));

const message = 'React is Great!!!';

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
        <MainReduxSagaComponent/>
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
