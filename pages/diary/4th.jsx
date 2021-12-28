import Page from '../../components/page'
import Post from '../../components/post'
import FileReader from '../../lib/FileReader'
import getSidebarItems from '../../lib/getSidebarItems'

export default function Index(props) {
  return (
    <Page {...props}>
      <Post post={props.post} />
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()
  const fileReader = new FileReader()
  const file = await fileReader.readFile('diary')
  const post = file.serialize()

  return {
    props: { post, tree }
  }
}
