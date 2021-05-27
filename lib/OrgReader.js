import fs from 'fs'
import { join } from 'path'
import lineByLine from 'n-readlines'
import parseOrg from './parseOrg'

export default class OrgReader {
  constructor(_basePath) {
    this.basePath = _basePath || join(process.cwd(), 'orgfiles')
  }

  async getPost(postName) {
    try {
      const filePath = join(this.basePath, `${postName}.org`)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const body = await parseOrg(fileContent)

      return { title: postName, body: body}
    } catch(e) {
      return { title: postName }
    }
  }

  getPosts(directory = '', recursive = false) {
    const files = this._getFiles(directory, recursive).map((file) => {
      const name = file.name.slice(0, -4) // 拡張子を消す
      const tags = this._getTags(file.path)
      return { name, tags }
    })

    const directories = this._getDirectories(directory, recursive).map((dir) => {
      const name = `${dir.name}/`
      return { name }
    })

    return files.concat(directories)
  }

  _getTags(filePath) {
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

  _getFiles(directory, recursive) {
    const result = []

    this._readDirectory(directory).forEach((file) => {
      if(file.isFile()) {
        result.push({
          name: join(directory, file.name),
          path: join(this.basePath, directory, file.name)
        })
      } else if (recursive) {
        this._getFiles(join(directory, file.name), true).forEach((file) => result.push(file))
      }
    })

    return result
  }

  _getDirectories(directory, recursive) {
    const result = []

    this._readDirectory(directory).forEach((file) => {
      if(file.isDirectory()) {
        result.push({
          name: join(directory, file.name),
          path: join(this.basePath, directory, file.name)
        })

        if (recursive) {
          this._getDirectories(join(directory, file.name), true).forEach((file) => result.push(file))
        }
      }
    })

    return result
  }

  _readDirectory(directory) {
    const path = join(this.basePath, directory)

    try {
      return fs.readdirSync(path, { withFileTypes: true })
    } catch(e) {
      return []
    }
  }
}
