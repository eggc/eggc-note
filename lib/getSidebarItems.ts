import FileReader from './FileReader'
import File from './File'

export default function getSidebarItems(keys?: string[]) {
  const fileReader = new FileReader()
  const tree = fileReader.tree()
  let result: File[] = tree.children

  if (keys) {
    const id = keys.shift()
    const child: File = tree.children.find((child: File) => child.name() == id)
    result = result.concat(child.children || [])
  }

  result = result.sort((a, b) => a.fullPath > b.fullPath ? 1 : -1)

  return result.map((file) => {
    return {
      title: file.name(),
      path: file.path(),
      format: file.extname()
    }
  })
}
