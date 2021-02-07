import Posts from '../components/posts'
import getPostNames from '../lib/getPostNames'
import Link from 'next/link'

export default function Index({postNames}) {
  return (
    <ul>
      {postNames.map((name, i) => { return <li key={i}><Link href="/posts">{name}</Link></li> })}
    </ul>
  )
}

export async function getStaticProps() {
  return {
    props: {
      postNames: getPostNames()
    }
  }
}
