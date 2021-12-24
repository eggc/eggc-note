import Page from '../../components/page'
import getSidebarItems from '../../lib/getSidebarItems'
import TwitterAPI from '../../lib/TwitterAPI'

function renderTweet(tweet) {
  const date = new Date(tweet.created_at)
  return (
    <li key={tweet.id}>
      <p>{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</p>
      <p>{tweet.text}</p>
      <ul>{tweet.media && tweet.media.map(renderMedia)}</ul>
    </li>
  )
}

function renderMedia(media) {
  const url = media.url || media.preview_image_url

  return (
    <li key={media.media_key}>
      <a href={url}>{url}</a>
    </li>
  )
}

export default function Index(props) {
  return (
    <Page {...props}>
      <p>twitter</p>
      <ul>{props.tweets.map(renderTweet)}</ul>
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()
  const tweets = await TwitterAPI.getTweets()

  return {
    props: { tree, tweets }
  }
}
