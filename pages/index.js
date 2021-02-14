import Posts from '../components/posts'
import getPostNames from '../lib/getPostNames'
import Link from 'next/link'

export default function Index({postNames}) {
  const renderPostLinks = (name, i) => {
    return <li key={i}><Link href={`/posts/${name}`}>{name}</Link></li>
  }

  return (
    <section>
      <div class="container">
        <h1 class="title">Posts</h1>
        <ul>
          {postNames.map(renderPostLinks)}
        </ul>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  return {
    props: {
      postNames: getPostNames()
    }
  }
}
