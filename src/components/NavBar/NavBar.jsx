import React from "react";
import logo from "~/assets/logo.jpg";
import icons from "~/assets/icons/coin.svg";
import styles from "./NavBar.module.scss";
import { useUser } from "~/Hook/";
import { useNavigate } from "react-router";
import Login from "~/auth/pages";




const NavBar = () => {
	const navigate = useNavigate();

  const [_id, name, points, addPoints ] = useUser() //Me traigo los valores desde el Hook de user

  
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate("/")}><img alt="logo" src={logo} /></button>

      <div className={styles.user}>

        <>  
        <p>Welcome, {name}</p> 
        <div className={styles.points}>
          <p>{points}</p> 
          <button onClick={() => addPoints(1000)}><img alt="logo" src={icons} /></button>
        </div>
        </>

        {/* <Login /> */}
      </div>
    </div>
  );
};

export default NavBar;

 