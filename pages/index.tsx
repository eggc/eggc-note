import Link from 'next/link'
import Page from 'components/Page'

export default function Index(props: any) {
  return (
    <Page {...props}>
      <ul>
        <li><Link href="/memo">memo</Link></li>
        <li><Link href="/labo">labo</Link></li>
        <li><Link href="/archive">archive</Link></li>
      </ul>
    </Page>
  )
}