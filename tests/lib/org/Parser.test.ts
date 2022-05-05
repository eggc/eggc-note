import { describe, test, expect } from "@jest/globals"
import Parser from "@/lib/org/Parser"

describe('Parser', () => {
  test('parse', async () => {
    const org = "* 1st level"
    const html = await Parser.parse(org)

    expect(html).toEqual("<div class=\"section\"><h1 id=\"1st-level\"><a href=\"#1st-level\">1st level</a></h1></div>")
  })
})
