import React, { useContext, useEffect } from 'react'
import ajax from '../ajax'
import Context from '../Context'

const Movies = () => {
    const { state, dispatch } = useContext(Context)

    useEffect(() => {

        ajax('/movies').then(movies => { dispatch({ type: "setMovies", movies: movies }) })
    }, [])

    return (
        <div>
            <h2>我喜欢的电影</h2>
            <ol>
                {
                    state.movies ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>) : "loading..."
                }
            </ol>
        </div>
    )
}

export default Movies