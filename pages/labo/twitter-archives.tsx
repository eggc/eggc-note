import { useState } from 'react'
import Autolinker from 'autolinker'
import Page, {PageProps} from 'components/Page'
import YearRadioGroup from 'components/year_radio_group'
import {Tweet} from 'lib/TwitterAPI'
import rawTweets from 'lib/raw/tweet'

type Props = PageProps & {
  tweets: Tweet[]
}

function renderTweet(tweet: Tweet) {
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

export default function Index(props: Props) {
  const [year, setYear] = useState('ALL')
  const onChangeYear = (event: any) => { setYear(event.target.value) }
  const tweets = props.tweets

  // 日付の型変換を行う
  tweets.forEach((tweet) => tweet.created_at = new Date(tweet.created_at))

  return (
    <Page {...props}>
      <h1 className="page-title">Twitter Archives</h1>
      <YearRadioGroup year={year} onChangeYear={onChangeYear} />
      {tweets.filter((tweet) => year == 'ALL' || tweet.created_at.getFullYear().toString() == year).map(renderTweet)}
    </Page>
  )
}

export async function getStaticProps() {
  const tweets = rawTweets.filter((data: any) => {
    // メンションとリツイートは消す
    return !data.tweet.full_text.startsWith("@") && !data.tweet.full_text.startsWith("RT @")
  }).map((data: any, i: number) => {
    const tweet = data.tweet
    const text = tweet.full_text
    const date = new Date(tweet.created_at)

    return {
      id: i,
      text: text,
      created_at: date.getTime()
    }
  }).sort((a: any, b: any) => a.created_at - b.created_at)

  return {
    props: { tweets }
  }
}
