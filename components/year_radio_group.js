import { Fragment } from 'react'

function buildYears() {
  const years = []
  const currentYear = new Date().getFullYear()

  for(let i=2009; i<=currentYear; i++) {
    years.push(i)
  }

  years.push('ALL')

  return years
}

const YEARS = buildYears()

export default function YearRadioGroup({onChangeYear, year}) {
  return (
    <div className="btn-group" role="group">
      {YEARS.map((y) => {
        return (
          <Fragment key={y}>
            <input type="radio"
                   name="year-radio"
                   className="btn-check"
                   id={`year-${y}`}
                   value={y}
                   defaultChecked={y==year}
                   onClick={onChangeYear} />
            <label className="btn btn-outline-primary" htmlFor={`year-${y}`}>{y}</label>
          </Fragment>
        )
      })}
    </div>
  )
}
