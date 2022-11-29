import React from "react";
import logo from "~/assets/logo.jpg";
import icons from "~/assets/icons/coin.svg";
import styles from "./NavBar.module.scss";
// import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from "~/Hook/";
// import { Login } from "../Login";
import { useNavigate } from "react-router";




const NavBar = () => {
	const navigate = useNavigate();

  const [_id, name, points, addPoints ] = useUser() //Me traigo los valores desde el Hook de user

  // const {user, isAuthenticated, isLoading} = useAuth0()



  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate("/")}><img alt="logo" src={logo} /></button>

      <div className={styles.user}>
       {/* {isAuthenticated && ( */}
        <>  
        <p>Welcome, {name}</p> 
        <div className={styles.points}>
          <p>{points}</p> 
          <button onClick={() => addPoints(1000)}><img alt="logo" src={icons} /></button>
        </div>
        </>
       {/* ) */}
      {/* } */}
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default NavBar;

 