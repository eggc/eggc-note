import Sidebar from './sidebar'
import PageSelect from './page_select'
import Link from 'next/link'

export default function Page(props) {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12">
          <p><Link href="/">EGGC NOTE</Link></p>
          <PageSelect tree={props.tree} />
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <Sidebar {...props} />
        </div>
        <div className="col-lg-8">
          <main>
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}
