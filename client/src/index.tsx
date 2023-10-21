import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

// import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: 'Inter';
    --primary-color: #a370ff;
    --white: #ffffff;
    --dark-gray: #5f596c;
    --error: #ff3c78;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    background: #17121f;
  }

`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
