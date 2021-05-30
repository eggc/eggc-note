import { extname, basename } from 'path'

export default class File {
  static ROOT_NAME: string = 'orgfiles'
  fullPath: string
  children?: File[]

  constructor(fullPath: string, children?: File[]) {
    this.fullPath = fullPath
    this.children = children
  }

  extname(): string {
    if (this.isFile()) {
      return extname(this.fullPath).substr(1)
    } else {
      return 'directory'
    }
  }

  name(): string {
    if (this.isFile()) {
      return basename(this.fullPath, extname(this.fullPath))
    } else {
      return basename(this.fullPath)
    }
  }

  isFile(): boolean {
    return this.children === undefined
  }

  path(): string {
    const match = this.fullPath.match(/\/orgfiles\/(.*)/)
    if (match) {
      return this.isFile() ? match[1].slice(0, -4) : match[1]
    } else {
      throw new Error();
    }
  }
}
