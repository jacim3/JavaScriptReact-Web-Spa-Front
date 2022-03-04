import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';

// 리액트는 브라우저에 보이는 HTML DOM 트리의 다른 버전인 React DOM 을 갖고 있으므로, 컴포넌트의 상태가 변하게 될 경우,
// 리액트에서는 이를 감지하여, 변경된 부분의 HTML을 바꿔준다.
// HTML이 변경된 경우 이를 실시간으로 확인 가능하며, 이를 렌더링이라 함.

// * 최초 렌더링이 일어나는 순간 : 기존에 ReactDom 트리가 존재하지 않는 상태에서 render()를 통하여 DOM트리를 구성하는 과정 = 마운팅
// 마운팅 과정에서 constructor와 render() 구현 후, 마운팅이 완료된 상태 즉, 컴포넌트의 프로퍼티가 준비되었을 때,
// componentDidMount에 백엔드 Api콜 부분이 구현됨.

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
