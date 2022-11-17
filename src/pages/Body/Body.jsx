import React from "react";
import { ProductsList, Filters, Count } from "~/components";
import { useProduct, useMemoFilter } from "~/Hook";

import styles from "./Body.module.scss";

const Body = () => {

  const productAll = useProduct(); //Me traigo del Hook los datos

  const filtersProducts = useMemoFilter()  //Me traigo del Hook personalizado la logica del filtro
  const [filters, setFilters, filterProducts] = filtersProducts
  

  return (
    <div className={styles.container}>
      <div className={styles.subContainerArriba}>
        <Count productAll={productAll} filterProducts={filterProducts}/>
        <Filters filters={filters} setFilters={setFilters}/>
      </div>

      <ProductsList filterProducts={filterProducts} />

      <div className={styles.subContainerAbajo}>
        <Count productAll={productAll} filterProducts={filterProducts}/>
      </div>
    </div>
  );
};

export default Body;
