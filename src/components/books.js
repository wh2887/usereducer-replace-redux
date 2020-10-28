import React, { useContext, useEffect } from 'react'
import Context from '../Context'
import ajax from '../ajax'



const Books = () => {

    const { state, dispatch } = useContext(Context)

    useEffect(() => {

        ajax('/books').then((books) => { dispatch({ type: "setBooks", books: books }) })
    }, [])



    return (
        <div>
            <h2>我喜欢的书籍</h2>
            <ol>
                {
                    state.books ? state.books.map(book => <li key={book.id} > {book.name} </li>) : "loading..."
                }
            </ol>
        </div>
    )
}

export default Books