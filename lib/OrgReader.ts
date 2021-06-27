import fs from 'fs'
import {join} from 'path'
import lineByLine from 'n-readlines'
import OrgParser from './OrgParser'
import Post from './Post'

export default class OrgReader {
  basePath: string

  constructor(basePath: string | undefined) {
    this.basePath = basePath || join(process.cwd(), 'orgfiles')
  }

  async getPost(postName: string) {
    const orgParser = new OrgParser()

    try {
      const filePath = join(this.basePath, `${postName}.org`)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const body = await orgParser.parse(fileContent)

      return {title: postName, body: body}
    } catch (e) {
      return {title: postName, path: postName}
    }
  }

  _getTags(filePath: string) {
    const liner = new lineByLine(filePath.toString())

    // とりあえず 20 行探索して見つからなければ諦める
    for (let i = 0; i < 20; i++) {
      let line = liner.next().toString()

      if (line.startsWith("#+TAGS:")) {
        const tags = line.split(' ')
        tags.shift()
        return tags
      }
    }

    return []
  }
}
