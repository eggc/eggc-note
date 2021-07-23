import Link from 'next/link'
import Page from '../components/page'
import getSidebarItems from '../lib/getSidebarItems'

export default function Index(props) {
  return (
    <Page {...props}>
      <p>EGGC NOTE</p>
      <ul>
        <li><Link href="/tweets">tweets</Link></li>
        <li><Link href="/tweets/archives">tweets/archives</Link></li>
        <li><Link href="/posts/日記">日記</Link></li>
      </ul>
      <div>Font is マルモニカ by <a href="http://www17.plala.or.jp/xxxxxxx/00ff/">x0y0pxFreeFont</a></div>
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()

  return {
    props: { tree }
  }
}
