import unified from 'unified'
import parse from 'uniorg-parse'
import mutate from 'uniorg-rehype'
import html from 'rehype-stringify'
import Autolinker from 'autolinker'
import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'
import katex from 'rehype-katex'

export type OrgString = string
export type HTMLString = string

export default class Parser {
  private static LINK_OPTION: unified.Settings = {
    behavior: 'wrap'
  }

  private static async orgToHTMLString(orgString: OrgString): Promise<HTMLString> {
    const body = await unified()
      .use(parse)
      .use(mutate)
      .use(katex as any)
      .use(slug)
      .use(link, this.LINK_OPTION)
      .use(html as any, { allowDangerousHtml: true })
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
