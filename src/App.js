import React from 'react';

/*
class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am a spartan")}}/>
      </React.Fragment>
    )
  }
}
*/

const App = () => {
  const profiles = [
    { name: "Spartan", sex: "Man" },
    { name: "Obayashi" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} sex={profile.sex} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am a {props.name}! I am a {props.sex}!</div>
}

User.defaultProps = {
  sex: "Female"
}

export default App;
