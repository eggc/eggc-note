import fs from 'fs'
import { join } from 'path'
import parseOrg from './parseOrg'

export default async function getPost(postName) {
  const directory = join(process.cwd(), 'orgfiles')
  const stat = fs.statSync(join(directory, postName))

  if(stat.isDirectory()) {
    return { title: postName }
  } else {
    const filePath = join(directory, `${postName}.org`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const body = await parseOrg(fileContent)

    return { title: postName, body: body}
  }
}
