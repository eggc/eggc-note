import Sidebar from './sidebar'

export default function Page(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Sidebar {...props} />
        </div>
        <div className="column is-9">
          <main className="content">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}
