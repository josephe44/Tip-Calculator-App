import NumberFormat from 'react-number-format'
import IconPerson from '../utilities/icon-person.svg'

function People({people, handlePeopleChange}) {


  return (
    <>
      <form>
        <label>Number of People</label>
        {people === 0 && <label className='error'>Can't be zero</label>}
        <span className='icon'>
          <img src={IconPerson} alt="person-icon" />
        </span>
        <NumberFormat
          className={`space ${people === 0 ? 'errorLine' : ''}`}
          onChange={handlePeopleChange}
          displayType="number"
          placeholder="0"
          value={people}
        />
      </form>
    </>
  )
}

export default People
