import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import {auth} from '../firebase';

import "../Css/Login.css"


function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = e=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            if(auth){
                navigate('/');
            }
        })
        .catch(err=>alert(err.message))

        // Login in the user

    }

    const createAccount = e=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // User signed up
            console.log(auth);
            if(auth){
                navigate('/')
            }
        })
        .catch(err=>alert(err.message));

        // Register new User
    }


    return (
        <div className="login">
            <Link to='/'>
                <img className="login-logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button className="login-signin-button" onClick={signIn} type="submit">Sign In</button>

                    <button className="login-register-button" onClick={createAccount}>Create your Amazon account</button>
                </form>
            </div>


        </div>
    )
}



export default Login;