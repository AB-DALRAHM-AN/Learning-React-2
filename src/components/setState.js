import React from 'react';

function WelcomeSet (props) {
  let [name, setName] = React.useState('John Doe');
  let [age, setAge] = React.useState(20);
  return (
    <>
      <h3>My Name is {name}</h3>
      <h3>My Age is {age}</h3>
      <button onClick={() => setName('Abdo')}>Change Name</button>
      <button onClick={() => setAge(age++)}>Change Age</button>
    </>
  )
}

export default WelcomeSet;