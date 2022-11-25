// imports à réaliser
import styles from '../styles/SignUp.module.css';
import { useEffect, useState } from 'react';
import { Button } from 'antd';

// 
import { useDispatch, useSelector } from 'react-redux';
import {closeSignUp} from '../reducers/closeSignUp'

function SignUp() {
    const [signUpFirstName, setSignUpFirstName] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
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