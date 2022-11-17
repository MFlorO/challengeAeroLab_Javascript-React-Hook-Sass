import React from "react";
import styles from "./BotonCanjear.module.scss";
import {AiFillShopping} from "react-icons/ai"

export const BotonCanjear = ({active, setActive}) => {

  return (
    <button className={active === false? styles.shopping : styles.shoppingSelected} onClick={()=>{setActive(!active)}}>
      <AiFillShopping size={"2rem"} />
    </button>
  );
};

export default BotonCanjear;