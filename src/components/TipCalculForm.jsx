import { useState, useEffect } from 'react'
import TipButton from './TipButton'
import Bill from './Bill'
import People from './People'
import TipCalculOutput from './TipCalculOutput'

function TipCalculForm() {
  const [bill, setBill] = useState()
  const [people, setPeople] = useState()
  const [tip, setTip] = useState()

  const [tipAmount, setTipAmount] = useState((0).toFixed(2))
  const [totalAmount, setTotalAmount] = useState((0).toFixed(2))

  const [reset, setReset] = useState(false)

  const [value, setValue] = useState('')

  const handleCustomTip = (e) => {
    let custom = e.target.value
    setValue(custom)
    setTip(custom)
  }

  const handleChange = (e) => {
    let tip = +e.currentTarget.value
    setTip(tip)
  }

  const handlePeopleChange = (e) => {
    let people = Number(e.target.value)
    setPeople(people)
  }

  const handleBillChange = (e) => {
    let bill = Number(e.target.value)
    setBill(bill)
  }

  const handleReset = (e) => {
    setReset(true)
    setBill('')
    setPeople('')
    setTip()
    setTipAmount(0)
    setTotalAmount(0)
    console.log('reset')
    e.preventDefault()
  }

  const calculateTip = () => {
    let result = parseFloat((((tip / 100) * bill) / people).toFixed(2));
    if (result === 'NaN') {
      result = Number(0).toFixed(2)
    }
    setTipAmount(result)
  }

  const calculateTotal = () => {
    let resultA = parseFloat((bill / people + ((tip / 100) * bill) / people).toFixed(2));

    if (resultA === 'NaN') {
      resultA = Number(0).toFixed(2)
    }

    setTotalAmount(resultA)
  }

  useEffect(() => {
    calculateTip()
    calculateTotal()
    // setTotalAmount(resultA)
  })

  return (
    <div className="grid">
      <div className="tip-form">
        <Bill bill={bill} handleBillChange={handleBillChange} />
        <div>
          <label>Select Tip %</label>
          <div>
            <TipButton
              tip={tip}
              handleChange={handleChange}
              value={value}
              handleCustomTip={handleCustomTip}
            />
          </div>
        </div>
        <People people={people} handlePeopleChange={handlePeopleChange} />
      </div>
      <div>
        <TipCalculOutput
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          handleReset={handleReset}
          reset={reset}
        />
      </div>
    </div>
  )
}

export default TipCalculForm
