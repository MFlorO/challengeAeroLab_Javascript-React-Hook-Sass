import React from 'react';
import styles from './BotonRedeem.module.scss'
import { useRedeem, useProduct } from '../../../Hook'

const BotonRedeem = ({id}) => {
	const productAll = useProduct(); //Me traigo del Hook los datos
	const product = useRedeem(); //Me traigo del Hook los datos

	const [redeemHistory, addRedeem] = product

	const productFilter =  productAll.filter( p => id === p._id)

	console.log(productFilter)
	console.log("redeemHistory", redeemHistory)
	
	const handleChange = () => {
		addRedeem(productFilter)
	}


	return  <button onClick={handleChange} className={styles.buttonSelected}>Redeem now</button>
};

export default BotonRedeem;
