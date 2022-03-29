import unified from 'unified'
import parse from 'reorg-parse'
import mutate from 'reorg-rehype'
import html from 'rehype-stringify'
import mathjax from 'rehype-mathjax'
import Autolinker from 'autolinker'
import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'

export type OrgString = string
export type HTMLString = string

export default class Parser {
  private static LINK_OPTION: unified.Settings = {
    behavior: 'wrap',
    content: {
      type: 'element',
      tagName: 'span',
      properties: { className: [''] },
      children: []
    }
  }

  private static REORG_REHYPE_OPTION: unified.Settings = {
    h: (tagName: any, properties: any) =>
      (...children: any[]) => {
        return {
          type: 'element',
          tagName: tagName,
          properties: properties || {}, // properties がないときは {} にするというパッチ
          children: children
        }
      }
  }

  private static async orgToHTMLString(orgString: OrgString): Promise<HTMLString> {
    const body = await unified()
      .use(parse)
      .use(mutate, this.REORG_REHYPE_OPTION)
      .use(slug)
      .use(link, this.LINK_OPTION)
      .use(mathjax)
      .use(html, { allowDangerousHtml: true })
      .process(orgString)

    return body.toString()
  }

  private static decorateHTMLString(htmlString: HTMLString): HTMLString {
    return Autolinker.link(htmlString)
  }

  static async parse(orgString: string): Promise<HTMLString> {
    const string = await this.orgToHTMLString(orgString)
    return this.decorateHTMLString(string)
  }
}
