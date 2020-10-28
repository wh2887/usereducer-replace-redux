import React from 'react';
import ReactDOM from 'react-dom';
import Books from './components/books';
import Movies from './components/movies';
import User from './components/user';


const App = () => {
  return (
    <div>
      <h1>如何使用 useReducer 代替 Redux</h1>
      <User />
      <Books />
      <Movies />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
