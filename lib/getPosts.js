import fs from 'fs'
import { join } from 'path'
import org from 'org'

export default function getPosts() {
  const directory = join(process.cwd(), 'orgfiles')
  const fileNames = fs.readdirSync(directory)

  return fileNames.map((fileName) => {
    const filePath = join(directory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const parser = new org.Parser()
    const body = parser.parse(fileContent).convert(org.ConverterHTML).toString()

    return {title: fileName, body: body}
  })
}
