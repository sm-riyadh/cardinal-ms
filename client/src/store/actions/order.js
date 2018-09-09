import Axios from "axios"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const saveOrder = payload => {
  return {
    type: actionTypes.SAVE_ORDER,
    payload
  }
}
export const saveOrders = payload => {
  return {
    type: actionTypes.SAVE_ORDERS,
    payload
  }
}
export const saveBuyers = payload => {
  return {
    type: actionTypes.SAVE_BUYERS,
    payload
  }
}

// Middlewares

export const fetchOrder = id => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/order/${id}`,
      headers: {
        token: Cookie.get("token")
      }
    })
      .then(res => {
        dispatch(saveOrder(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const publishOrder = (id, router) => {
  return dispatch => {
    Axios({
      method: "post",
      url: `http://localhost:3001/order/${id}`,
      headers: {
        token: Cookie.get("token")
      }
    })
      .then(res => {
        dispatch(fetchOrder(res.data))
        router.replace({ pathname: `/order/${res.data}` })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchOrders = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: "http://localhost:3001/order",
      headers: {
        token: Cookie.get("token")
      }
    })
      .then(res => {
        dispatch(saveOrders(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchBuyers = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: "http://localhost:3001/buyers",
      headers: {
        token: Cookie.get("token")
      }
    })
      .then(payload => {
        dispatch(saveBuyers(payload.data.buyers))
      })
      .catch(err => {
        console.log(err)
      })
  }
}