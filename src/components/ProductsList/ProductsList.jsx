import React from "react";
import {Products} from "~/components";
import styles from "./ProductsList.module.scss";



const ProductsList = ({products}) => {

  const product = products?.map(({ img, category, name, _id:id, cost }) => {   //Mapeo los datos que me traje del hook para poder recorrer uno por uno. 
           //El signo ? se agrega en products porque contemplo la posibilidad de que la api no me devuelva nada entonces sin el signo se romperia la app; ya que recorreria 
           // algo que es undefined y no se puede
                                      //Destructuro lo que necesito. A _id le cambio el nombre a id
    return (
      <div key={id} className={styles.container}>
        <Products name={name} img={img} category={category} cost={cost} id={id}/>
      </div>
    );
  });

  
  return <div className={styles.container}>{product}</div>;
};

export default ProductsList;
