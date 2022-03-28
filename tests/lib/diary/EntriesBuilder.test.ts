import Entry from '../../../lib/diary/Entry'
import EntriesBuilder from '../../../lib/diary/EntriesBuilder'

describe('EntriesBuilder', () => {
  test('build', async () => {
    const result: Entry[] = await EntriesBuilder.build()

    expect(result[0].name).toEqual("README")
    expect(result[0].path).toEqual("/eggc/memo/blob/main/README.md")
    expect(result[0].raw).toEqual("これは eggc の個人的なメモを整理整頓して蓄えるリポジトリ\n")
  })
})
