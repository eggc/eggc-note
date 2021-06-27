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

  getPosts(directory: string = '', recursive?: boolean): Array<Post> {
    const files = this._getFiles(directory, recursive).map((file) => {
      const name = file.name.slice(0, -4) // 拡張子を消す
      const tags = this._getTags(file.path)

      const post = new Post(name, '', join(directory, file.name), 'orgfile')
      post.setTags(tags)
      return post
    })

    const directories = this._getDirectories(directory, recursive).map((dir) => {
      const post = new Post(dir.name, '', join(directory, dir.name), 'directory')
      return post
    })

    return files.concat(directories)
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

  _getFiles(directory: string, recursive?: boolean) {
    const result = []

    this._readDirectory(directory).forEach((file) => {
      if (file.isFile()) {
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

  _getDirectories(directory: string, recursive?: boolean) {
    const result = []

    this._readDirectory(directory).forEach((file) => {
      if (file.isDirectory()) {
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

  _readDirectory(directory: string) {
    const path = join(this.basePath, directory)

    try {
      return fs.readdirSync(path, {withFileTypes: true})
    } catch (e) {
      return []
    }
  }
}
