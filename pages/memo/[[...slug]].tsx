import MemoClient from 'lib/memo/MemoClient'
import Parser from 'lib/org/Parser'
import Page from 'components/Page'

type Slug = string[] | undefined
type Props = {
  appTitle: string
  entry: string
}

export default function Index(props: Props) {
  const memoItems = []

  return (
    <Page sidebarItems={memoItems} {...props}>
      <div className="col-sm-9 eggc-note-memo" dangerouslySetInnerHTML={{ __html: props.entry }}>
      </div>
    </Page>
  )
}

export async function getStaticProps({ params } ) {
  const slug = params.slug || ['README']
  const node = MemoClient.findNodeBySlug(slug)
  const text = node.read().toString()
  const entry = await Parser.parse(text)

  return {
    props: { entry }
  }
}

export async function getStaticPaths() {
  const paths = MemoClient.slugs().map((slug) => {
    return { params: { slug: slug } }
  })

  return { paths: paths, fallback: false }
}
