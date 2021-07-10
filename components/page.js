import Sidebar from './sidebar'

export default function Page(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Sidebar {...props} />
        </div>
        <div className="col-lg-8">
          <main className="content">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}
