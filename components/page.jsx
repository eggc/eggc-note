import Link from 'next/link'

export default function Page(props) {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-9 col-5">
          <Link href="/">EGGC NOTE</Link>
        </div>
        <div className="col-lg-3 col-7">
        </div>

        <div className="col-lg-12">
          <main>
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}
