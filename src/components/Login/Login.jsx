import React from "react";
import { FaUserAlt, FaUserCog } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react'
import styles from './Login.module.scss'
import Swal from "sweetalert2";

const Login = () => {

	const {loginWithRedirect, logout} = useAuth0()
  const {isAuthenticated} = useAuth0()

  const logingOut = () => {
    Swal.fire({
			title: 'Are you sure logout?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#15CAF7BD',
			focusConfirm: 'none',
			cancelButtonColor: '#BDBDBD',
			confirmButtonText: 'Yes'
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(
				logout(),
				'Logout!',
				'success'
			  )
			}})
  }

  return (
    <div>
      <button className={styles.button} onClick={() => loginWithRedirect()}>
        {!isAuthenticated && <FaUserAlt size='1.2rem' /> }
      </button>
      <button className={styles.button} onClick={ logingOut }>
        {isAuthenticated && <FaUserCog size='1.5rem'/> }
      </button>
    </div>
  );
};

export default Login;
