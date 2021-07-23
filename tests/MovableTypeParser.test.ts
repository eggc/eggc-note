import MovableTypeParser from '../lib/MovableTypeParser'

test('MovableTypeParser.parse', () => {
  const parser = new MovableTypeParser()
  console.dir(parser.read(), { depth: null })
})
