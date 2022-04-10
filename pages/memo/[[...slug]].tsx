import Page from 'components/Page'
import { NextRouter, useRouter } from 'next/router'
import HTMLEntriesBuilder, {HTMLEntry} from '@lib/diary/HTMLEntriesBuilder'

type Slug = string[] | undefined

type Props = {
  appTitle: string
  entries: string
}

function findCurrentEntry(router: NextRouter, entries: HTMLEntry[]) {
  const slug: Slug = router.query.slug as Slug
  let entry: HTMLEntry = entries[0]

  if (slug) {
    const currentPath = "/eggc/memo/main/" + slug.join("/") + ".org"
    entry = entries.find((entry) => entry.path == currentPath) || entries[0]
  }

  return entry
}

export default function Index(props: Props) {
  const router = useRouter()
  const entries: HTMLEntry[] = JSON.parse(props.entries)
  const currentEntry = findCurrentEntry(router, entries)
  const memoItems = entries.map((entry: HTMLEntry) => {
    return { href: "/memo/" + entry.name, title: entry.name }
  })

  return (
    <Page sidebarItems={memoItems} {...props}>
      <div className="col-sm-9 eggc-note-memo" dangerouslySetInnerHTML={{ __html: currentEntry.html }}>
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const entries: HTMLEntry[] = await HTMLEntriesBuilder.build()

  return {
    props: { entries: JSON.stringify(entries) }
  }
}

export async function getStaticPaths() {
  const entries: HTMLEntry[] = await HTMLEntriesBuilder.build()
  const paths = entries.map((entry) => { return { params: { slug: [entry.name] } } })
  paths.push({ params: { slug: [] }})

  return { paths: paths, fallback: false }
}
