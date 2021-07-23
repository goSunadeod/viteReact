import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import BatchState from './routes/BatchState';

// legacy 旧模式
ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/BatchState">BatchState</Link>
      </li>
    </ul>
    <Route path="/BatchState" component={BatchState} />
  </Router>,
  document.getElementById('root')
);

// 并发渲染
// ReactDOM.createRoot(document.getElementById('root')!).render(<h1>hello</h1>);
