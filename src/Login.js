import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';




function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      }).catch(error => (error.message));
  } 
  return (
    <div className='login'>
      <div className='login_logo'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"/>
        <img className='textlogo' src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"/>
      </div>
      <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
