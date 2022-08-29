import 'styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const AppTitle = "eggc.net"

export default function MyApp({ Component, pageProps }: AppProps) {
  // bootstrap は document を参照しているので nextjs の静的ビルドでエラーを出さないようにする
  // https://www.kindacode.com/article/how-to-correctly-use-bootstrap-5-in-next-js/
  React.useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <>
      <React.StrictMode>
        <Head>
          <title>{AppTitle}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component appTitle={AppTitle} {...pageProps} />
      </React.StrictMode>
    </>
  )
}
