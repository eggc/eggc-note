import Page from 'components/page'
import {useState} from 'react'

import Entry from '@lib/diary/Entry'
import EntriesBuilder from '@lib/diary/EntriesBuilder'

type Props = {
  entries: string
}


export default function Index(props: Props) {
  const entries = JSON.parse(props.entries)
  const [currentEntry, setCurrentEntry] = useState(entries[0])

  const renderEntries = (entry: Entry) => {
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
        <div className="col-sm-3">{entries.map(renderEntries)}</div>
        <div className="col-sm-9">{currentEntry.raw}</div>
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const entries: Entry[] = await EntriesBuilder.build()

  return {
    props: { entries: JSON.stringify(entries) }
  }
}
