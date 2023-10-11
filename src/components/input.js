function Input (props) {
  return (
    <>
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeholder} onChange={(e) => {
        console.log(e.target.value)
      }} />
    </>
  )
}

export default Input;