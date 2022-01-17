import React from 'react';

import Routes from './routes';
import './assets/styles/app.scss';

const stringing = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="container">
      <Routes />
    </div>
  );
}
console.log('process.env', process.env, stringing.includes(1));
export default App;
