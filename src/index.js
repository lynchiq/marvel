import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Theme from './styles/theme'
import {GlobalStyle} from "./styles/global";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
