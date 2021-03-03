import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import Theme from './styles/theme'
import {GlobalStyle} from "./styles/global";

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
