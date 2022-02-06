import { useState } from 'react'
import Autolinker from 'autolinker'
import Page from '../../../components/page'
import YearRadioGroup from '../../../components/year_radio_group'
import rawTweets from '../../../lib/raw/tweet'

function renderTweet(tweet) {
  const date = tweet.created_at

  return (
    <div className={`row row-month month-${date.getMonth() + 1}`} key={tweet.id}>
      <div className="col-lg-10">
      <span dangerouslySetInnerHTML={{ __html: Autolinker.link(tweet.text)}}></span>
      </div>
      <div className="col-lg-2 d-none d-lg-block">
        <span className="text-muted">{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

export default function Index(props) {
  const [year, setYear] = useState('ALL')
  const onChangeYear = (event) => { setYear(event.target.value) }
  const tweets = props.tweets

  // 日付の型変換を行う
  tweets.forEach((tweet) => tweet.created_at = new Date(tweet.created_at))

  return (
    <Page {...props}>
      <h1 className="page-title">Twitter Archives</h1>
      <YearRadioGroup year={year} onChangeYear={onChangeYear} />
      {tweets.filter((tweet) => year == 'ALL' || tweet.created_at.getFullYear() == year).map(renderTweet)}
    </Page>
  )
}

export async function getStaticProps() {
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
      created_at: date.getTime()
    }
  }).sort((a, b) => a.created_at - b.created_at)

  return {
    props: { tweets }
  }
}
