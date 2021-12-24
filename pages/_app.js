import '../styles/globals.scss'
import 'prismjs/themes/prism-tomorrow.css';

import { useEffect, Fragment } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>EGGC NOTE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
