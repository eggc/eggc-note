import fs from 'fs'
import {join} from 'path'

interface Article {
  title: string
  date: Date
  body: string
}

export default class MovableTypeParser {
  read() {
    const path = join(process.cwd(), 'static/eggchicken.hatenadiary.jp.export.txt')
    const fileContent = fs.readFileSync(path, 'utf8')
    return this.parse(fileContent)
  }

  parse(input: string) {
    const articles: Article[] = []

    input.split("--------\n").forEach((block) => {
      if (block.length == 0) { return }
      const [nonBodyBlock, bodyBlock] = block.split("-----\nBODY:\n")
      const body = bodyBlock.slice(0, -5)

      const attributes = nonBodyBlock.split("\n")
      const title = attributes[1].slice(7)
      const date = new Date(attributes[6].slice(6))

      articles.push({
        title: title,
        date: date,
        body: body
      })
    })

    return articles
  }
}
