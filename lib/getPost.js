import fs from 'fs'
import { join } from 'path'
import parseOrg from './parseOrg'

export default async function getPost(postName) {
  const directory = join(process.cwd(), 'orgfiles')

  try {
    const filePath = join(directory, `${postName}.org`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const body = await parseOrg(fileContent)

    return { title: postName, body: body}
  } catch(e) {
    return { title: postName }
  }
}
