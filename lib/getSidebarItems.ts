import FileReader from './FileReader'
import File from './File'

export default function getSidebarItems(keys?: string[]) {
  const fileReader: FileReader = new FileReader()
  const tree: File = fileReader.tree()
  return tree.serialize()
}
