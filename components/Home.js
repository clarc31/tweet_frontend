
import styles from '../styles/Home.module.css';
// imports pour <Image />
import Image from 'next/image';
// import module Modal pour fenêtres signup et signin
import { Modal } from 'antd';
// import pour états d'activation des fenêtres signup et signin
import { useEffect, useState } from 'react';

// import des composants
import SignUp from './SignUp';

function Home() {
  // Etat pour cacher/afficher fenêtre signup
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  // Action au onClick() de la div <button>
    console.log('Home, L21', isSignUpVisible) //<----------------------------------
    console.log('Home, L21', isSignInVisible) //<----------------------------------
    
    let modalSignUp;
    if(isSignUpVisible) {
      modalSignUp = (
        <div className={styles.registerContainer}>
          <SignUp/>
        </div>
      )
    }
  console.log('Home, L28', modalSignUp) //<-----------------------------------------
  /*
     <p>Create your Hackatweet account</p>
      <input type='text' placeholder='Firstname' id='signUpFirstName' onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName}/>
      <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
      <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
      <button id="register" onClick={() => handleRegister()}>Sign up</button>
  */
  return (
    <div className={styles.page}>
      <div className={styles.containerleft}>
      </div>
      <div className={styles.containerright}>
        <div className={styles.logo}>
          <Image src={"/twitter_logo.png"} width={50} height={37}/>
        </div>

        {isSignUpVisible && <div id="react-modals">
          <Modal getContainer='#react-modals' className={styles.modal} closable={false} visible={isSignUpVisible} footer={null}>
            {modalSignUp}
          </Modal>
        </div>}

        <div className={styles.haut}>
          <div className={styles.bigletters}>
            <div>See what's</div>
            <div>happening</div>
          </div>
          <div className={styles.join}>
            <p >Join Hackatweet today.</p>
          </div>
          <button className={styles.btnsignup} onClick={()=>setIsSignUpVisible(!isSignUpVisible)}>Sign up</button>
          <div className={styles.already}>
            <p>Already have an account ?</p>
          </div>
          <button className={styles.btnsignin} onClick={()=>setIsSignInVisible(!isSignInVisible)}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

// <Image className= {styles.wall} src={"/imglogin.png"} width={670} height={964}/>

/* initial
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
 
*/