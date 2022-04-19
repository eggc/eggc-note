import memo from 'memo'

type Node = {
  name: string
  key: string
  children: Node[]
}

export default class MemoClient {
  public static slugs() {
    const tree = memo.tree() as Node
    return this.listKeys(tree)
  }

  private static listKeys(tree: Node): string[] {
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
