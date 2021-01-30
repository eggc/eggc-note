import fs from 'fs'
import { join } from 'path'

export default function getPosts() {
  const directory = join(process.cwd(), 'orgfiles')
  const fileNames = fs.readdirSync(directory)

  return fileNames.map((fileName) => {
    const filePath = join(directory, fileName)
    const body = fs.readFileSync(filePath, 'utf8')

    return {title: fileName, body: body}
  })
}
