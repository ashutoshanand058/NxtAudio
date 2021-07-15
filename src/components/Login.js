import React from 'react'
import {loginURL} from './Spotify';

const Login = () => {
    return (
        <div className="login">
            <a href= {loginURL}>Login with spotify</a>
        </div>
    )
}

export default Login
