import Page from 'components/page'
import {useState} from 'react'

import HTMLEntriesBuilder, {HTMLEntry} from '@lib/diary/HTMLEntriesBuilder'

type Props = {
  entries: string
}

export default function Index(props: Props) {
  const entries: HTMLEntry[] = JSON.parse(props.entries)
  const [currentEntry, setCurrentEntry] = useState(entries[0])

  const renderEntries = (entry: HTMLEntry) => {
    return (
      <li key={entry.path}>
        <button type='button' className="btn btn-link" onClick={ ()=> setCurrentEntry(entry) }>
          {entry.name}
        </button>
      </li>
    )
  }

  return (
    <Page {...props}>
      <div className="row">
        <div className="col-sm-3">
          <ul>
            {entries.map(renderEntries)}
          </ul>
        </div>
        <div className="col-sm-9">
          <span dangerouslySetInnerHTML={{ __html: currentEntry.html }}></span>
        </div>
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
