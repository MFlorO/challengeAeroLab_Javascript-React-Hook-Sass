import React from 'react';
import styles from "./Count.module.scss";

const Count = ({productAll, filterProducts}) => {

	const current = filterProducts.length
	const total = productAll.length

	return (
		<div className={styles.container}>
			<p>{current} of {total} products</p>
		</div>
	);
};

export default Count;
