import React from "react";
import { ProductsList, Filters, Count, Search, Pagination} from "~/components";
import { useProduct, UseHookFilterAndPaginado } from "~/Hook";
import styles from "./Body.module.scss";
import TryAgain from "./TryAgain/TryAgain";



const Body = () => {

  const productAll = useProduct(); //Me traigo del Hook los datos

  const [filterProducts, productCopia, setProductCopia, filters, setFilters, currentPage, setCurrentPage, cantidad, itemsPerPage] = UseHookFilterAndPaginado();




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
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} products={productCopia} cantidad={cantidad} itemsPerPage={itemsPerPage}/>
      {productCopia === "" ? <TryAgain />: <ProductsList products={filterProducts()} />}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} products={productCopia} cantidad={cantidad} itemsPerPage={itemsPerPage}/>
      </div>

      <div className={styles.subContainerAbajo}>
        <Count productAll={productCopia} current={cantidad}/>
      </div>

    </div>
  );
};

export default Body;
