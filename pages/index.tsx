import Link from 'next/link'
import Page from 'components/Page'

export default function Index(props: any) {
  return (
    <Page {...props}>
      <ul>
        <li><Link href="/memo">memo</Link></li>
        <li><Link href="/labo/anime_js">anime.js</Link></li>
        <li><Link href="/labo/tweets">twitter-api</Link></li>
        <li><Link href="/labo/tweets/archives">twitter-archives</Link></li>
        <li><Link href="/diary/4th">4th</Link></li>
        <li><Link href="/diary/3rd">3rd</Link></li>
      </ul>
    </Page>
  )
}
