import * as types from 'actions/firestore/actionsTypes';

const initialState = {
  loading: false,
  data: {},
  error: null
};

const firestoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHIPMENT_CREATING:
      return { ...state, loading: true, error: null };
    case types.SHIPMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.shipment,
        error: null
      };
    case types.SHIPMENT_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
};

export default firestoreReducer;
