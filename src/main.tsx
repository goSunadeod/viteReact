import React from 'react';
import ReactDOM from 'react-dom';

// legacy 旧模式
// ReactDOM.render(<h1>hello</h1>, document.getElementById('root'));

// 并发渲染
ReactDOM.createRoot(document.getElementById('root')!).render(<h1>hello</h1>);
