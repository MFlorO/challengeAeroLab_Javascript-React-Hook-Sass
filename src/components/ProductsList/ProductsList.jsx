import React from "react";
import {Products} from "~/components";
import styles from "./ProductsList.module.scss";



const ProductsList = ({products}) => {

  const product = products?.map(({ img, category, name, _id:id, cost }) => {   //Mapeo los datos que me traje del hook para poder recorrer uno por uno 
                                      //Destructuro lo que necesito
    return (
      <div key={id} className={styles.container}>
        <Products name={name} img={img} category={category} cost={cost} id={id}/>
      </div>
    );
  });

  
  return <div className={styles.container}>{product}</div>;
};

export default ProductsList;
