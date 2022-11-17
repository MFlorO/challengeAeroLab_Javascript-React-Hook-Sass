import React,{useState} from "react";
import styles from "./Products.module.scss";
import { useUser } from "../../Hook/useHookUser";
import icons from "~/assets/icons/coin.svg";
import BotonCanjear from "./BotonCanjear/BotonCanjear"



const Products = ({name, img, category, cost}) => {

  const user = useUser()

  const [, , point] = user //destructuring del array

  const [active, setActive] = useState(false) //Para manejar el estado del selected de cada card de Product

  return (
    <>
    {active && 
    <div className={styles.containerSelected}>
      <div>{cost}<img alt="logo" src={icons} /></div> 
      <button className={styles.buttonSelected}>Redeem now</button>
    </div>
    }

    <div className={styles.container}>
      <div className={styles.subcontainer1}>
        {
          point > cost ? <BotonCanjear active={active} setActive={setActive}/>
          : <div className={styles.notShopping}>
              <p>You need {cost - point}</p>
              <img alt="logo" src={icons} className={styles.imagen}/>
            </div> 
        } 
        
      </div>
      
      <div className={styles.subcontainer2}>
        <img src={img.url} alt="imagen del producto" />
        <p>{category}</p>
        <h5>{name}</h5>
      </div>
      
    </div>

    </>
  );
};

export default Products;
