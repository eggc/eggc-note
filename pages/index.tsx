import Page from 'components/Page'

export default function Index(props: any) {
  const pageProps = Object.assign({}, props, { noSidebar: true })

  return (
    <Page {...pageProps}>
    </Page>
  )
}
