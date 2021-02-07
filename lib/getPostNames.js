import fs from 'fs'
import { join } from 'path'

export default function getPostNames() {
  const directory = join(process.cwd(), 'orgfiles')
  const fileNames = fs.readdirSync(directory)
  return fileNames
}
