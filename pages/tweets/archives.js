import { useState } from 'react'
import Autolinker from 'autolinker'
import Page from '../../components/page'
import getSidebarItems from '../../lib/getSidebarItems'
import rawTweets from '../../lib/raw/tweet'

function renderTweet(tweet) {
  const date = new Date(tweet.created_at)

  return (
    <div className={`row`} key={tweet.id}>
      <div className="col-10">
      <span dangerouslySetInnerHTML={{ __html: Autolinker.link(tweet.text)}}></span>
      </div>
      <div className="col-2">
        <span className="text-muted">{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

export default function Index(props) {
  const tweets = props.tweets

  return (
    <Page {...props}>
      <h1 className="page-title">Twitter Archives</h1>
      {tweets.map(renderTweet)}
    </Page>
  )
}

export async function getStaticProps() {
  const tree = await getSidebarItems()
  const tweets = rawTweets.filter((data) => {
    // メンションとリツイートは消す
    return !data.tweet.full_text.startsWith("@") && !data.tweet.full_text.startsWith("RT @")
  }).map((data, i) => {
    const tweet = data.tweet
    const text = tweet.full_text
    const date = new Date(tweet.created_at)

    return {
      id: i,
      text: text,
      created_at: tweet.created_at,
      created_at_int: date.getTime()
    }
  }).sort((a, b) => a.created_at_int - b.created_at_int)

  return {
    props: { tree, tweets }
  }
}
