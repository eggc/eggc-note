import fs from "fs"
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
  private static PATH: string = `/tmp/html-entries-builder.txt`

  static async build(): Promise<HTMLEntry[]> {
    if (process.env.NODE_ENV == 'production') {
      this.entriesCache = await this._build()
    } else if (this.entriesCache == undefined) {
      try {
        const data = fs.readFileSync(this.PATH)
        this.entriesCache = JSON.parse(data.toString())
      } catch {
        this.entriesCache = await this._build()
        const fd = fs.openSync(this.PATH, "w");
        fs.writeSync(fd, JSON.stringify(this.entriesCache))
      }
    }

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
