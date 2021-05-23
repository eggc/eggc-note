import fs from 'fs'
import { join } from 'path'
import lineByLine from 'n-readlines'

class OrgManager {
  constructor(_basePath) {
    this.basePath = _basePath || join(process.cwd(), 'orgfiles')
  }

  getTags(filePath) {
    const liner = new lineByLine(filePath.toString())

    // とりあえず 20 行探索して見つからなければ諦める
    for(let i = 0; i<20; i++) {
      let line = liner.next().toString()

      if (line.startsWith("#+TAGS:")) {
        const tags = line.split(' ')
        tags.shift()
        return tags
      }
    }

    return []
  }

  getPosts() {
    let files
    files = fs.readdirSync(this.basePath, { withFileTypes: true })
    files = files.filter((file) => file.isFile())

    return files.map((file) => {
      const name = file.name.slice(0,-4) // 拡張子を消す
      const tags = this.getTags(join(this.basePath, file.name))
      return { name, tags }
    })
  }
}

const orgManager = new OrgManager()

export default () => orgManager.getPosts()
