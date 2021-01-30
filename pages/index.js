import Head from 'next/head'
import Posts from '../components/posts'

export default function Index({posts}) {
  return (
    <div>
      <Head>
        <title>diary.eggc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Posts posts={posts} />
      </main>
      <footer>
      </footer>
    </div>
  )
}

export async function getStaticProps() {

  return {
    props: {
      posts: [{title: "nextjs", body: "hogehoge"}]
    }
  }
}
