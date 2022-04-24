import MemoClient from 'lib/memo/MemoClient'
import Parser from 'lib/org/Parser'
import Page from 'components/Page'
import Sidebar from 'components/Nav/Sidebar'
import {NavItemProps} from 'components/Nav/NavItem'

type Slug = string[] | undefined
type Props = {
  appTitle: string
  entry: string
  sidebarItems: NavItemProps[]
  secondSidebarItems: NavItemProps[]
}

export default function Index(props: Props) {
  const entry = props.entry
  const secondSidebarItems = props.secondSidebarItems

  return (
    <Page {...props}>
      {entry == "" ?
       <Sidebar items={secondSidebarItems}></Sidebar> :
       <div className="col-sm-9 eggc-note-memo" dangerouslySetInnerHTML={{ __html: props.entry }}></div>}
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
  let secondSidebarItems = []
  let entry = ""

  if (!node) {
    throw new Error()
  } else if (node.children.length > 0) {
    secondSidebarItems = MemoClient.navItems(node).children
  } else if (node.key.endsWith(".org")){
    const text = node.read().toString()
    entry = await Parser.parse(text)
  }

  return {
    props: { entry, sidebarItems, secondSidebarItems }
  }
}

export async function getStaticPaths() {
  const paths = MemoClient.slugs().map((slug) => {
    return { params: { slug: slug } }
  })

  return { paths: paths, fallback: false }
}
