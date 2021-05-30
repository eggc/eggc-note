type PostFormat = 'orgfile' | 'directory'

export default class Post {
  title: string
  body: string
  path: string // nextjs 上での記事が対応するパス
  format: PostFormat
  tags: Array<string>

  constructor(title: string, body: string, path: string, format: PostFormat) {
    this.title = title
    this.body = body
    this.format = format

    if (format == 'orgfile') {
      this.path = path.slice(0, -4)
    } else {
      this.path = path
    }

    this.tags = []
  }

  setTags(tags: Array<string>) {
    this.tags = tags
  }
}
