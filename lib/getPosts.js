import fs from 'fs'
import { join } from 'path'
import lineByLine from 'n-readlines'

function buildPath(relativePath = '') {
  return join(process.cwd(), 'orgfiles', relativePath)
}

function getTags(filePath) {
  const liner = new lineByLine(filePath.toString())

  // とりあえず 20 行探索して見つからなければ諦める
  for(let i = 0; i<20; i++) {
    let line = liner.next().toString()

    if (line.startsWith("#+TAGS:")) {
      const tags = line.split(' ')
      tags.shift()
      return tags
    }
  }

  return []
}

function latestOrder(a, b) {
  return fs.statSync(buildPath(b.name)).mtime.getTime() -
         fs.statSync(buildPath(a.name)).mtime.getTime()
}

export default function getPosts() {
  let files
  files = fs.readdirSync(buildPath(), { withFileTypes: true })
  files = files.filter((file) => file.isFile())
  files = files.sort(latestOrder)

  return files.map((file) => {
    const name = file.name.slice(0,-4) // 拡張子を消す
    const tags = getTags(buildPath(file.name))
    return { name, tags }
  })
}
