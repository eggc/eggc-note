import FileReader from './FileReader'
import File from './File'


function work(node: File): string[] {
  if (node.children) {
    const paths: string[] = [node.path()]
    node.children.forEach((file) => {
      work(file).forEach((path) => paths.push(path))
    })
    return paths
  } else {
    return [node.path()]
  }
}

// /posts/ 以下で取りうるパスのすべてを返す
export default function getPostPaths(): string[] {
  const fileReader = new FileReader()
  const tree = fileReader.tree()
  return work(tree)
}
