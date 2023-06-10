
import './login.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Login() {

    const [users, setUsers] = useState([])
    const [link, setLink] = useState('/')
    useEffect (() => {
        fetch('https://todo-nodejs-psi.vercel.app/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },[])

    const handleSignIn = () => {
        const username = document.querySelector('.txtusername')
        const password = document.querySelector('.txtpassword')
        users.forEach(user => {
            if (user.userName == username.value && user.passWord == password.value) {
                setLink('/home')
            }
        })
    }

    return ( 
        <div className='col-lg-12 login'>
            <h2>Login</h2><br></br>
            <form method='POST' action='https://todo-nodejs-psi.vercel.app/insert-user' className='col-lg-4'>
                <div class="form-outline mb-4">
                    <label class="form-label username" for="form2Example1">Username</label>
                    <input onChange={() => handleSignIn()} name='userName' type="text" id="form2Example1" class="form-control txtusername" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label password" for="form2Example2">Password</label>
                    <input onChange={() => handleSignIn()} name='passWord' type="password" id="form2Example2" class="form-control txtpassword" />
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
                <Link to={link}><button type="button" onClick={() => handleSignIn()} class="btn btn-primary btn-block mb-4">Sign in</button></Link>
            
            </form>
        </div>
     );
}

export default Login;