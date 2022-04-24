import MemoClient from 'lib/memo/MemoClient'
import Parser from 'lib/org/Parser'
import Page from 'components/Page'
import {NavItemProps} from 'components/Nav/NavItem'

type Slug = string[] | undefined
type Props = {
  appTitle: string
  entry: string
  sidebarItems: NavItemProps[]
}

export default function Index(props: Props) {
  return (
    <Page {...props}>
      <div className="col-sm-9 eggc-note-memo" dangerouslySetInnerHTML={{ __html: props.entry }}>
      </div>
    </Page>
  )
}

type StaticPropsParams = {
  params: {
    slug?: string[]
  }
}

export async function getStaticProps({ params }: StaticPropsParams) {
  const slug = params.slug || ['README']
  const node = MemoClient.findNodeBySlug(slug)
  const sidebarItems = MemoClient.navItems().children
  let entry = ""

  if (node && node.children.length == 0) {
    const text = node.read().toString()
    entry = await Parser.parse(text)
  }

  return {
    props: { entry, sidebarItems }
  }
}

export async function getStaticPaths() {
  const paths = MemoClient.slugs().map((slug) => {
    return { params: { slug: slug } }
  })

  return { paths: paths, fallback: false }
}
