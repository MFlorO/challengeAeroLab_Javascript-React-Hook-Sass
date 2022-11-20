import React from 'react';
import styles from './BotonRedeem.module.scss'
import { useRedeem, useProduct } from '../../../Hook'
import Swal from 'sweetalert2'

const BotonRedeem = ({id}) => {
	const productAll = useProduct(); //Me traigo del Hook los datos
	const product = useRedeem(); //Me traigo del Hook los datos

	const [redeemHistory, addRedeem] = product

	const productFilter =  productAll.filter( p => id === p._id)

	console.log(productFilter)
	console.log("redeemHistory", redeemHistory)
	
	const handleChange = () => {
		Swal.fire({
			title: 'Are you sure?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#15CAF7BD',
			focusConfirm: 'none',
			cancelButtonColor: '#BDBDBD',
			confirmButtonText: 'Yes'
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(
				addRedeem(productFilter),
				'Redeemed!',
				'success'
			  )
			}
		  })
	}


	return  <button onClick={handleChange} className={styles.buttonSelected}>Redeem now</button>
};

export default BotonRedeem;
