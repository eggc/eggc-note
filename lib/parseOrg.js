import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'
import Autolinker from 'autolinker'

import rehype from 'rehype'
import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'

const linkOption = {
  behavior: 'wrap',
  content: {
    type: 'element',
    tagName: 'span',
    properties: { className: [''] },
    children: []
  }
}

async function orgToHTMLText(orgString) {
  const body = await unified()
    .use(parse)
    .use(mutate)
    .use(html, { allowDangerousHtml: true })
    .process(orgString)

  return body.toString()
}

async function decorateHTML(htmlString) {
  const body = await rehype()
    .data('settings', {fragment: true})
    .use(slug)
    .use(link, linkOption)
    .process(htmlString)

  return body.toString()
}

export default async function parseOrg(orgString) {
  let string = await orgToHTMLText(orgString)

  string = await decorateHTML(string)
  string = Autolinker.link(string)

  return string
}
