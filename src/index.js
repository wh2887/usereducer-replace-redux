import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import Books from './components/books';
import Movies from './components/movies';
import User from './components/user';
import userReducer from './reducers/user_reducer'
import moviesReducer from './reducers/movies_reducer'
import booksReducer from './reducers/books_reducer'
import stores from './stores/index'
import Context from './Context'


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

  const api = { state, dispatch }

  return (
    <Context.Provider value={api}>
      <h1>如何使用 useReducer 代替 Redux</h1>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
