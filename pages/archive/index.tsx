import Link from 'next/link'
import Page from 'components/Page'

export default function Index(props: any) {
  return (
    <Page {...props}>
      <ul>
        <li><Link href="/archive/4th">4th</Link></li>
        <li><Link href="/archive/3rd">3rd</Link></li>
      </ul>
    </Page>
  )
}
