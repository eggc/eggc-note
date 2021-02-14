import fs from 'fs'
import { join } from 'path'
import parseOrg from './parseOrg'

export default async function getPosts() {
  const directory = join(process.cwd(), 'orgfiles')
  const fileNames = fs.readdirSync(directory)

  return await Promise.all(fileNames.map(async (fileName) => {
    const filePath = join(directory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const body = await parseOrg(fileContent)

    return {title: fileName, body: body}
  }))
}
