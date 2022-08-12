import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

// only can import global CSS from inside pages/_app.js file
// can place global css anywhere