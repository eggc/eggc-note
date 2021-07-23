import { useState } from 'react'
import Autolinker from 'autolinker'
import Page from '../../components/page'
import getSidebarItems from '../../lib/getSidebarItems'
import rawTweets from '../../lib/raw/tweet'

function renderTweet(tweet) {
  const date = tweet.created_at

  return (
    <div className={`row month-${date.getMonth() + 1}`} key={tweet.id}>
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
  const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 'full']
  const [year, setYear] = useState(years[years.length - 1])
  const onChangeYear = (event) => { setYear(event.target.value) }
  const tweets = props.tweets

  // 日付の型変換を行う
  tweets.forEach((tweet) => tweet.created_at = new Date(tweet.created_at))

  return (
    <Page {...props}>
      <h1 className="page-title">Twitter Archives</h1>
      <div className="btn-group" role="group">
        {years.map((y) => {
          return (
            <>
              <input onClick={onChangeYear} type="radio" name="year-radio" className="btn-check" id={`year-${y}`} value={y} defaultChecked={y==year}/>
              <label className="btn btn-outline-primary" htmlFor={`year-${y}`}>{y}</label>
            </>
          )
        })}
      </div>

      {tweets.filter((tweet) => year == 'full' || tweet.created_at.getFullYear() == year).map(renderTweet)}
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
      created_at: date.getTime()
    }
  }).sort((a, b) => a.created_at - b.created_at)

  return {
    props: { tree, tweets }
  }
}
