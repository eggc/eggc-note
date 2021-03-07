import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'

export default async function parseOrg(orgString) {
  const body = await unified()
    .use(parse)
    .use(mutate)
    .use(html, { allowDangerousHtml: true })
    .process(orgString)

  return body.toString()
}
