import React from 'react';
import PropTypes from 'prop-types';
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
    { name: "Spartan", age: 23 },
    { name: "Obayashi", age: 23 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am a {props.name}! I am a {props.age}!</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
