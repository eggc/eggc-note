import Page from 'components/Page'
import Post from '../../components/post'
import FileReader from '../../lib/FileReader'

export default function Index(props) {
  return (
    <Page {...props}>
      <Post post={props.post} />
    </Page>
  )
}

export async function getStaticProps() {
  const fileReader = new FileReader()
  const file = await fileReader.readFile('diary')
  const post = file.serialize()

  return {
    props: { post }
  }
}
