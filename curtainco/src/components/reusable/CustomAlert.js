import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useCurtainContext } from '../../config/CurtainCoContext';
import { ACTIONS } from '../../config/stateReducer';

function CustomAlert() {
  const { state, dispatch } = useCurtainContext();
  const { severity, message } = state.alert;

  const handleClose = () => {
    dispatch({
      type: ACTIONS.SET_ALERT,
      payload: {
        severity: "success",
        message: ""
      }
    });
  };
  return (
    <div>
      <Alert variant="outlined" severity={severity}>
        {message}
      </Alert>
    </div>
  );
}

export default CustomAlert;
