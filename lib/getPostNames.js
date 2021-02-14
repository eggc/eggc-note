import fs from 'fs'
import { join } from 'path'

export default function getPostNames() {
  const directory = join(process.cwd(), 'orgfiles')
  let fileNames = fs.readdirSync(directory, { withFileTypes: true })
  fileNames = fileNames.filter((file) => file.isFile())
  // 拡張子を消す
  fileNames = fileNames.map((file) => file.name.slice(0,-4))
  return fileNames
}
