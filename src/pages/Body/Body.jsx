import React from "react";
import { ProductsList, Filters, Count, Search, Pagination} from "~/components";
import { useProduct, UseHookFilterAndPaginado } from "~/Hook";
import styles from "./Body.module.scss";
import ButtonTryAgain from "./ButtonTryAgain/ButtonTryAgain";


const Body = () => {

  const productAll = useProduct(); //Me traigo del Hook los datos

  const [filterProducts, productCopia, setProductCopia, filters, setFilters, currentPage, setCurrentPage, cantidad] = UseHookFilterAndPaginado();




  return (
    <div className={styles.container}>

      <div className={styles.subContainerArriba}>
        <div className={styles.dividor1}>
          <Count productAll={productCopia} current={cantidad}/>
          <Filters filters={filters} setFilters={setFilters}/>
        </div>
        <div className={styles.dividor2}>
            <Search productCopia={productCopia} setProductCopia={setProductCopia} setCurrentPage={setCurrentPage} productAll={productAll} />
        </div>
      </div>

      <div className={styles.subContainerMedio}>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} products={productCopia} cantidad={cantidad}/>
      {productCopia === "" ? <ButtonTryAgain />: <ProductsList products={filterProducts()} />}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} products={productCopia} cantidad={cantidad}/>
      </div>

      <div className={styles.subContainerAbajo}>
        <Count productAll={productCopia} current={cantidad}/>
      </div>

    </div>
  );
};

export default Body;
