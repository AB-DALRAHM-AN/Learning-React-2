import React, { useState } from 'react'

// function Form () {
//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
//   const [gender, setGender] = useState('male')

//   const nameHandeler = (value) => {
//     setName(value)
//   }
//   const passwordHandeler = (value) => {
//     setPassword(value)
//   }
//   const genderHandeler = (value) => {
//     setGender(value)
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       console.log("form submitted");
//       console.log({
//         name,
//         password,
//         gender
//       });
//     }}>
//       <lable>Name</lable>
//       <input type="text" placeholder="Your Name" onChange={(e) => {
//         nameHandeler(e.target.value)
//       }} />
//       <br />
//       <label>Password</label>
//       <input type="text" placeholder="Your Password" onChange={(e) => {
//         passwordHandeler(e.target.value)
//       }} />
//       <br />
//       <label>Gender</label>
//       <select onChange={(e) => {
//         genderHandeler(e.target.value)
//       }}>
//         <option value='male'>male</option>
//         <option value='female'>female</option>
//       </select>
//       <br />
//       <input type="submit" value="submit" />
//     </form>
//   )
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      password:"",
      gender:"male"
    };
  }
  nameHandeler = (value) => {
    this.setState({
      name:value
    })
  }
  passwordHandeler = (value) => {
    this.setState({
      password:value
    })
  }
  genderHandeler = (value) => {
    this.state({
      gender:value
    })
  }
  render () {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted");
        console.log(this.state);
      }}>
        <lable>Name</lable>
        <input type="text" placeholder="Your Name" onChange={(e) => {
          this.nameHandeler(e.target.value)
        }} />
        <br />
        <label>Password</label>
        <input type="text" placeholder="Your Password" onChange={(e) => {
          this.passwordHandeler(e.target.value)
        }} />
        <br />
        <label>Gender</label>
        <select onChange={(e) => {
          this.genderHandeler(e.target.value)
        }}>
          <option value='male'>male</option>
          <option value='female'>female</option>
        </select>
        <br />
        <input type="submit" value="submit" />
      </form>
    )
    }
  }
export default Form