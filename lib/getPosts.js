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

  getFiles(directory = '') {
    const files = fs.readdirSync(join(this.basePath, directory), { withFileTypes: true })
    const result = []

    files.forEach((file) => {
      if(file.isFile()) {
        result.push({
          name: join(directory, file.name),
          path: join(this.basePath, directory, file.name)
        })
      } else {
        this.getFiles(join(directory, file.name)).forEach((file) => result.push(file))
      }
    })

    return result
  }

  getPosts() {
    this.posts ||= this.getFiles().map((file) => {
      const name = file.name.slice(0, -4) // 拡張子を消す
      const tags = this.getTags(file.path)
      return { name, tags }
    })

    return this.posts
  }
}

const orgManager = new OrgManager()

export default () => orgManager.getPosts()
