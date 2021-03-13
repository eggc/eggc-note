import '../styles/globals.css'
import 'bulma/css/bulma.css'
import 'prismjs/themes/prism.css';

import { useEffect, Fragment } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Eggc.diary</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default MyApp
