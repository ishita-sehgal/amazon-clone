import React, {useState} from 'react';
import {Link ,useHistory} from 'react-router-dom';
import './Login.css';
 import {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from './firebase';
// import {projectAuth} from './firebase';
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const signIn=(e)=>{
        //FIREBASE USED
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(
            auth=>{
                if(auth){history.push('/');}
            }
        ).catch(error=>alert(error.message));
       
    }
    const register=(e)=>{
        //FIREBASE USED
        e.preventDefault();
        // console.log(typeof auth);
        
        // projectAuth.createUserWithEmailAndPassword(email,password)
      createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error=>alert(error.message));
    }
  return (
 
  <div className='login'>
      <Link to='/'>
<img  className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
</Link>
<div className='login__container'>
    <h1>Sign-in</h1>
    <form>
        <h5 >E-mail</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button className='login__button' type='submit' onClick={signIn}>Sign-in</button>
    </form>
    <p>
     Bu signing-in you agree to the AMAZON CLONE Conditions of use & sale. Please see our privacy notice,our Cookies notice and our Interest-Based Ads notice.   
    </p>
<button className='register_button' type='submit' onClick={register}>Create your Amazon account</button>
</div>
  </div>
  
   ) ;
}

export default Login;
