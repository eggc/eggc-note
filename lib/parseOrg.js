import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'
import Autolinker from 'autolinker';

export default async function parseOrg(orgString) {
  const body = await unified()
    .use(parse)
    .use(mutate)
    .use(html, { allowDangerousHtml: true })
    .process(orgString)

  const string = Autolinker.link(body.toString())

  return string
}
