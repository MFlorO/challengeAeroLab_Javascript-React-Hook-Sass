import React from 'react';
import styles from './ButtonTryAgain.module.scss'

const ButtonTryAgain = ({productAll}) => {
	return <button onClick={() => setProductCopia(productAll)}>TRY AGAIN</button> 
};

export default ButtonTryAgain;
