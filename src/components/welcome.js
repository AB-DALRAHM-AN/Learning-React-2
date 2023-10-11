function Welcome(props) {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <h1>you have, {props.age}</h1>
      <h1>you are from, {props.city}</h1>
      <h2>Good to see you here.</h2>
    </>
  )
}

export default Welcome;
