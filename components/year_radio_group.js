import { Fragment } from 'react'

function buildYears() {
  const years = ['ALL']
  const currentYear = new Date().getFullYear()

  for(let i=currentYear; i>=2009; i--) {
    years.push(i)
  }

  return years
}

const YEARS = buildYears()

export default function YearRadioGroup({onChangeYear, year}) {
  const index = (year == 'ALL') ? 0 : (new Date().getFullYear() - year)

  return (
    <div className='year-radio-group'>
      <div className="btn-group" role="group">
        {YEARS.map((y, i) => {
          return (
            <Fragment key={y}>
              <input type="radio"
                     name="year-radio"
                     className="btn-check"
                     id={`year-${y}`}
                     value={y}
                     defaultChecked={y==year}
                     onClick={onChangeYear} />
              <label className="btn btn-outline-primary"
                     htmlFor={`year-${y}`}>{y}
              </label>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
