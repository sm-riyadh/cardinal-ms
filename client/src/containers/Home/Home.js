import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
// eslint-disable-next-line
import { getIn, toJS } from "immutable"
import * as actions from "../../store/actions/index"

const BuyerOptions = props => <option value={props.value}>{props.value}</option>

class Home extends Component {
  state = {
    draft_metadata: {
      // buyer: "",
      order_no: "",
      style_no: "",
      buyer: "H1Z1"
    }
  }
  handleChange = e => {
    const state = { ...this.state }
    state.draft_metadata[e.target.name] = e.target.value
    this.setState(state)
  }
  sendDraftMetadata = e => {
    e.preventDefault()
    const draft = { ...this.state.draft_metadata }
    draft.tabledata = this.props.tabledata.toJS()
    this.props.sendDraftMetadata(draft, this.props.history)
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/order">
          <button className="btn btn-dark">Orders</button>
        </Link>
        <Link to="/draft">
          <button className="btn btn-dark">Drafts</button>
        </Link>
        <br />
        <br />
        <form onSubmit={this.sendDraftMetadata}>
          <select name="buyer" onChange={this.handleChange} defaultValue="">
            <option value="" disabled>
              Choose buyer
            </option>
            {this.props.buyers
              ? this.props.buyers.map((data, index) => (
                  <BuyerOptions value={data} key={index} />
                ))
              : null}
          </select>
          <br />
          <br />
          <input
            type="text"
            name="order_no"
            className="search-input"
            placeholder="Order no"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.draft_metadata.order_no}
          />
          <br />
          <br />
          <input
            type="text"
            name="style_no"
            className="search-input"
            placeholder="Style no"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.draft_metadata.style_no}
          />
          <br />
          <br />
          <input type="submit" className="btn" value="Create Order" />
          <br />
          <br />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    buyers: state.getIn(["order", "buyers"]),
    tabledata: state.getIn(["draft", "tabledata"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchBuyers: () => dispatch(actions.fetchBuyers()),
    sendDraftMetadata: (payload, router) =>
      dispatch(actions.sendDraftMetadta(payload, router))
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
