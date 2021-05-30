import fs from 'fs'
import { join } from 'path'
import File from './File'

export default class FileReader {
  rootPath: string
  root: any

  constructor() {
    this.rootPath = join(process.cwd(), 'orgfiles')
  }

  tree() {
    return this.readDirectory('/')
  }

  // 本当は Dirent だが、型定義がどこにもないのでとりあえず any にした
  readDirectory(...decendants: string[]): any {
    const children: any = []
    const path = join(this.rootPath, ...decendants)
    const dirents = fs.readdirSync(path, { withFileTypes: true })

    dirents.forEach((dirent) => {
      if (dirent.isDirectory()) {
        children.push(this.readDirectory(...decendants, dirent.name))
      } else {
        children.push(new File(join(path, dirent.name)))
      }
    })

    return new File(path, children)
  }
}
