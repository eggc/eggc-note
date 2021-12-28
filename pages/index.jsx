import Link from 'next/link'
import Page from '../components/page'
import getSidebarItems from '../lib/getSidebarItems'

export default function Index(props) {
  return (
    <Page {...props}>
      <h2>diary</h2>
      <ul>
        <li><Link href="/diary/4th">4th</Link></li>
        <li><Link href="/diary/3rd">3rd</Link></li>
      </ul>
      <h2>labo</h2>
      <ul>
        <li><Link href="/labo/anime_js">anime.js</Link></li>
        <li><Link href="/labo/tweets">twitter-api</Link></li>
        <li><Link href="/labo/tweets/archives">twitter-archives</Link></li>
      </ul>
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()

  return {
    props: { tree }
  }
}
