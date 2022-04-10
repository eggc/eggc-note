import Page, {PageProps} from 'components/Page'
import TwitterAPI, {Tweet, Media} from 'lib/TwitterAPI'

type Props = PageProps & {
  tweets: Tweet[]
}

function renderTweet(tweet: Tweet) {
  const date = new Date(tweet.created_at)
  return (
    <li key={tweet.id}>
      <p>{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</p>
      <p>{tweet.text}</p>
      <ul>{tweet.media && tweet.media.map(renderMedia)}</ul>
    </li>
  )
}

function renderMedia(media: Media) {
  const url = media.url || media.preview_image_url

  return (
    <li key={media.media_key}>
      <a href={url}>{url}</a>
    </li>
  )
}

export default function Index(props: Props) {
  return (
    <Page {...props}>
      <p>twitter</p>
      <ul>{props.tweets.map(renderTweet)}</ul>
    </Page>
  )
}

export async function getStaticProps() {
  const tweets = await TwitterAPI.getTweets()

  return {
    props: { tweets }
  }
}
