import '../styles/globals.css'
import 'bulma/css/bulma.css'
import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import highlight from '../lib/highlight'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    highlight.highlightAll()
  })

  return (
    <div>
      <Head>
        <title>Eggc.diary</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
