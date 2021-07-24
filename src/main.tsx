import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import BatchState from './routes/BatchState';
import Suspense from './routes/Suspense';
import SuspenseList from './routes/SuspenseList';
import StartTransition from './routes/StartTransition';
import UseDeferredValue from './routes/UseDeferredValue';
import UseTransition from './routes/UseTransition';

// legacy 旧模式
// ReactDOM.render(
//   <Router>
//     <ul>
//       <li>
//         <Link to="/BatchState">BatchState</Link>
//       </li>
//     </ul>
//     <Route path="/BatchState" component={BatchState} />
//   </Router>,
//   document.getElementById('root')
// );

// 并发渲染
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ul>
      <li>
        <Link to="/BatchState">BatchState</Link>
      </li>
      <li>
        <Link to="/Suspense">Suspense</Link>
      </li>
      <li>
        <Link to="/SuspenseList">SuspenseList</Link>
      </li>
      <li>
        <Link to="/StartTransition">StartTransition</Link>
      </li>
      <li>
        <Link to="/UseDeferredValue">UseDeferredValue</Link>
      </li>
      <li>
        <Link to="/UseTransition">UseTransition</Link>
      </li>
    </ul>
    <Route path="/BatchState" component={BatchState} />
    <Route path="/Suspense" component={Suspense} />
    <Route path="/SuspenseList" component={SuspenseList} />
    <Route path="/StartTransition" component={StartTransition} />
    <Route path="/UseDeferredValue" component={UseDeferredValue} />
    <Route path="/UseTransition" component={UseTransition} />
  </Router>
);
