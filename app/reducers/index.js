import { combineReducers } from 'redux'
import {
  SCAN_UPC,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from 'actions'

function scanUPC(state = 'reactjs', action) {
  switch (action.type) {
    case SCAN_UPC:
      return action.upc
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByRequestConfig(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.request_config]: posts(state[action.request_config], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByRequestConfig,
  scanUPC
})

export default rootReducer
