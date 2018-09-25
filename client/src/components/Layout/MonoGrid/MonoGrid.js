import React, { Fragment } from "react"
import "./MonoGrid.css"

const MonoGrid = props => {
  return (
    <div onScroll={props.handleScroll} className="container mono-grid">
      {!props.emptyTxt ? (
        <Fragment>
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
        </Fragment>
      ) : (
        <h5 className="loading txt-lighter">{props.emptyTxt}</h5>
      )}
    </div>
  )
}

export default MonoGrid
