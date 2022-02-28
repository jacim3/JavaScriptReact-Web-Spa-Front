import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';

// 첫 번째 매개변수로, 리액트 컴포넌트를,
// 두 번째 매개변수로, root 엘리번트를 받는다.
// 즉 첫 번째 매개변수로 전달받은 컴포넌트를 root 아래에 추가하라는 의미.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
