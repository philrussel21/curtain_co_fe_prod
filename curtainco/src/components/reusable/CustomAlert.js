import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useCurtainContext } from '../../config/CurtainCoContext';
import { ACTIONS } from '../../config/stateReducer';

function CustomAlert({ setPaymentFailedOrCancelled }) {
  const { state } = useCurtainContext();
  const { severity, message } = state.alert;

  const handleClose = () => {
    setPaymentFailedOrCancelled(false);
  };
  return (
    <div>
      <Alert variant="outlined" severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </div>
  );
}

export default CustomAlert;
