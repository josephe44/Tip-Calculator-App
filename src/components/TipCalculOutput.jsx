import Card from './shared/Card'
import NumberFormat from 'react-number-format'

function TipCalculOutput({ tipAmount, totalAmount, handleReset }) {
  // let tipAmountDisplay = Number(tipAmount).toFixed(2)
  // const handleTipAmountChange = (e) => {
  //   setTipAmount(tipAmount)
  // }

  return (
    <Card version={`output`}>
      <div>
        <div>
          <div className="tip">
            <p>
              Tip Amount <span> / person</span>
            </p>
            {/* <h2>${tipAmount}</h2> */}
            <h2>
              <NumberFormat
                fixedDecimalScale={true}
                value={tipAmount}
                placeholder="$0.00"
                displayType={'text'}
                prefix={'$'}
              />
            </h2>
          </div>
          <div className="tip tip-last">
            <p>
              Total <span> / person </span>
            </p>
            <h2>
              <NumberFormat
                fixedDecimalScale={true}
                value={totalAmount}
                placeholder="$0.00"
                displayType={'text'}
                prefix={'$'}
              />
            </h2>
          </div>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </Card>
  )
}

export default TipCalculOutput
