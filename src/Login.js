
import React, { useState } from 'react';
import {auth, db} from './firebase';
import { Link, useHistory } from 'react-router-dom';


function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const login = (event) => {
     event.preventDefault();
    
     auth.signInWithEmailAndPassword(email, password)
     .then((auth) => {
         //logged in, redirect to homepage
         history.push('/')
     })
     .catch(e => alert(e.message));
   }
   
   const register = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then(auth => {
        //create a user and logged in, redirect to homepage
        history.push('/')
       
    })
    .catch((e) => alert(e.message))
};

    return (
        
        <div className='login'>
             <div className='login_container'>
            <h1>Sign in</h1>
            <form>
            <h5>E-mail</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type='email'/>
            <h5>Password</h5>
            <input  value={password} onChange={event => setPassword(event.target.value)} type='password'/>
            <button onClick={login}  type='submit'  className='login_signButton'>SignIn</button>
            </form>
           
            <button onClick={register}  className='login_regicterButton'>Create your Account</button>
          </div>
        </div>
    )
}

export default Login
