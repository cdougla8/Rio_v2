import fetch from 'cross-fetch'

export const SCAN_UPC = 'SCAN_UPC'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function scanUPC(upc) {
  return {
    type: SCAN_UPC,
    upc
  }
}

/*
request_config = (
  https://mws.amazonservices.com/${api_name}/${request_dt}/
  ?AWSAccessKeyId=${access_key}
  &Action=${request_type}
...request_type specific parameters...
  &MWSAuthToken=${auth_token}
  &MarketplaceId=ATVPDKIKX0DER
  &SellerId=${seller_id}
  &Signature=FUbIEXAMPLETUGtTS6sqNDt3OuLH8tbhz5YEXAMPLEw%3D
  &SignatureMethod=HmacSHA256
  &SignatureVersion=2
  &Timestamp=${request_ts}
  &Version=2014-03-01
)
*/

function requestPosts(request_config) {
  return {
    type: REQUEST_POSTS,
    request_config
  }
}

function receivePosts(request_config, json) {
  return {
    type: RECEIVE_POSTS,
    request_config,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(request_config) {
  return dispatch => {
    dispatch(requestPosts(request_config))
    return fetch(`https://www.reddit.com/r/${request_config}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(request_config, json)))
  }
}

function shouldFetchPosts(state, request_config) {
  const posts = state.postsByRequestConfig[request_config]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(request_config) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), request_config)) {
      return dispatch(fetchPosts(request_config))
    }
  }
}
