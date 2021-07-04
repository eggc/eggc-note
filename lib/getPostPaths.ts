import FileReader from './FileReader'
import File from './File'


function work(node: File): string[] {
  const paths: string[] = []
  const path = node.path()

  // 空文字列の場合ルートディレクトリ
  // ルートディレクトリは含めずそれ以外ならパスに追加
  if (path != '') {
    paths.push(path)
  }

  if (node.children) {
    node.children.forEach((file) => {
      work(file).forEach((path) => paths.push(path))
    })
  }

  return paths
}

// /posts/ 以下で取りうるパスのすべてを返す
export default function getPostPaths(): string[] {
  const fileReader = new FileReader()
  const tree = fileReader.tree()
  return work(tree)
}
