import '../styles/globals.css'
import 'bulma/css/bulma.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
