import React,{ useState } from "react";
import { ProductsList, Filters, Count, Search, Pagination} from "~/components";
import { useProduct } from "~/Hook";
import styles from "./Body.module.scss";
import ButtonTryAgain from "./ButtonTryAgain/ButtonTryAgain";


const Body = () => {

  const productAll = useProduct(); //Me traigo del Hook los datos

  const [productCopia, setProductCopia] = useState(productAll) //Creo una copia de la "data"

  const [filters, setFilters] = useState("") //Estado para setear cuando clickeo los botones filter

  const [currentPage, setCurrentPage] = useState(0) //Estado para manejar la pagina


  let filterProducts = () => { 
   
    if(filters === "Highest Price"  ) return [...productCopia].slice(currentPage, currentPage + 12).sort((a,b) => b.cost - a.cost );
        
    if(filters === "Lowest Price") return [...productCopia].slice(currentPage, currentPage + 12).sort((a,b) => a.cost - b.cost )
        
    if(filters === "All Element") return [...productCopia].slice(currentPage, currentPage + 12)

    return [...productCopia].slice(currentPage, currentPage + 12);
  }

  let cantidad = filterProducts().length > 0 ? filterProducts().length + currentPage : currentPage

  

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
      {productCopia === "" ? <ButtonTryAgain productAll={productAll} />: <ProductsList products={filterProducts()} />}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} products={productCopia} cantidad={cantidad}/>
      </div>

      <div className={styles.subContainerAbajo}>
        <Count productAll={productCopia} current={cantidad}/>
      </div>

    </div>
  );
};

export default Body;
