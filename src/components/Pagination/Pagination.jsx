import React from 'react';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import styles from './Pagination.module.scss'



const Pagination = ({currentPage, setCurrentPage, cantidad, products, itemsPerPage}) => {

	const previuos = () =>{
		currentPage > 0 && setCurrentPage(currentPage - itemsPerPage)
	}

	const next = () =>{
		(cantidad !== products.length ) && setCurrentPage(currentPage + itemsPerPage)
	}
	

	return (
	<div className={styles.container}>
		<button onClick={previuos} className={currentPage > 0? styles.button : styles.buttonDisable }><GrFormPrevious color="#15CAF7" /></button>
		<button onClick={next} className={(cantidad !== products.length ) ? styles.button : styles.buttonDisable }><GrFormNext color='#15CAF7' /></button>
	</div>
	);
};

export default Pagination;
