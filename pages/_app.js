import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/cardStyle.css';

require('typeface-nunito');

function MyApp({ Component, pageProps }) {
  return <Component { ...pageProps } />;
}

export default MyApp;
