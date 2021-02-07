import fs from 'fs'
import { join } from 'path'

export default function getPostNames() {
  const directory = join(process.cwd(), 'orgfiles')
  const fileNames = fs.readdirSync(directory)
  // 拡張子を消す
  return fileNames.map((fileName) => fileName.slice(0,-4))
}
