import u from 'unist-builder'

const blockMathProps = {
  tagName: 'div',
  properties: { className: 'math math-display' }
}

export default class BlockNodeBuilder {
  constructor(tagName, children) {
    this.tagName = tagName
    this.children = children

    this.first = this.children[0]
    this.last = this.children[this.children.length - 1]
  }

  canBuild() {
    return (this.tagName == 'p') && this._signType() > 0
  }

  build() {
    // \\[ ... \\] の形式の場合は開始記号と終了記号を削除する
    if(this._signType() == 1) {
      this.first.value = this.first.value.slice(2)
      this.last.value = this.last.value.slice(0, -2)
    }

    return u('element', blockMathProps, this.children)
  }

  _signType() {
    if (this.first && this.last && this.first.value && this.last.value) {
      const a = this.first.value
      const b = this.last.value

      if (a.startsWith("\\[") && b.endsWith("\\]")) {
        return 1
      } else if (a.startsWith("\\begin") && b.startsWith("\\end")) {
        return 2
      }
    }

    return -1
  }
}
