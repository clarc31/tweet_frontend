// imports à réaliser
import styles from '../styles/SignUp.module.css';
import { useEffect, useState } from 'react';

function SignUp() {
    const [signUpFirstName, setSignUpFirstName] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    return (
        <div className={styles.windowSignUp}>
            <p>Create your Hackatweet account</p>
            <input type='text' placeholder='First name' id='signUpFirstName' onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName}/>
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <button id="register" onClick={() => handleRegister()}>Sign up</button>
        </div>
    )
}

export default SignUp;