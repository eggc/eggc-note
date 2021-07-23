import Autolinker from 'autolinker'
import Page from '../../components/page'
import getSidebarItems from '../../lib/getSidebarItems'
import rawTweets from '../../lib/raw/tweet'

function renderTweet(tweet) {
  const date = new Date(tweet.created_at)
  return (
    <div className={`row gy-4 ${tweet.user ? 'retweet' : ''}`} key={tweet.id}>
      <div className="col-8">
      <span dangerouslySetInnerHTML={{ __html: Autolinker.link(tweet.text)}}></span>
      </div>
      <div className="col-2">
        <span className="text-muted">{tweet.user}</span>
      </div>
      <div className="col-2">
        <span className="text-muted">{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

export default function Index(props) {
  return (
    <Page {...props}>
      <h1 className="page-title">Twitter Archives</h1>
      {props.tweets.map(renderTweet)}
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()
  const tweets = rawTweets.filter((data) => {
    // メンションは消す
    return !data.tweet.full_text.startsWith("@")
  }).map((data, i) => {
    const tweet = data.tweet
    const matches = tweet.full_text.match("RT (@.*): ")
    const text = matches ? tweet.full_text.slice(matches[0].length) : tweet.full_text

    return {
      id: i,
      user: matches ? matches[1] : '',
      text: text,
      created_at: tweet.created_at
    }
  })

  return {
    props: { tree, tweets }
  }
}
