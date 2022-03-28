import Scraper, {Path, RawEntry} from './Scraper'
import Entry from './Entry'

export default class EntriesBuilder {
  static async build(): Promise<Entry[]> {
    const paths: Path[] = await Scraper.getPaths()
    const rawEntries: RawEntry[] = await Promise.all(paths.map(Scraper.getRawEntry))
    const result: Entry[] = []

    for(let i=0; i < paths.length; i++) {
      result.push(new Entry(paths[i], rawEntries[i]))
    }

    return result
  }
}
