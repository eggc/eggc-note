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
}
