import React, {Component} from 'react'
import './App.css'

import axios from 'axios'
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'

import Users from './Users'
import User from './User'
// import UserDetail from './UserDetail'
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

  deleteAxiosUser = event => {
    event.preventDefault()

    axios({
      method: 'DELETE',
      url: `${backendURL}${event.target.id}`
    })
    .then(deletedUser => {
      this.getUsersAxios()
    })
  }

  render () {
    console.log(this.state)

    let allUsers = this.state.users.map(user =>{
      return <User key={user._id} user={user} handleDelete={this.deleteAxiosUser}/>
    })

    return(
      <div className='App'>
        <nav>
          <Link to='/users'>All Users</Link>
          <Link to='/new-user-form'>New User Form</Link>
        </nav>
        <Switch>
            <Route exact path='/new-user-form' render={(
              <NewUserForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
            />
            <Route
              path='/users'
              render={routerProps => (
                <Users
                  {...routerProps}
                  users={this.state.users}
                  handleDelete={this.deleteAxiosUser}
                />
              )}
              />
              <Route path='/*' render={() => <Redirect to='/' />} />
        {/* {allUsers} */}
        </Switch>
      </div>
    )
  }
}

export default App;
