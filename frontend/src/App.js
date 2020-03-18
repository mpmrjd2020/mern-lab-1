import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
const backendURL = 'http://localhost:8080/api/users'

class App extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    axios({method: 'GET', url: backendURL})
    .then(users => console.log(users))
  }

  render () {
    return(
      <div className="App">
  
      </div>
    )
  }
}

export default App;
