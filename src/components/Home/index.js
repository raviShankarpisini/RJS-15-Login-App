// Write your code here

import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickChange = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === false) {
      this.setState(prevState => ({isLoggedIn: true}))
    } else {
      this.setState(prevState => ({isLoggedIn: false}))
    }
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {isLoggedIn === false ? (
            <Message message="Please Login" />
          ) : (
            <Message message="Welcome User" />
          )}
          {isLoggedIn === false ? (
            <Login onClick={this.onClickChange} />
          ) : (
            <Logout onClick={this.onClickChange} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
