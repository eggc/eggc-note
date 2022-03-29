import HTMLEntriesBuilder, {HTMLEntry} from '@lib/diary/HTMLEntriesBuilder'

describe('HTMLEntriesBuilder', () => {
  test('build', async () => {
    const result: HTMLEntry[] = await HTMLEntriesBuilder.build()

    expect(result[0].name).toEqual("README")
    expect(result[0].path).toEqual("/eggc/memo/main/README.md")
    expect(result[0].html).toEqual("<p>これは eggc の個人的なメモを整理整頓して蓄えるリポジトリ</p>")
  })
})
