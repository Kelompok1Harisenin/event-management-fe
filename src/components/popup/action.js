// import React from 'react's
import { setPopupVisible } from './../../redux/slices/paymentPopup';

export const showPopup = () => {
  return (dispatch) => {
    dispatch(setPopupVisible(true));
  };
};

export const closePopup = () => {
  return (dispatch) => {
    dispatch(setPopupVisible(false));
  };
};
