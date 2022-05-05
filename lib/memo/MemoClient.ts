import memo from 'memo'

type Slug = string[]

type Node = {
  name: string
  key: string
  children: Node[]
  read: () => string
}

// ファイル名から拡張子を取り除く
function removeExt(fileName: string) {
  return fileName.replace(/\..*$/, "")
}

export default class MemoClient {
  public static findNodeBySlug(slug: Slug, node: Node = memo.tree()): Node | undefined {
    const nodeKey = removeExt(node.key)
    const key = slug.join("/")

    if (nodeKey == key) {
      return node
    } else {
      let find = undefined
      node.children.forEach((child) => {
        find ||= this.findNodeBySlug(slug, child)
      })
      return find
    }
  }

  public static slugs(): Slug[] {
    const tree = memo.tree() as Node
    return this.listKeys(tree)
  }

  public static navItems(node: Node = memo.tree()): any {
    return {
      title: removeExt(node.name),
      href: "/memo/" + removeExt(node.key),
      children: node.children.map(child => this.navItems(child))
    }
  }

  private static listKeys(tree: Node): Slug[] {
    const list = tree.children.map(MemoClient.listKeys).flat()
    const slug = tree.key.split("/")
    const last = slug.pop()

    if (last) {
      slug.push(removeExt(last))
    }

    return [slug, ...list]
  }
}
