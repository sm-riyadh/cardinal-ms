import Axios from "../../axios-instance"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const saveDrafts = payload => {
  return {
    type: actionTypes.SAVE_DRAFTS,
    payload
  }
}
export const resetDrafts = () => {
  return {
    type: actionTypes.RESET_DRAFTS
  }
}
export const saveDraftMetadata = payload => {
  return {
    type: actionTypes.SAVE_DRAFT_METADATA,
    payload
  }
}
export const saveDraftTabledata = payload => {
  return {
    type: actionTypes.SAVE_DRAFT_TABLEDATA,
    payload
  }
}
export const resetDraft = () => {
  return {
    type: actionTypes.RESET_DRAFT
  }
}
export const resetDraftTable = () => {
  return {
    type: actionTypes.RESET_DRAFT_TABLE
  }
}
export const syncTables = data => {
  return {
    type: actionTypes.SYNCTABLES,
    payload: data
  }
}

// Middlewares
export const fetchDrafts = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: "/draft"
    })
      .then(payload => {
        dispatch(saveDrafts(payload.data))
      })
      .catch(() => {
        console.log()
      })
  }
}
export const fetchDraft = id => {
  return dispatch => {
    Axios({
      method: "get",
      url: `/draft/${id}`
    })
      .then(payload => {
        dispatch(saveDraftMetadata(payload.data))
        payload.data.tabledata
          ? dispatch(saveDraftTabledata(payload.data.tabledata))
          : dispatch(resetDraftTable())
      })
      .catch(() => {
        console.log()
      })
  }
}

export const sendDraftMetadta = (payload, router) => {
  return dispatch => {
    Axios({
      method: "post",
      url: "/draft",
      data: {
        payload
      }
    })
      .then(payload => {
        dispatch(saveDraftMetadata(payload.data))
        router.replace({ pathname: "/draft/" + payload.data.id })
      })
      .catch(() => {
        console.log()
      })
  }
}

export const sendDraftTabledata = payload => {
  return dispatch => {
    Axios({
      method: "patch",
      url: `/draft/${payload.id}`,
      data: {
        payload: payload.tabledata
      }
    }).catch(() => {
      console.log()
    })
  }
}

export const onChange = payload => {
  return dispatch => {
    dispatch(syncTables(payload))
  }
}

export const deleteDraft = (id, router) => {
  return dispatch => {
    Axios({
      method: "delete",
      url: `/draft/${id}`,
      data: null
    })
      .then(() => {
        if (router) {
          router.replace({ pathname: "/" })
        }
      })
      .catch(() => {
        console.log()
      })
  }
}
