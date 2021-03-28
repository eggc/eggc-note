// rehype のタグと、それに含まれる children を受け取り
// それが数式ならば数式のための properties を持った Node を返す。
export default function createMathElement(tagName, children) {
  const first = children[0]
  const last = children[children.length - 1]
  let haveMathBlock = false

  if (tagName == 'p' && first.type == 'text' && last.type == 'text') {
    if (first.value.startsWith("\\[") && last.value.endsWith("\\]")) {
      first.value = first.value.slice(2)
      last.value = last.value.slice(0, -2)
      haveMathBlock = true
    } else if (first.value.startsWith("\\begin") && last.value.startsWith("\\end")) {
      haveMathBlock = true
    }
  }

  if (haveMathBlock) {
    return {
      type: 'element',
      tagName: 'div',
      properties: { className: 'math-display' },
      children: children
    }
  } else {
    return undefined
  }
}
