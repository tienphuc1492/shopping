import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from '../node_modules/notistack/dist/index';
import store from 'app/store';

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: 'center' }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();