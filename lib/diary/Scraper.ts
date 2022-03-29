import axios, {AxiosResponse} from 'axios'
import {JSDOM} from 'jsdom'

export type Path = string
export type RawEntry = string

export default class Scraper {
  static async getPaths(): Promise<Path[]> {
    const response: AxiosResponse = await axios.get("https://github.com/eggc/memo")
    const dom = new JSDOM(response.data)
    const nodeList = dom.window.document.querySelectorAll("a[href^='/eggc/memo/blob/main/']")
    const paths = Array.from(nodeList).map((node) => {
      const path = node.getAttribute("href")
      if(path == null) {
        throw "パスが取得できませんでした"
      } else {
        return path.replace(/\/blob\//g, "/")
      }
    })
    return paths
  }

  static async getRawEntry(path: Path): Promise<RawEntry> {
    const url: string = "https://raw.githubusercontent.com" + path
    const response: AxiosResponse = await axios.get(url)
    return response.data
  }
}
