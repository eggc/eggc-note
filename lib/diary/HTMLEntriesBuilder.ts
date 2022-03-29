import Entry from './Entry'
import EntriesBuilder from './EntriesBuilder'
import Parser, {HTMLString} from '@lib/org/Parser'

export type HTMLEntry = {
  path: string,
  name: string,
  html: HTMLString
}

export default class HTMLEntriesBuilder {
  private static entriesCache: HTMLEntry[]

  static async build(): Promise<HTMLEntry[]> {
    this.entriesCache ||= await this._build()
    return this.entriesCache
  }

  static async _build(): Promise<HTMLEntry[]> {
    const entries: Entry[] = await EntriesBuilder.build()

    const htmlEntries = await Promise.all(entries.map(async (entry) => {
      const html = await Parser.parse(entry.raw)

      return {
        path: entry.path,
        name: entry.name,
        html: html
      }
    }))

    return htmlEntries
  }
}
