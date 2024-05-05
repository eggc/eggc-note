import Page from 'components/Page'

export default function Index(props: any) {
  const pageProps = Object.assign({}, props, { noSidebar: true })

  return (
    <Page {...pageProps}>
      <p>このサイトは eggc(Eguchi Ken) の自己紹介用のページです。</p>

      <h2>好きなもの</h2>
      <ul>
        <li>Emacs</li>
        <li>Ruby</li>
        <li>ゲーム</li>
        <li>漫画</li>
      </ul>
      <h2>各種アカウント</h2>
      <ul>
        <li>Twitter: <a href="https://twitter.com/eggc0">https://twitter.com/eggc0</a></li>
        <li>GitHub: <a href="https://github.com/eggc">https://github.com/eggc</a></li>
        <li>Qiita: <a href="https://qiita.com/eggc">https://qiita.com/eggc</a></li>
        <li>Zenn: <a href="https://zenn.dev/eggc">https://zenn.dev/eggc</a></li>
        <li>AtCoder: <a href="https://atcoder.jp/users/eggc">https://atcoder.jp/users/eggc</a></li>
      </ul>
    </Page>
  )
}
