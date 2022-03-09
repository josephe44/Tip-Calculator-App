import NumberFormat from 'react-number-format'
import IconDollar from '../utilities/icon-dollar.svg'

function Bill({bill, handleBillChange}) {

  return (
    <>
      <form>
        <label>Bill</label>
        <span className='icon'>
          <img src={IconDollar} alt="person-icon" />
        </span>
        <NumberFormat
          className="space"
          onChange={handleBillChange}
          fixedDecimalScale={true}
          displayType="number"
          placeholder="0"
          value={bill}
        />
      </form>
    </>
  )
}

export default Bill
