import React from "react";
import logo from "~/assets/logo.svg";
import icons from "~/assets/icons/coin.svg";
import styles from "./NavBar.module.scss";
import { useUser } from "~/Hook/useHookUser";




const NavBar = () => {

  const [_id, name, points, addPoints ] = useUser() //Me traigo los valores desde el Hook de user


  return (
    <div className={styles.container}>
      <img alt="logo" src={logo} />

      <div className={styles.user}>
       <p>{name}</p>   
        <div className={styles.points}>
          <p>{points}</p> 
          <button onClick={() => addPoints(1000)}><img alt="logo" src={icons} /></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

 