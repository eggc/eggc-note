import {Path, RawEntry} from './Scraper'

export default class Entry {
  public raw: RawEntry
  public path: Path
  public name: string

  constructor(path: Path, raw: RawEntry) {
    const match = path.match(/\/([^/]*)\./)

    if(match) {
      this.raw = raw
      this.path = path
      this.name = match[1]
    } else {
      throw "Cannot parse path"
    }
  }
}
