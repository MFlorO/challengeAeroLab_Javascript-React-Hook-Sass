import React,{useState, useEffect} from "react";
import { ProductsList, Filters, Count, Search} from "~/components";
import { useProduct, useMemoFilter } from "~/Hook";
import styles from "./Body.module.scss";


const Body = () => {

  const productAll = useProduct(); //Me traigo del Hook los datos

  const [filters, setFilters] = useState("")

  const [productCopia, setProductCopia] = useState(productAll)


  let filterProducts = () => { //SOLO se va a ejecutar cuando las dependencias cambien
   
    if(filters === "Highest Price"  ) return [...productCopia].sort((a,b) => b.cost - a.cost );
        
    if(filters === "Lowest Price") return [...productCopia].sort((a,b) => a.cost - b.cost )
        
    if(filters === "All Element") return productCopia

    return productCopia;
  }

  console.log(productCopia)

  return (
    <div className={styles.container}>

      <div className={styles.subContainerArriba}>
        <div className={styles.dividor1}>
          <Count productAll={productAll} filterProducts={filterProducts()}/>
          <Filters filters={filters} setFilters={setFilters}/>
        </div>
        <div className={styles.dividor1}>
            <Search productCopia={productCopia} setProductCopia={setProductCopia} productAll={productAll} />
        </div>
      </div>

      {productCopia === "" ? <button onClick={() => setProductCopia(productAll)}>TRY AGAIN</button> : <ProductsList productCopia={filterProducts()} />}

      <div className={styles.subContainerAbajo}>
        <Count productAll={productAll} filterProducts={filterProducts}/>
      </div>

    </div>
  );
};

export default Body;
