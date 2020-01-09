import firebaseService from 'enviroments/firebase';
import * as types from './actionsTypes';

export const writeShipment = (name, desc, weight, cost, seller) => dispatch => {
  dispatch(shipmentCreating());

  firebaseService
    .firestore()
    .collection("shipments")
    .add({name, desc, weight, cost, seller})
    .then(shipment => {
      dispatch(shipmentSuccess(shipment));
    })
    .catch(error => {
      dispatch(shipmentError(error.message));
    });
};

const shipmentCreating = () => ({
  type: types.SHIPMENT_CREATING
});

const shipmentSuccess = shipment => ({
  type: types.SHIPMENT_SUCCESS,
  shipment
});

const shipmentError = error => ({
  type: types.SHIPMENT_ERROR,
  error
});