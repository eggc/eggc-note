import 'styles/globals.scss'
import 'prismjs/themes/prism-tomorrow.css';
import { AppProps } from 'next/app'
import Head from 'next/head'

const AppTitle = "EGGC NOTE"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{AppTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component appTitle={AppTitle} {...pageProps} />
    </>
  )
}
