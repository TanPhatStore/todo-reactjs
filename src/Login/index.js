
import './login.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';

function Login({reload, setReload}) {

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
        const access = document.querySelector('.access')
        const usernamehidden = document.querySelector('.hiddenUserName')
        const passwordhidden = document.querySelector('.hiddenPassWord')
        const accesshidden = document.querySelector('.hiddenAccess')
        users.forEach(user => {
            if (user.userName == username.value && user.passWord == password.value) {

            } 
        })
    }
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        const username = document.querySelector('.txtusername')
        const password = document.querySelector('.txtpassword')
        let trueData = false
        users.forEach(user => {
            if (user.userName == username.value && user.passWord == password.value) {
                trueData = true
                setLink('/home')
                setTimeout(() => {
                    navigate('/home');
                }, 100);
            } 
        })
        const user = {
            username : username.value,
            password : password.value,
            accessControl : trueData
        }
        localStorage.setItem('user', JSON.stringify(user));
        setReload(!reload)
    }

    return ( 
        <div className='col-lg-12 login'>
            <h2>Login</h2><br></br>
            <form method='POST' action='http://localhost:8080/insert-user' className='col-lg-4'>
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

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                <button onClick={() => handleClickSignIn()} type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
                
            </form>
        </div>
     );
}

export default Login;