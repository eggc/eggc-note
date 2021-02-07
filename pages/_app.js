import '../styles/globals.css'
import 'bulma/css/bulma.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
