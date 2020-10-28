import React, { useContext, useEffect } from 'react'
import Context from '../Context'
import ajax from '../ajax'



const User = () => {
    const { state, dispatch } = useContext(Context)

    useEffect(() => {
        ajax('/user').then(user => { dispatch({ type: "setUser", user: user }) })
    }, [])


    return (
        <div>
            <h2>我的信息</h2>
            <p>name: {state.user ? state.user.name : "loading..."}</p>
        </div>
    )
}

export default User