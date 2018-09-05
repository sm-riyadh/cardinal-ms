import React, { Component } from "react"
import Axios from "axios"
import Cookie from "js-cookie"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as actions from "../../store/actions/index"

import HeaderLayout from "../../components/Layout/Header/Header"

class Header extends Component {
  state = {
    searchFocus: false,
    accountClick: false,
    notificationClick: false,
    notificationUnread: 4,
    searchQuery: ""
  }
  handleSearchChange = e => {
    const state = this.state
    state.searchQuery = e.target.value
    this.setState(state)
  }
  handleSearchFocus = () => {
    const state = this.state
    state.accountClick = false
    state.notificationClick = false
    state.searchFocus = !state.searchFocus
    this.setState(state)
  }
  handleAccountClick = () => {
    const state = this.state
    state.accountFocus = false
    state.notificationClick = false
    state.accountClick = !state.accountClick
    this.setState(state)
  }
  handleNotificationClick = () => {
    const state = this.state
    state.accountFocus = false
    state.accountClick = false
    state.notificationClick = !state.notificationClick
    this.setState(state)
  }
  handleUnauthenticate = () => {
    const token = Cookie.get("token")
    if (token) {
      Axios({
        method: "delete",
        url: "http://localhost:3001/auth/signout",
        headers: {
          token
        }
      })
        .then(() => {
          Cookie.remove("token")
          this.props.unauthenticate()
          this.props.history.push({ pathname: "/signin" })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  render() {
    return (
      <div>
        <HeaderLayout
          searchQuery={this.state.searchQuery}
          searchEmpty={this.state.searchQuery ? true : false}
          searchFocus={this.state.searchFocus}
          handleSearchChange={this.handleSearchChange}
          handleSearchFocus={this.handleSearchFocus}
          handleAccountClick={this.handleAccountClick}
          accountClick={this.state.accountClick}
          handleNotificationClick={this.handleNotificationClick}
          notificationClick={this.state.notificationClick}
          notificationUnread={this.state.notificationUnread}
          handleUnauthenticate={this.handleUnauthenticate}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  state = state.get("init")

  return {
    authorization: state.get("authorization")
  }
}
const mapDispatchToProps = dispatch => {
  return {
    unauthenticate: () => dispatch(actions.unauthenticate())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
