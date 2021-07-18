import needle from 'needle'

export default class TwitterAPI {
  static BEARER_TOKEN: string = process.env.TWITTER_API_BEARER_TOKEN as string
  static TWEETS_URL: string = "https://api.twitter.com/2/tweets/search/recent"

  static async getTweets() {
    const response = await this.searchRecent()
    const tweets = this.buildTweet(response)

    console.dir(tweets, { depth: null })

    return tweets;
  }

  static async searchRecent() {
    const params = {
      query: 'from:eggc0',
      expansions: 'attachments.media_keys',
      'tweet.fields': 'created_at,attachments',
      'media.fields': 'type,preview_image_url,width,height,url'
    }

    const options = {
      headers: { authorization: `Bearer ${TwitterAPI.BEARER_TOKEN}` }
    }

    const response = await needle('get', TwitterAPI.TWEETS_URL, params, options)
    return response
  }

  static buildTweet(response: { body: any }) {
    const tweets = response.body.data
    const included_medias = response.body.includes.media
    for(let i=0; i<tweets.length; i++) {
      if(!tweets[i].attachments) {
        continue
      }

      tweets[i].media = tweets[i].attachments.media_keys.map((media_key: string) => {
        return included_medias.find((media: any) => media.media_key == media_key)
      })

      delete tweets[i].attachments
    }
    return tweets
  }
}
