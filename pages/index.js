import Image from 'next/image'
import Page from '../components/page'
import getSidebarItems from '../lib/getSidebarItems'

export default function Index(props) {
  return (
    <Page {...props}>
      <p>EGGC NOTE</p>
      <Image src="/img/top-image.jpg" width={1000} height={668} />
      <small>
        Photo by <a href="https://unsplash.com/@ashleywedwards?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ashley West Edwards</a> on <a href="https://unsplash.com/photos/wWZzXlDpMog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </small>
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()

  return {
    props: { tree }
  }
}
