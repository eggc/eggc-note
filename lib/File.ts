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
    return match ? match[1] : ''
  }
}
