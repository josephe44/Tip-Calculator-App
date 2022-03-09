function TipButton({ tip, handleChange, value, handleCustomTip }) {
  return (
    <ul className="tip-btn btn">
      <li>
        <input
          type="radio"
          id="tip5"
          name="tip"
          value="5"
          onChange={handleChange}
          checked={tip === 5}
        />
        <label htmlFor="tip5">5%</label>
      </li>
      <li>
        <input
          type="radio"
          id="tip10"
          name="tip"
          value="10"
          onChange={handleChange}
          checked={tip === 10}
        />
        <label htmlFor="tip10">10%</label>
      </li>
      <li>
        <input
          type="radio"
          id="tip15"
          name="tip"
          value="15"
          onChange={handleChange}
          checked={tip === 15}
        />
        <label htmlFor="tip15">15%</label>
      </li>
      <li>
        <input
          type="radio"
          id="tip25"
          name="tip"
          value="25"
          onChange={handleChange}
          checked={tip === 25}
        />
        <label htmlFor="tip25">25%</label>
      </li>
      <li>
        <input
          type="radio"
          id="tip50"
          name="tip"
          value="50"
          onChange={handleChange}
          checked={tip === 50}
        />
        <label htmlFor="tip50">50%</label>
      </li>
      <li>
        <input
          type="number"
          id="tipCustom"
          name="tip"
          placeholder="Custom"
          min={0}
          value={value}
          onChange={handleCustomTip}
        />
      </li>
    </ul>
  )
}

export default TipButton
