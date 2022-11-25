// imports à réaliser
import { useDispatch } from 'react-redux';
import styles from '../styles/SignUp.module.css';
import { useEffect, useState } from 'react';
import { Button } from 'antd';

import { login } from '../reducers/users';
import Tweet from './Tweet';
import Link from 'next/link'
import {useRouter} from 'next/router';



function SignUp() {
    const [signUpFirstName, setSignUpFirstName] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();

    const handleRegister=() => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signUpUsername, firstname: signUpFirstName, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if(data.result) {
                    dispatch(login({token: data.token, username: signUpUsername, canDelete: data.canDelete }))
                    //router.push('/tweet')
                }              
            })
    }
/*
    const delRegister =() => {
        dispatch(closeSignUpWindow(false));
    }
*/
    return (
        <div className={styles.windowSignUp}>
            <div className={styles. line}>
              <p className={styles.text}>Create your Hackatweet account</p>  
              <Button className={styles.delBtn} onClick={() => delRegister()} >X</Button>
            </div>
            
            <input type='text' placeholder='First name' id='signUpFirstName' onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName}/>
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <Button type="primary" id="register" onClick={() => handleRegister()}>Sign up</Button>
        </div>
    )
}

export default SignUp;