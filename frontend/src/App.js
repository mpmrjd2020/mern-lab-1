import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
const backendURL = 'http://localhost:8080/api/users'

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios({method: 'GET', url: backendURL})
    .then(users => console.log(users))
  }

  render () {
    console.log(this.state)

    let allUsers = this.state.users.map(user =>{
      return <User key={user._id} user={user}/>
    })

    return(
      <div className="App">
        {allUsers}
      </div>
    )
  }
}

export default App;
