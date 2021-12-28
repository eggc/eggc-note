import Link from 'next/link'
import Page from '../components/page'
import getSidebarItems from '../lib/getSidebarItems'

export default function Index(props) {
  return (
    <Page {...props}>
      <ul>
        <li><Link href="/tweets">tweets</Link></li>
        <li><Link href="/tweets/archives">tweets/archives</Link></li>
      </ul>
      <h2>diary</h2>
        <li><Link href="/diary/4th">4th</Link></li>
        <li><Link href="/diary/3rd">3rd</Link></li>
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()

  return {
    props: { tree }
  }
}
