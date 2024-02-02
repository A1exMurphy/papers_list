
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/home');
  };

  return (
    <button
      className={props.className}
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
}



