import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'
import mathjax from 'rehype-mathjax'
import Autolinker from 'autolinker'
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

const reorgRehypeOption = {
  // properties がないときは {} にするというパッチ
  // これがないと rehype-slug が正しく動作しない
  h: (tagName, properties) =>
    (...children) => {
      return {
        type: 'element',
        tagName: tagName,
        properties: properties || {},
        children: children
      }
    }
}

async function orgToHTMLText(orgString) {
  const body = await unified()
    .use(parse)
    .use(mutate, reorgRehypeOption)
    .use(slug)
    .use(link, linkOption)
    .use(mathjax)
    .use(html, { allowDangerousHtml: true })
    .process(orgString)

  return body.toString()
}

export default async function parseOrg(orgString) {
  let string = await orgToHTMLText(orgString)

  string = Autolinker.link(string)

  return string
}
