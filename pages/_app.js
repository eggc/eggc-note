import '../styles/globals.scss'
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
