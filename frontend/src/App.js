import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import User from './User'
import NewUserForm from './NewUserForm'
const backendURL = 'http://localhost:8080/api/users'

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      users: [],
      newUserName: '',
      newUserEmail: ''
    }
  }

  componentDidMount() {
    this.getUsersAxios()
  }

  getUsersAxios() {
    axios({method: 'GET', url: backendURL})
    .then(users => this.setState({users: users.data}))
  }

  createUserAxios() {
    axios({
      method: 'POST',
      url: backendURL,
      data: {
        name: this.state.newUserName,
        email: this.state.newUserEmail
      }
    })
    .then(newUser => {
      console.log(newUser)
      this.setState(prevState => ({
        users: [...prevState.users, newUser.data]
      }))
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createUserAxios()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    console.log(this.state)

    let allUsers = this.state.users.map(user =>{
      return <User key={user._id} user={user}/>
    })

    return(
      <div className="App">
        <NewUserForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {allUsers}
      </div>
    )
  }
}

export default App;
