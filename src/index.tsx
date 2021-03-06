import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {GlobalStyle} from "./styles/global";
import store from "./store";
import App from "./App";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
