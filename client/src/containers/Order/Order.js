import React, { Component } from "react"
import { connect } from "react-redux"
import { get, getIn } from "immutable"
import { NavLink, Route, Redirect, withRouter } from "react-router-dom"
import * as actions from "../../store/actions"

import Overview from "./Overview/Overview"
import PriceAndConsumtion from "./PriceAndConsumtion/PriceAndConsumtion"

class Order extends Component {
  state = {
    show_more: false
  }
  componentWillMount() {
    this.props.fetchOrder(this.props.match.params.id)
  }
  handleToggleMore = () => {
    const state = { ...this.state }
    state.show_more = !state.show_more
    this.setState(state)
  }

  render() {
    return (
      <main className="container duel-card">
        <aside>
          <ul className="side-tab">
            <NavLink
              activeClassName="active"
              to={`/order/${this.props.match.params.id}/overview`}
            >
              <li>
                <i className="fas fa-chart-area" />
                <span className="text">Overview</span>
              </li>
            </NavLink>
            <NavLink
              to={`/order/${this.props.match.params.id}/priceandconsumtion`}
            >
              <li>
                <i className="fas fa-hand-holding-usd" />
                <span className="text">Price & Consumtion</span>
              </li>
            </NavLink>
            <NavLink
              to={`/order/${this.props.match.params.id}/woknitandaccess`}
            >
              <li>
                <i className="fas fa-tshirt" />
                <span className="text">WO-Knit & Access</span>
              </li>
            </NavLink>
            <NavLink
              to={`/order/${this.props.match.params.id}/knittingprogram`}
            >
              <li>
                <i className="fas fa-industry" />
                <span className="text">Knitting Program</span>
              </li>
            </NavLink>
          </ul>
        </aside>

        <article className="card overview-card">
          <Route
            path="/order/:id"
            exact
            render={() => (
              <Redirect
                exact
                to={`/order/${this.props.match.params.id}/overview`}
              />
            )}
          />
          {this.props.order ? (
            <Route
              path="/order/:id/overview"
              render={() => (
                <Overview
                  showMore={this.state.show_more}
                  handleToggleMore={this.handleToggleMore}
                  order={this.props.order}
                />
              )}
            />
          ) : null}
          {this.props.order ? (
            <Route
              path="/order/:id/priceandconsumtion"
              exact
              render={() => (
                <PriceAndConsumtion order={this.props.order.get("tabledata")} />
              )}
            />
          ) : null}
        </article>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.getIn(["order", "order"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: id => dispatch(actions.fetchOrder(id))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Order)
)