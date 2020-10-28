import React from 'react';
import ReactDOM from 'react-dom';
import Books from './components/books';
import Movies from './components/movies';
import User from './components/user';
import userReducer from './src/reducers/user_reducer'
import moviesReducer from './src/reducers/movies_reducer'
import booksReducer from './src/reducers/books_reducer'
import stores from './src/stores/index'


const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer
}

const reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error('unknown type!')
  }
}



const App = () => {

  const [state, dispatch] = useReducer(reducer, stores)

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
