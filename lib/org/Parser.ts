import {unified} from 'unified'
import parse from 'uniorg-parse'
import mutate from 'uniorg-rehype'
import html from 'rehype-stringify'
import highlight from 'rehype-highlight'
import highlightLisp from 'highlight.js/lib/languages/lisp'
import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'
import katex from 'rehype-katex'
import css from 'rehype-add-classes'
import Autolinker from 'autolinker'

export type OrgString = string
export type HTMLString = string

export default class Parser {
  private static LINK_OPTION = {
    behavior: 'wrap'
  }
  private static HIGHLIGHT_OPTION = {
    languages: { "emacs-lisp": highlightLisp },
    ignoreMissing: true
  }

  private static async orgToHTMLString(orgString: OrgString): Promise<HTMLString> {
    const processor = unified()
    processor.use(parse)
    processor.use(mutate)
    processor.use(highlight, this.HIGHLIGHT_OPTION)
    processor.use(katex)
    processor.use(slug)
    processor.use(css, { table: 'table' })
    processor.use(link, this.LINK_OPTION as any)
    processor.use(html, { allowDangerousHtml: true })
    const body = await processor.process(orgString)

    return body.toString()
  }

  private static decorateHTMLString(htmlString: HTMLString): HTMLString {
    return Autolinker.link(htmlString, {
      urls: { tldMatches: false }
    })
  }

  static async parse(orgString: string): Promise<HTMLString> {
    const string = await this.orgToHTMLString(orgString)
    return this.decorateHTMLString(string)
  }
}
