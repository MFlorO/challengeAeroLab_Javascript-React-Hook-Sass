// import React from 'react';
// import styles from './LandingPage.module.scss'
// import img from '~/assets/fondoLanding.png'
// import { useNavigate } from "react-router";



// const LandingPage = () => {

// 	const navigate = useNavigate();

// 	return (
// 	<div className={styles.container}>
		
// 		<div className={styles.subContainer}>
// 		   <h1>Welcome to ELECTRONICS</h1>
// 		   <h4>Technology unites</h4>
// 		   <h4>Technology grows</h4>
// 		   <h4>Integrates technology</h4>
// 		   <button onClick={() => navigate("/home")}>HOME</button>
		   
// 		</div>

// 		<div className={styles.subContainer2}>
// 	        <img src={img} alt="" />
// 		</div>
// 	</div>
// 	);
// };

// export default LandingPage;


import React from 'react';
import styles from './LandingPage.module.scss'
import img from '~/assets/fondoLanding.png'
import { useNavigate } from "react-router";



const LandingPage = () => {

	const navigate = useNavigate();

	return (
	<div className={styles.container}>
		

		   <button onClick={() => navigate("/home")}>BUY</button>
		   
		
	
	</div>
	);
};

export default LandingPage;
