import {extname, basename} from 'path'

type Serializable = {
  title: string
  path: string
  format: string
  children?: Serializable[],
  body?: string
}

export default class File {
  static ROOT_NAME = 'orgfiles'
  fullPath: string
  children?: File[]
  body?: string

  constructor(fullPath: string, children?: File[], body?: string) {
    this.fullPath = fullPath
    this.children = children
    this.body = body
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

  // props に渡せる形式に変換する
  serialize(): Serializable {
    const object = {
      title: this.name(),
      path: this.path(),
      format: this.extname(),
      children: this.children && this.children.map((c) => c.serialize()),
      body: this.body
    }

    if (!this.children) {
      delete object.children
    }
    if (!this.body) {
      delete object.body
    }

    return object
  }
}
