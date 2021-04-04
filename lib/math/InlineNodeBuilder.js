import u from 'unist-builder'

const inlineMathProps = {
  tagName: 'span',
  properties: { className: 'math math-inline' }
}

export default class InlineNodeBuilder {
  constructor(tagName, children) {
    this.tagName = tagName
    this.children = children
  }

  canBuild() {
    return this._includeSign()
  }

  build() {
    let newChildren = []

    this.children.forEach((e) => {
    if (e.value.includes('$')) {
      const texts = e.value.split('$')

      for(let i = 0; i<texts.length; i+=2) {
        const node1 = u('text', texts[i])
        const node2 = u('text', texts[i+1])

        newChildren.push(node1)
        newChildren.push(u('element', inlineMathProps, [node2]))
      }
      // 終端に余計なものが入るのでドロップする
      newChildren.pop()
    } else {
      newChildren.push(e)
    }
    })

    return u('element', { tagName: this.tagName, properties: {}}, newChildren)
  }

  _includeSign() {
    return this.children.some((e) => {
      return e.value && e.value.includes(' $')
    })
  }
}
