import u from 'unist-builder'
import InlineNodeBuilder from './math/InlineNodeBuilder'
import BlockNodeBuilder from './math/BlockNodeBuilder'

// rehype のタグと、それに含まれる children を受け取り
// それが数式ならば数式のための properties を持った Node を返す。
export default function createMathElement(tagName, children) {
  const inlineNodeBuilder = new InlineNodeBuilder(tagName, children)
  const blockNodeBuilder = new BlockNodeBuilder(tagName, children)

  if(inlineNodeBuilder.canBuild()) {
    return inlineNodeBuilder.build()
  } else if (blockNodeBuilder.canBuild()) {
    return blockNodeBuilder.build()
  } else {
    return undefined
  }
}
