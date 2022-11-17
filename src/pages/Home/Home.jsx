import React from 'react';
import { NavBar } from "~/components";
import Body from '../Body/Body';
import Banner from './Banner';
import styles from "./Home.module.scss";


const Home = () => {


	return (
		<div className={styles.container}>
		<contextProvider >
		  <NavBar />
		  <Banner />
		  <Body />
		</contextProvider>
		</div>
	  );
};

export default Home;
