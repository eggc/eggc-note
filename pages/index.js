import Posts from '../components/posts'
import getPostNames from '../lib/getPostNames'

export default function Index({postNames}) {
  return (
    <ul>
      {postNames.map((name, i) => { return <li key={i}>{name}</li> })}
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
