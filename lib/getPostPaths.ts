import FileReader from './FileReader'
import File from './File'

// /posts/ 以下で取りうるパスのすべてを返す
export default function getPostPaths(): string[] {
  const fileReader = new FileReader()
  const tree = fileReader.tree()
  let result = tree.children

  for (let i = 0; result[i]; i++) {
    if (result[i].children) {
      result = result.concat(result[i].children)
    }
  }

  return result.map((file: File) => file.path())
}
