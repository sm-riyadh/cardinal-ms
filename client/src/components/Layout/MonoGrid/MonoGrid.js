import React from "react"
import "./MonoGrid.css"

import Aux from "../../../hoc/_Aux/_Aux"

const MonoGrid = props => {
  return (
    <div onScroll={props.handleScroll} className="container mono-grid">
      {!props.emptyTxt ? (
        <Aux>
          <div
            className={
              "card card-container " +
              (props.CustomCSS
                ? "custom-card-container-" + props.CustomCSS
                : "")
            }
          >
            {props.header ? (
              <div className="card-header">{props.header}</div>
            ) : null}
            <div className="card-body">{props.children}</div>
            {props.footer ? (
              <div className="card-footer">{props.footer}</div>
            ) : null}
          </div>
        </Aux>
      ) : (
        <h5 className="loading txt-lighter">{props.emptyTxt}</h5>
      )}
    </div>
  )
}

export default MonoGrid