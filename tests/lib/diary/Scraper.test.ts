import Scraper, {Path, RawEntry} from '@lib/diary/Scraper'

describe('Scraper', () => {
  test('getPaths', async () => {
    const result: Path[] = await Scraper.getPaths()
    const path: Path = "/eggc/memo/main/README.md"

    expect(result).toEqual(expect.arrayContaining([path]))
  })

  test('getRawEntry', async () => {
    const result: RawEntry = await Scraper.getRawEntry("/eggc/memo/main/README.md")

    expect(result).toBe("これは eggc の個人的なメモを整理整頓して蓄えるリポジトリ\n")
  })
})
