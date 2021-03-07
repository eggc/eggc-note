import '../styles/globals.css'
import 'bulma/css/bulma.css'
import 'highlight.js/styles/github.css';

import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
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
