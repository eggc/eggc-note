import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'
import Autolinker from 'autolinker'
import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'

export default class OrgParser {
  static LINK_OPTION = {
    behavior: 'wrap',
    content: {
      type: 'element',
      tagName: 'span',
      properties: { className: [''] },
      children: []
    }
  }

  static REORG_REHYPE_OPTION = {
    h: (tagName, properties) =>
      (...children) => {
        return {
          type: 'element',
          tagName: tagName,
          properties: properties || {}, // properties がないときは {} にするというパッチ
          children: children
        }
      }
  }

  async orgToHTMLText(orgString) {
    const body = await unified()
      .use(parse)
      .use(mutate, OrgParser.REORG_REHYPE_OPTION)
      .use(slug)
      .use(link, OrgParser.LINK_OPTION)
      .use(html, { allowDangerousHtml: true })
      .process(orgString)

    return body.toString()
  }

  async parse(orgString) {
    let string = await this.orgToHTMLText(orgString)

    string = Autolinker.link(string)

    return string
  }
}
