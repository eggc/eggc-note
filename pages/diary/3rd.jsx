import Autolinker from 'autolinker'
import Page from '../../components/page'
import MovableTypeParser from '../../lib/MovableTypeParser'
import getSidebarItems from '../../lib/getSidebarItems'

function renderArticle(article) {
  const date = article.created_at

  return (
    <div className={`row row-month month-${date.getMonth() + 1}`} key={article.id}>
      <div className="col-lg-10">
        <h2>{article.title}</h2>
        <span dangerouslySetInnerHTML={{ __html: Autolinker.link(article.body)}}></span>
      </div>
      <div className="col-lg-2 d-none d-lg-block">
        <span className="text-muted">{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

export default function Index(props) {
  const articles = props.articles

  articles.forEach((article) => article.created_at = new Date(article.created_at))

  return (
    <Page {...props}>
      <h1 className="page-title">savepoint628</h1>
      <p>2013〜2019の手記</p>
      {articles.map(renderArticle)}
    </Page>
  )
}

export async function getStaticProps() {
  const parser = new MovableTypeParser()
  const tree = await getSidebarItems()
  const articles = parser.read().map((data, i) => {
    return {
      id: i,
      title: data.title,
      body: data.body,
      created_at: data.date.getTime()
    }
  })

  return {
    props: { tree, articles }
  }
}
