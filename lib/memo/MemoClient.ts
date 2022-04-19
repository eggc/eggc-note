import memo from 'memo'

type Slug = string[]

type Node = {
  name: string
  key: string
  children: Node[]
}

export default class MemoClient {
  public static findNodeBySlug(slug: Slug, node: Node): Node | undefined {
    node ||= memo.tree()
    const nodeKey = node.key.replace(/\..*$/, "")
    const key = "/" + slug.join("/")

    if (nodeKey == key) {
      return node
    } else {
      let find = null
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

  private static listKeys(tree: Node): Slug[] {
    const list = tree.children.map(MemoClient.listKeys).flat()
    const slug = tree.key.split("/")
    slug.shift() // split で作られた空文字を捨てる

    if (slug.length > 0) {
      // ファイル名から拡張子を取り除く
      const name = slug.pop().replace(/\..*$/, "")
      slug.push(name)
    }

    return [slug, ...list]
  }
}
