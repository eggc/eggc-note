import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'
import Autolinker from 'autolinker'

import rehype from 'rehype'
import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'
import highlight from 'rehype-highlight'
import lisp from "highlight.js/lib/languages/lisp";
import go from "highlight.js/lib/languages/go";

const linkOption = {
  behavior: 'wrap',
  content: {
    type: 'element',
    tagName: 'span',
    properties: { className: [''] },
    children: []
  }
}

const highlightOption = {
  languages: {
    lisp: lisp,
    go: go
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
    .use(highlight)
    .process(htmlString)

  return body.toString()
}

export default async function parseOrg(orgString) {
  let string = await orgToHTMLText(orgString)

  string = await decorateHTML(string)
  string = Autolinker.link(string)

  return string
}
