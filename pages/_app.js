import '../styles/globals.css';
import Head from 'next/head';
// imports pour redux toolkit
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import composants
import SignUp from '../components/SignUp';
import Tweet from '../components/Tweet';
// Forçage style css pour modal
import 'antd/dist/antd.css'
// import reducers
import users from '../reducers/users';

const store = configureStore({
  reducer: { users }, // init reducer: { bookmarks, user }, <---------------- noter reducer qd ils seront faits
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

/* Initial
import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
<Image class src={"/imglogin.png"} width={600} height={314}/>
*/